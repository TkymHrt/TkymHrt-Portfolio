// Minimal Strapi fetcher for SSG
// Environment variables: STRAPI_URL, STRAPI_TOKEN

export type Product = {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string; // absolute or relative
  deployUrl?: string;
  githubUrl?: string;
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || "";
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || "";

function apiUrl(path: string) {
  const base = STRAPI_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

async function strapiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  const res = await fetch(apiUrl(path), { ...init, headers, next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

// Adapt to your Strapi collection name and fields
// Expected Strapi response (v4): { data: Array<{ id, attributes: { title, description, image: { url }, deployUrl, githubUrl } }> }
export async function getProducts(): Promise<Product[]> {
  type StrapiImage = { data?: { attributes?: { url?: string } } };
  type StrapiItem = {
    id: number;
    attributes: {
      title: string;
      description?: string;
      deployUrl?: string;
      githubUrl?: string;
      image?: StrapiImage;
    };
  };
  type StrapiResponse = { data: StrapiItem[] };

  // Customize the collection type name `products` and populate image
  const json = await strapiFetch<StrapiResponse>("/api/products?populate=image");
  return json.data.map((item) => {
    const img = item.attributes.image?.data?.attributes?.url;
    const absolute = img && (img.startsWith('http') ? img : `${STRAPI_URL?.replace(/\/$/, '')}${img}`);
    return {
      id: String(item.id),
      title: item.attributes.title,
      description: item.attributes.description,
      imageUrl: absolute,
      deployUrl: item.attributes.deployUrl,
      githubUrl: item.attributes.githubUrl,
    } satisfies Product;
  });
}

export function ensureEnvForStrapi() {
  if (!STRAPI_URL) {
    // eslint-disable-next-line no-console
    console.warn('STRAPI_URL (or NEXT_PUBLIC_STRAPI_URL) is not set. Falling back to static content.');
  }
}
