import { DocsLayout } from "fumadocs-ui/layouts/spacious";
import { BookOpenIcon, CodeIcon } from "lucide-react";

import { HeaderActions, ThemeToggle } from "@/components/header-actions";
import { MobileHeader } from "@/components/mobile-header";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
	return (
		<DocsLayout
			tree={source.getPageTree()}
			{...baseOptions()}
			searchToggle={{ enabled: false }}
			slots={{
				actions: HeaderActions,
				header: MobileHeader,
				themeSwitch: ThemeToggle,
			}}
			tabs={[
				{
					title: "Documentation",
					url: "/docs",
					icon: <BookOpenIcon className="size-4" />,
				},
				{
					title: "API Reference",
					url: "/docs/api-reference",
					icon: <CodeIcon className="size-4" />,
				},
			]}
		>
			{children}
		</DocsLayout>
	);
}
