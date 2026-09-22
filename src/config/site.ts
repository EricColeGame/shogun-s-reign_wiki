export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly ("en" | "es" | "pt" | "ja")[];
  defaultLocale: "en" | "es" | "pt" | "ja";
}

export const siteConfig: SiteConfig = {
  name: "Shogun's Reign Wiki",
  shortName: "Shogun's Reign",
  logoText: "SR",
  tagline: "Complete Guides, Codes, Ranks & Progression",
  description: "Explore Shogun's Reign Wiki for Edo Japan roleplay guides, progression tips, professions, ranks, and community updates to master your path from villager to Shogun.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shogun-s-reign.wiki",
  supportEmail: "support@shogun-s-reign.wiki",
  gameUrl: "https://www.roblox.com/games/106568491289620/Shoguns-Reign",
  heroVideoId: "4tSXiq9-2pQ", // Roblox Shogun's Reign gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "ja"],
  defaultLocale: "en",
};
