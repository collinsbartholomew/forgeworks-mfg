import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg-grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black mb-6">Get in Touch</h2>
            <p className="text-black-60 leading-relaxed mb-8">
              Have a question about our products or ready to start a project? Fill out the form
              and our team will get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="bg-light rounded-2xl p-8">
              <h3 className="font-heading font-medium text-lg mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--color-accent)">
                      <path d="M15.5 11.5l-3-1.5c-.5-.2-1-.1-1.3.3l-1.5 2c-2.1-1.1-3.8-2.8-4.9-4.9l2-1.5c.4-.3.5-.8.3-1.3L7.5 2c-.2-.5-.7-.8-1.2-.8H2C1.3 1.2.8 1.8 1 2.5 2.3 7.4 6.6 11.7 11.5 13c.7.2 1.3-.3 1.3-1v-3.8c0-.5-.3-1-.8-1.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <a href={`tel:${siteConfig.phoneHref}`} className="text-black-60 text-sm mt-1 hover:text-black transition-colors block">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--color-accent)">
                      <path d="M16 3H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 3l-6 4.5L3 6V5l6 4.5L15 5v1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-black-60 text-sm mt-1 hover:text-black transition-colors block">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--color-accent)">
                      <path d="M9 1C5.14 1 2 4.14 2 8c0 5.25 7 9 7 9s7-3.75 7-9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Address</p>
                    <p className="text-black-60 text-sm mt-1">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
