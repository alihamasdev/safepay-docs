import { Card as BaseCard, type CardProps as BaseCardProps } from "fumadocs-ui/components/card";
import { isValidElement, type ComponentType, type ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CardProps = Omit<BaseCardProps, "icon"> & {
	icon?: ReactNode | ComponentType<Record<string, unknown>>;
};

export function Card({ icon, className, ...props }: CardProps) {
	let renderedIcon: ReactNode = icon as ReactNode;
	if (icon && !isValidElement(icon) && (typeof icon === "function" || typeof icon === "object")) {
		const Icon = icon as ComponentType;
		renderedIcon = <Icon />;
	}

	return <BaseCard icon={renderedIcon} className={cn("[a]:hover:border-fd-primary/50 [a]:hover:bg-fd-primary/10", className)} {...props} />;
}
