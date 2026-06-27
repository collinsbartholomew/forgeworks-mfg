import Link from "next/link";
import { blogPosts } from "@/lib/constants";

export default function NewsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-label justify-center">
            <span className="section-label-line bg-accent" />
            <span className="section-label-text text-accent">Latest News</span>
          </div>
          <h2 className="section-title">Industry Insights & Updates</h2>
        </div>
        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="card card-hover"
            >
              <div className="aspect-16-10 overflow-hidden bg-black-5">
                <div
                  className="w-full h-full bg-cover bg-center card-img-hover"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-black-40 mb-3">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading font-medium text-base mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-black-60 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/news" className="btn btn-primary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
