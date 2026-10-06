"use client";

import { Dialog } from "@base-ui/react/dialog";
import { SidebarTrigger } from "fumadocs-ui/components/sidebar/base";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { useSpaciousLayout } from "fumadocs-ui/layouts/spacious";
import { SearchIcon, SidebarIcon } from "lucide-react";

import { cn } from "@/lib/cn";

export function MobileHeader({ className, ...props }: React.ComponentProps<"header">) {
	const { slots } = useSpaciousLayout();
	const { dialogHandle } = useSearchContext();

	return (
		<header
			id="nd-subnav"
			className={cn(
				"sticky top-(--fd-banner-height,0px) z-30 [grid-area:header] flex items-center h-(--fd-header-height) ps-4 pe-2.5 bg-fd-card md:hidden",
				className,
			)}
			{...props}
		>
			<slots.navTitle className="inline-flex items-center gap-2.5 me-auto font-semibold" />

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
		</header>
	);
}
