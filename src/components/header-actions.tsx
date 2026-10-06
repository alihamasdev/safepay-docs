"use client";

import { Dialog } from "@base-ui/react/dialog";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { flushSync } from "react-dom";

import { GithubIcon, ThemeIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { gitConfig } from "@/lib/shared";

export function HeaderSearchButton() {
	const { enabled, hotKey, dialogHandle } = useSearchContext();

	return (
		<Dialog.Trigger
			handle={dialogHandle}
			type="button"
			data-search-full=""
			aria-label="Search documentation"
			className="inline-flex h-8 w-44 md:w-60 items-center gap-2 rounded-lg border bg-fd-secondary/50 px-2.5 text-xs text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
		>
			<SearchIcon className="size-3.5 shrink-0" />
			<span className="truncate">Search documentation...</span>
			{enabled && hotKey && hotKey.length > 0 && (
				<div className="ms-auto hidden md:inline-flex gap-0.5">
					{hotKey.map((k, i) => (
						<kbd key={i} className="rounded border bg-fd-background px-1.5 py-0.5 text-[10px] font-medium">
							{k.display}
						</kbd>
					))}
				</div>
			)}
		</Dialog.Trigger>
	);
}

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	const toggleTheme = () => {
		const next = resolvedTheme === "dark" ? "light" : "dark";
		if (document?.startViewTransition) {
			document.startViewTransition(() => {
				flushSync(() => {
					setTheme(next);
				});
			});
		} else {
			setTheme(next);
		}
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label="Toggle theme"
			className={cn(buttonVariants({ size: "icon-sm", variant: "ghost", className: "[&_svg]:size-4 size-8" }))}
		>
			<ThemeIcon />
		</button>
	);
}

export function HeaderActions({ className, ...props }: React.ComponentProps<"div">) {
	const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

	return (
		<div className={cn("flex items-center gap-2 rounded-lg bg-fd-background", className)} {...props}>
			<HeaderSearchButton />
			<div className="h-4 w-px bg-fd-border" aria-hidden="true" />
			<Link
				href={githubUrl}
				target="_blank"
				rel="noreferrer noopener"
				aria-label="GitHub repository"
				className={cn(buttonVariants({ size: "icon-sm", variant: "ghost", className: "[&_svg]:size-4 size-8" }))}
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
	);
}
