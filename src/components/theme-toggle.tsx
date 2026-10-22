"use client";

import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

import { ThemeIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

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
