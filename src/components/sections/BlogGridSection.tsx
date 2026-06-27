import Link from "next/link";
import { blogPosts } from "@/lib/constants";

export default function BlogGridSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
          {blogPosts.map((post) => (
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
      </div>
    </section>
  );
}
