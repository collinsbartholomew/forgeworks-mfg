import Link from "next/link";

interface BlogPostHeroSectionProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
  };
}

export default function BlogPostHeroSection({ post }: BlogPostHeroSectionProps) {
  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url('${post.image}')`, backgroundColor: "var(--color-primary)" }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content container">
        <div className="flex items-center gap-3 text-white-60 text-sm mb-4">
          <span className="text-accent">{post.category}</span>
          <span>&middot;</span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-3xl lg-text-5xl font-heading font-medium text-white leading-tight max-w-3xl">
          {post.title}
        </h1>
      </div>
    </section>
  );
}
