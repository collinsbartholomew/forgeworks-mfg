import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-600px lg-min-h-[700px] flex items-center">
      <div className="page-hero-overlay" />
      <div className="container text-center">
        <span className="text-8xl lg-text-9xl font-heading font-medium text-primary block mb-4">
          404
        </span>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-6 h-[2px] bg-primary" />
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Page Not Found
          </span>
        </div>
        <h1 className="text-3xl lg-text-5xl font-heading font-medium text-white leading-tight mb-5 max-w-[500px] mx-auto">
          Oops! That page doesn&apos;t exist
        </h1>
        <p className="text-white-70 leading-relaxed mb-8 max-w-[450px] mx-auto">
          The page you&apos;re looking for has been moved, deleted, or never existed.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
