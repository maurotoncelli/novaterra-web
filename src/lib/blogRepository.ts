import { articles as fallbackArticles, type ArticleContent } from "../data/articlesData";
import {
  blogPosts as fallbackPosts,
  filterPostsByCategory,
  sortPostsByDate,
  type BlogCategory,
  type BlogPost,
} from "../data/blogData";
import { loadArticlesFromCms, loadBlogHero, type PageHero } from "./cms";

async function readArticles() {
  const fromCms = await loadArticlesFromCms();
  if (fromCms.length) return fromCms;
  return fallbackPosts.map((post) => ({
    post,
    article: fallbackArticles[post.slug],
  }));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const articles = await readArticles();
  return sortPostsByDate(articles.map((item) => item.post));
}

export async function getPostsByCategory(category: BlogCategory): Promise<BlogPost[]> {
  return sortPostsByDate(filterPostsByCategory(await getAllPosts(), category));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const articles = await readArticles();
  return articles.find((item) => item.post.slug === slug)?.post;
}

export async function getArticleBySlug(slug: string): Promise<ArticleContent | undefined> {
  const articles = await readArticles();
  return articles.find((item) => item.post.slug === slug)?.article ?? fallbackArticles[slug];
}

export async function getAllPostSlugs(): Promise<string[]> {
  return (await getAllPosts()).map((post) => post.slug);
}

export async function postExists(slug: string): Promise<boolean> {
  return (await getAllPosts()).some((post) => post.slug === slug);
}

export async function getBlogHero(): Promise<PageHero> {
  return loadBlogHero();
}
