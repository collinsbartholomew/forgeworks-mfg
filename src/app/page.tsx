import HomeHero from "@/components/sections/HomeHero";
import StatsSection from "@/components/sections/StatsSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import NewsSection from "@/components/sections/NewsSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsSection />
      <HomeAboutSection />
      <ProductsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CtaSection
        title="Ready to Start Your Manufacturing Project?"
        description="Contact us today to discuss your requirements and get a free quote."
        buttonText="Get a Quote"
        buttonHref="/contact"
        variant="accent"
      />
      <NewsSection />
    </>
  );
}
