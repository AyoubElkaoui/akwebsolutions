export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: "Web Development" | "SEO" | "E-commerce" | "Software";
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}
