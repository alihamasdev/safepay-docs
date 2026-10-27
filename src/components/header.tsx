"use client";

import { Dialog } from "@base-ui/react/dialog";
import { SidebarTrigger } from "fumadocs-ui/components/sidebar/base";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { useSpaciousLayout } from "fumadocs-ui/layouts/spacious";
import { SearchIcon, SidebarIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GithubIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";
import { gitConfig } from "@/lib/shared";

export function Header({ className, ...props }: React.ComponentProps<"header">) {
	return (
		<header
			id="nd-subnav"
			className={cn(
				"sticky top-(--fd-banner-height,0px) z-30 flex h-(--fd-header-height) items-center border-b-0 bg-fd-card [grid-area:header]",
				className,
			)}
			{...props}
		>
			<MobileHeader />
			<DesktopHeader />
		</header>
	);
}

function MobileHeader() {
	const { slots } = useSpaciousLayout();
	const { dialogHandle } = useSearchContext();

	return (
		<div className="flex w-full items-center px-4 md:hidden">
			<slots.navTitle className="me-auto inline-flex items-center gap-2.5 font-semibold" />

			<Dialog.Trigger
				handle={dialogHandle}
				type="button"
				data-search=""
				aria-label="Open Search"
				className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
			>
				<SearchIcon />
			</Dialog.Trigger>

			<SidebarTrigger className={buttonVariants({ variant: "ghost", size: "icon-sm" })}>
				<SidebarIcon />
			</SidebarTrigger>
		</div>
	);
}

function DesktopHeader() {
	const { props } = useSpaciousLayout();

	const pathname = usePathname();
	const normalizedPathname = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

	return (
		<div className="hidden w-full items-center justify-between ps-2 pe-4 md:flex">
			{/* Navigation Links (starts where content box starts) */}
			<nav className="flex items-center gap-2" aria-label="Documentation sections">
				{props.tabs.map((tab) => {
					const active = tab.urls ? tab.urls.has(normalizedPathname) : normalizedPathname === tab.url;
					return (
						<Link
							key={tab.url}
							href={tab.url}
							className={cn(
								"inline-flex items-center gap-2 px-2.5 py-1.5 text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0",
								active ? "text-fd-primary" : "text-fd-muted-foreground hover:text-fd-foreground",
							)}
							aria-current={active ? "page" : undefined}
						>
							{tab.icon}
							<span>{tab.title}</span>
						</Link>
					);
				})}
			</nav>

			{/* Header Actions on the Right */}
			<div className="flex items-center gap-2">
				<Link
					target="_blank"
					rel="noreferrer noopener"
					aria-label="GitHub repository"
					className={cn(buttonVariants({ size: "icon-sm", variant: "ghost", className: "[&_svg]:size-4 size-8" }))}
					href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
				>
					<GithubIcon className="size-4" />
				</Link>
				<div className="h-4 w-px bg-fd-border" aria-hidden="true" />
				<ThemeToggle />
				<div className="h-4 w-px bg-fd-border" aria-hidden="true" />
				<Link
					href="https://getsafepay.com/dashboard"
					target="_blank"
					rel="noreferrer noopener"
					className={cn(buttonVariants({ size: "sm", variant: "primary" }))}
				>
					Dashboard
				</Link>
			</div>
		</div>
	);
}

export function HeaderAction() {
	return null;
}
