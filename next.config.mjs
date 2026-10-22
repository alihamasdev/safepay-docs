import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/docs/payments",
				destination: "/docs/payments/overview",
				permanent: false,
			},
			{
				source: "/docs/developers",
				destination: "/docs/developers/overview",
				permanent: false,
			},
		];
	},
};

export default withMDX(config);
