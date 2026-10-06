import { Logo } from "@/components/icons";

import { gitConfig } from "./shared";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: <Logo className="h-6 w-auto text-fd-primary" />,
		},
		githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
	};
}
