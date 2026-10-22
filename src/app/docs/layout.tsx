import { DocsLayout } from "fumadocs-ui/layouts/spacious";
import { BookOpenIcon, Code2Icon, CreditCardIcon, TerminalIcon } from "lucide-react";

import { Header, HeaderAction } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
	const allPages = source.getPages();

	const documentationUrls = new Set(
		allPages
			.map((p) => p.url)
			.filter((url) => !url.startsWith("/docs/payments") && !url.startsWith("/docs/developers") && !url.startsWith("/docs/api-reference")),
	);

	const paymentsUrls = new Set(allPages.map((p) => p.url).filter((url) => url.startsWith("/docs/payments")));

	const developersUrls = new Set(allPages.map((p) => p.url).filter((url) => url.startsWith("/docs/developers")));

	const apiReferenceUrls = new Set(allPages.map((p) => p.url).filter((url) => url.startsWith("/docs/api-reference")));

	return (
		<DocsLayout
			tree={source.getPageTree()}
			{...baseOptions()}
			searchToggle={{ enabled: true }}
			tabs={[
				{
					title: "Documentation",
					url: "/docs",
					icon: <BookOpenIcon className="size-4" />,
					urls: documentationUrls,
				},
				{
					title: "Payments",
					url: "/docs/payments/overview",
					icon: <CreditCardIcon className="size-4" />,
					urls: paymentsUrls,
				},
				{
					title: "Developers",
					url: "/docs/developers/overview",
					icon: <Code2Icon className="size-4" />,
					urls: developersUrls,
				},
				{
					title: "API Reference",
					url: "/docs/api-reference",
					icon: <TerminalIcon className="size-4" />,
					urls: apiReferenceUrls,
				},
			]}
			slots={{
				header: Header,
				actions: HeaderAction,
				themeSwitch: ThemeToggle,
			}}
		>
			{children}
		</DocsLayout>
	);
}
