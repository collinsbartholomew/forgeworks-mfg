import Link from "next/link";
import { CheckRoundIcon } from "@/components/ui/icons";

export default function HomeAboutSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-label">
              <span className="section-label-line bg-accent" />
              <span className="section-label-text text-accent">About Fabrik</span>
            </div>
            <h2 className="section-title mb-6">
              Leading the Future of Manufacturing
            </h2>
            <p className="text-black-60 leading-relaxed mb-6">
              With decades of experience in steel manufacturing and precision
              machining, Fabrik has established itself as a trusted partner for
              industries worldwide. Our state-of-the-art facilities and
              commitment to quality ensure that every component we produce meets
              the highest standards.
            </p>
            <div className="divider" />
            <ul className="check-list space-y-4 mb-8">
              {[
                "ISO 9001 and IATF 16949 certified manufacturing",
                "Advanced CNC machining with ±0.01mm tolerances",
                "Full material traceability and quality assurance",
                "Sustainable manufacturing practices",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 flex-shrink-0">
                    <CheckRoundIcon />
                  </span>
                  <span className="text-black-80 text-sm">{text}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="about-image">
            <div
              className="w-full h-full bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage:
                  "url('/uploads/about-bg.jpg')",
                backgroundColor: "var(--color-primary)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
