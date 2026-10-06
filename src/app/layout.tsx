import { cn } from "cn";
import { RootProvider } from "fumadocs-ui/provider/next";
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

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" data-scroll-behavior="smooth" className={cn("scroll-smooth", geist.variable, mono.variable)} suppressHydrationWarning>
			<body className="flex flex-col min-h-dvh">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
