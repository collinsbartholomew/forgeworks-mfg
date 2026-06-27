import type { Metadata } from "next";
import { blogPosts } from "@/lib/constants";
import { notFound } from "next/navigation";
import BlogPostHeroSection from "@/components/sections/BlogPostHeroSection";
import BlogContentSection from "@/components/sections/BlogContentSection";
import MorePostsSection from "@/components/sections/MorePostsSection";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostHeroSection post={post} />
      <BlogContentSection post={post} />
      <MorePostsSection currentSlug={slug} />
    </>
  );
}
