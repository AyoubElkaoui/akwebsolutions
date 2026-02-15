import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllCaseStudySlugs } from "@/lib/case-studies";
import { locations } from "@/lib/locations";
import { serviceTypes } from "@/lib/service-locations";
import { websiteIndustries, webshopIndustries } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akwebsolutions.nl";

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationPages = locations.map((loc) => ({
    url: `${baseUrl}/website-laten-maken-${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceLocationPages = serviceTypes.flatMap((service) =>
    service.locationSlugs.map((stad) => ({
      url: `${baseUrl}/${service.serviceSlug}-${stad}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  const websiteIndustryPages = websiteIndustries.map((ind) => ({
    url: `${baseUrl}/website-voor-${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyPages = getAllCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const webshopIndustryPages = webshopIndustries.map((ind) => ({
    url: `${baseUrl}/webshop-voor-${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const standaloneServicePages = [
    "wordpress-naar-nextjs-migratie",
    "website-redesign",
    "website-onderhoud",
    "website-laten-maken-zzp",
    "website-laten-maken-mkb",
    "landingspagina-laten-maken",
  ].map((slug) => ({
    url: `${baseUrl}/diensten/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/website-laten-maken`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/seo-optimalisatie`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/webshop-laten-maken`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/maatwerk-software`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
    ...caseStudyPages,
    ...locationPages,
    ...serviceLocationPages,
    ...websiteIndustryPages,
    ...webshopIndustryPages,
    ...standaloneServicePages,
    {
      url: `${baseUrl}/over-ons`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/voorwaarden`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
