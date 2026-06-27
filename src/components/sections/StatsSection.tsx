import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function StatsSection() {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 lg-grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-4xl lg-text-5xl font-heading font-medium text-white block mb-2">
              25+
            </span>
            <span className="text-white-60 text-sm">Years Experience</span>
          </div>
          <div>
            <span className="text-4xl lg-text-5xl font-heading font-medium text-white block mb-2">
              500+
            </span>
            <span className="text-white-60 text-sm">Products Delivered</span>
          </div>
          <div>
            <span className="text-4xl lg-text-5xl font-heading font-medium text-white block mb-2">
              50+
            </span>
            <span className="text-white-60 text-sm">Countries Served</span>
          </div>
          <div>
            <span className="text-4xl lg-text-5xl font-heading font-medium text-white block mb-2">
              99.8%
            </span>
            <span className="text-white-60 text-sm">Quality Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
