import { projects } from "@/Data/projectsDatas";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Définir l'URL de base
  const baseUrl = "https://votredomaine.com"; // Remplacez par votre domaine réel

  // Pages statiques
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Pages de projets dynamiques
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages] as MetadataRoute.Sitemap;
} 