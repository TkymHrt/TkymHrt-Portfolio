import { getCollection, type CollectionEntry } from "astro:content";

type DatedEntry = {
  data: {
    publishedAt: Date;
  };
};

const newestFirst = <T extends DatedEntry>(a: T, b: T) =>
  b.data.publishedAt.getTime() - a.data.publishedAt.getTime();

const isVisible = ({ data }: { data: { draft: boolean } }) =>
  !import.meta.env.PROD || !data.draft;

export const getWorks = async () =>
  (await getCollection("works", isVisible)).sort(newestFirst);

export const getArticles = async () =>
  (await getCollection("articles", isVisible)).sort(newestFirst);

export const getBlogPosts = async () =>
  (await getCollection("blog", isVisible)).sort(newestFirst);

export const getWritingEntries = async () => {
  const [articles, posts] = await Promise.all([getArticles(), getBlogPosts()]);
  return [...articles, ...posts].sort(newestFirst);
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

export const toDateTime = (date: Date) => date.toISOString().slice(0, 10);

export const entryPath = (
  collection: CollectionEntry<"works" | "articles" | "blog">["collection"],
  id: string,
) => `/${collection}/${id}/`;
