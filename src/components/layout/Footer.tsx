import Link from "next/link";
import { siteConfig, navigation } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="text-2xl font-heading font-medium text-white block mb-2">
              {siteConfig.name}
            </span>
            <p className="footer-desc">
              Fabrik is a leading manufacturer specializing in steel products,
              precision machining, and custom manufacturing solutions for diverse
              industries worldwide.
            </p>
            <div className="flex gap-4 mt-4">
              {siteConfig.social?.linkedin && (
                <a
                  href={siteConfig.social?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.social?.twitter && (
                <a
                  href={siteConfig.social?.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Twitter
                </a>
              )}
              {siteConfig.social?.facebook && (
                <a
                  href={siteConfig.social?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Facebook
                </a>
              )}
              {siteConfig.social?.youtube && (
                <a
                  href={siteConfig.social?.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Products</h3>
            <ul className="footer-links">
              {navigation[0]?.children?.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              {navigation[1]?.children?.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-links">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="footer-link">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="footer-link">
                  {siteConfig.email}
                </a>
              </li>
              <li className="footer-contact-address">{siteConfig.address}</li>
            </ul>
            <div className="footer-cta">
              <Link href="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built by <a href="https://omegarevelation.com" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Omega Revelation</a>.
          </p>
          <div className="footer-legal">
            <Link href="/privacy-policy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="footer-legal-link">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
