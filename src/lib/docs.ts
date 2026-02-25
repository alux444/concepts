import type { ComponentType } from "react";

interface DocModule {
  default: ComponentType;
  frontmatter: {
    title: string;
    description?: string;
    order?: number;
  };
}

export interface DocEntry {
  slug: string;
  title: string;
  description: string;
  order: number;
  Component: ComponentType;
}

export interface DocCategory {
  category: string;
  items: DocEntry[];
}

const modules = import.meta.glob<DocModule>("../docs/**/*.mdx", {
  eager: true,
});

function parseSlug(path: string): string {
  return path
    .replace("../docs/", "")
    .replace(/\.mdx$/, "");
}

function parseCategory(slug: string): string {
  const parts = slug.split("/");
  if (parts.length <= 1) return "general";
  return parts[0];
}

function formatCategory(category: string): string {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildEntries(): DocEntry[] {
  return Object.entries(modules).map(([path, mod]) => {
    const slug = parseSlug(path);
    const { frontmatter } = mod;

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description ?? "",
      order: frontmatter.order ?? 999,
      Component: mod.default,
    };
  });
}

export function getAllDocs(): DocEntry[] {
  return buildEntries().sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getDocBySlug(slug: string): DocEntry | undefined {
  return buildEntries().find((entry) => entry.slug === slug);
}

export function getNavTree(): DocCategory[] {
  const entries = getAllDocs();
  const categoryMap = new Map<string, DocEntry[]>();

  for (const entry of entries) {
    const rawCategory = parseCategory(entry.slug);
    const existing = categoryMap.get(rawCategory) ?? [];
    existing.push(entry);
    categoryMap.set(rawCategory, existing);
  }

  return Array.from(categoryMap.entries()).map(([raw, items]) => ({
    category: formatCategory(raw),
    items,
  }));
}
