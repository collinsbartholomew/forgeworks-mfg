import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Investors",
  description: "Information for investors and financial stakeholders of ForgeWorks MFG.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title="Investors"
        subtitle="Creating long-term value for our shareholders"
        bgImage="/uploads/investors-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label">
              <span className="section-label-line bg-accent" />
              <span className="section-label-text text-accent">Investor Relations</span>
            </div>
            <h2 className="section-title mb-6">Financial Performance</h2>
            <p className="text-black-60 leading-relaxed mb-8">
              ForgeWorks MFG has demonstrated consistent growth and strong
              financial performance. Our strategic investments in advanced manufacturing
              capabilities and sustainable operations position us for continued success
              in the years ahead.
            </p>
            <div className="grid sm-grid-cols-2 gap-6 mb-10">
              {[
                { label: "Revenue", value: "$2.8B", change: "+12% YoY" },
                { label: "EBITDA", value: "$420M", change: "+15% YoY" },
                { label: "Market Cap", value: "$8.5B", change: "+8% YoY" },
                { label: "Dividend Yield", value: "2.4%", change: "Stable" },
              ].map((metric) => (
                <div key={metric.label} className="bg-light rounded-2xl p-6">
                  <p className="text-black-60 text-sm mb-1">{metric.label}</p>
                  <p className="text-2xl font-heading font-medium mb-1">{metric.value}</p>
                  <p className="text-accent text-sm">{metric.change}</p>
                </div>
              ))}
            </div>
            <h3 className="font-heading font-medium text-xl mb-4">Key Highlights</h3>
            <ul className="space-y-3 mb-10">
              {[
                "Strong balance sheet with investment-grade credit rating",
                "Consistent dividend growth over the past 10 years",
                "Strategic acquisitions expanding market reach",
                "Investment in sustainable manufacturing technologies",
                "Diversified customer base across multiple industries",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-accent)" className="mt-0.5 flex-shrink-0">
                    <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 15l-5-5 1.41-1.41L9 12.17l6.59-6.59L17 7l-8 8z" />
                  </svg>
                  <span className="text-black-70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaSection
        title="Contact Investor Relations"
        description="For inquiries about financial reports, investor presentations, and shareholder information."
        buttonText="Contact IR Team"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
