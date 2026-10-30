import { cn } from "cn";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./global.css";

const geist = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const mono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

function getMetadataBase(): URL {
	if (process.env.NEXT_PUBLIC_SITE_URL) {
		return new URL(process.env.NEXT_PUBLIC_SITE_URL);
	}
	if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
		return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
	}
	if (process.env.VERCEL_URL) {
		return new URL(`https://${process.env.VERCEL_URL}`);
	}
	return new URL("https://safepay.alihamas.pk");
}

export const metadata: Metadata = {
	metadataBase: getMetadataBase(),
	title: {
		template: "%s | Safepay Docs",
		default: "Safepay Documentation",
	},
	description: "Comprehensive guides, integration SDKs, and API references for Safepay payment gateway.",
};

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" data-scroll-behavior="smooth" className={cn("scroll-smooth", geist.variable, mono.variable)} suppressHydrationWarning>
			<body className="flex min-h-dvh flex-col">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
