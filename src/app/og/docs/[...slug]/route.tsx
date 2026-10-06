import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

import { Logo } from "@/components/icons";
import { getPageImageUrl } from "@/lib/shared";
import { source } from "@/lib/source";

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<"/og/docs/[...slug]">) {
	const { slug } = await params;
	const page = source.getPage(slug.slice(0, -1));
	if (!page) notFound();

	return new ImageResponse(
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				color: "white",
				backgroundColor: "rgb(10,10,10)",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: "100%",
					padding: "4rem",
				}}
			>
				<span
					style={{
						fontWeight: 600,
						fontSize: "76px",
						lineHeight: 1.1,
					}}
				>
					{page.data.title}
				</span>
				{page.data.description && (
					<p
						style={{
							fontSize: "44px",
							color: "rgba(240,240,240,0.7)",
							lineHeight: 1.3,
							marginTop: "24px",
						}}
					>
						{page.data.description}
					</p>
				)}
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "24px",
						marginTop: "auto",
						color: "#fff383",
					}}
				>
					<Logo style={{ width: "160px", height: "48px" }} />
				</div>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}

export function generateStaticParams() {
	return source.getPages().map((page) => ({
		lang: page.locale,
		slug: getPageImageUrl(page).segments,
	}));
}
