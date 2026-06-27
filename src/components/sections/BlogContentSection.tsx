import Link from "next/link";

interface BlogContentSectionProps {
  post: {
    title: string;
    excerpt: string;
    content?: string;
  };
}

export default function BlogContentSection({ post }: BlogContentSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <article className="prose prose-sm max-w-3xl mx-auto">
          <p className="text-black-70 leading-relaxed text-lg mb-6">
            {post.excerpt}
          </p>
          {post.content ? (
            post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-black-60 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))
          ) : (
            <>
              <p className="text-black-60 leading-relaxed mb-6">
                At Fabrik, we are committed to advancing manufacturing technology
                and delivering exceptional quality to our customers. Our team of
                experienced engineers and technicians works tirelessly to ensure
                that every product meets the highest industry standards.
              </p>
              <p className="text-black-60 leading-relaxed mb-6">
                Through continuous innovation and investment in state-of-the-art
                equipment, we maintain our position as a leader in the manufacturing
                sector. Our comprehensive quality management systems ensure
                consistency and reliability across all our operations.
              </p>
            </>
          )}
          <div className="bg-light rounded-2xl p-8 mt-10 mb-8">
            <h4 className="font-heading font-medium text-lg mb-3">
              Ready to Start Your Project?
            </h4>
            <p className="text-black-60 text-sm mb-4">
              Contact us today to discuss your manufacturing needs and get a free quote.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Get a Quote
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
