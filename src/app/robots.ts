import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://ai.grupodinamis.com/sitemap.xml",
    host: "https://ai.grupodinamis.com",
  };
}
