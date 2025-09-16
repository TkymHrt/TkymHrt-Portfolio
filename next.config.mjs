/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static Export for Cloudflare Pages
	output: 'export',
	// next/image is disabled for full-static export and remote images from R2
	images: { unoptimized: true },
};
export default nextConfig;
