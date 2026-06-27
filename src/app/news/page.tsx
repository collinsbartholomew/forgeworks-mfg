import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import BlogGridSection from "@/components/sections/BlogGridSection";

export const metadata: Metadata = {
  title: "News",
  description: "Industry insights, company updates, and manufacturing trends from Fabrik.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Insights"
        subtitle="Industry updates and manufacturing trends"
        bgImage="/uploads/news-hero.jpg"
      />
      <BlogGridSection />
    </>
  );
}
