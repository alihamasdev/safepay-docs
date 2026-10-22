"use client";

import { Dialog } from "@base-ui/react/dialog";
import { SidebarTrigger } from "fumadocs-ui/components/sidebar/base";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { useSpaciousLayout } from "fumadocs-ui/layouts/spacious";
import { BookOpenIcon, Code2Icon, CreditCardIcon, SearchIcon, SidebarIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GithubIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";
import { gitConfig } from "@/lib/shared";

type NavItem = {
	label: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	isActive: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
	{
		label: "Documentation",
		href: "/docs",
		icon: BookOpenIcon,
		isActive: (pathname: string) =>
			pathname === "/docs" ||
			(pathname.startsWith("/docs") &&
				!pathname.startsWith("/docs/payments") &&
				!pathname.startsWith("/docs/developers") &&
				!pathname.startsWith("/docs/api-reference")),
	},
	{
		label: "Payments",
		href: "/docs/payments/overview",
		icon: CreditCardIcon,
		isActive: (pathname: string) => pathname.startsWith("/docs/payments"),
	},
	{
		label: "Developers",
		href: "/docs/developers/overview",
		icon: Code2Icon,
		isActive: (pathname: string) => pathname.startsWith("/docs/developers"),
	},
	{
		label: "API Reference",
		href: "/docs/api-reference",
		icon: TerminalIcon,
		isActive: (pathname: string) => pathname.startsWith("/docs/api-reference"),
	},
];

export function Header({ className, ...props }: React.ComponentProps<"header">) {
	const pathname = usePathname();
	const { slots } = useSpaciousLayout();
	const { dialogHandle } = useSearchContext();

	return (
		<header
			id="nd-subnav"
			className={cn(
				"sticky top-(--fd-banner-height,0px) z-30 flex h-(--fd-header-height) items-center border-b-0 bg-fd-card [grid-area:header]",
				className,
			)}
			{...props}
		>
			{/* Mobile View (< md) */}
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

			{/* Desktop View (md and up) */}
			<div className="hidden w-full items-center justify-between ps-2 pe-4 md:flex">
				{/* Navigation Links (starts where content box starts) */}
				<nav className="flex items-center gap-2" aria-label="Documentation sections">
					{navItems.map(({ label, href, isActive, icon: Icon }) => {
						const active = isActive(pathname);
						return (
							<Link
								key={href}
								href={href}
								className={cn(
									"inline-flex items-center gap-2 px-2.5 py-1.5 text-sm font-medium transition-colors",
									active ? "text-fd-foreground" : "text-fd-muted-foreground hover:text-fd-foreground",
								)}
								aria-current={active ? "page" : undefined}
							>
								<Icon className="size-4 shrink-0" />
								<span>{label}</span>
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
		</header>
	);
}

export function HeaderAction() {
	return null;
}
