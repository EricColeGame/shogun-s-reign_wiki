import { CONTENT_TYPES } from "@/config/navigation";
import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shogun-s-reign.wiki";

  // Static paths from CONTENT_TYPES and legal/about pages
  const staticPaths = [
    "/",
    ...CONTENT_TYPES.map((ct) => `/${ct}`),
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/about",
  ];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : path === "/codes" ? 0.8 : 0.6,
    })),
  );
}
