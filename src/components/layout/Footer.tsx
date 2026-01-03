import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Mission & Values", href: "/mission" },
    { name: "Leadership Team", href: "/about#leadership" },
    { name: "Careers", href: "/contact" },
  ],
  services: [
    { name: "LIHTC Development", href: "/portfolio" },
    { name: "Section 8 Housing", href: "/portfolio" },
    { name: "Mixed-Income Communities", href: "/portfolio" },
    { name: "Senior Housing", href: "/portfolio" },
  ],
  resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-dark text-primary-foreground">
      {/* Main footer content */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold font-serif">HIG</span>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Affordable Housing Development
              </p>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-md">
              Building quality affordable housing communities since 1985. We partner with 
              government agencies to create sustainable, dignified housing for families 
              across America.
            </p>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:1-800-555-0123" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                1-800-555-0123
              </a>
              <a 
                href="mailto:info@highousing.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@highousing.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  1200 Corporate Center Drive<br />
                  Suite 400<br />
                  Atlanta, GA 30339
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications and badges */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/60">
            <span className="px-4 py-2 border border-primary-foreground/30 rounded">
              Equal Housing Opportunity
            </span>
            <span className="px-4 py-2 border border-primary-foreground/30 rounded">
              NAHB Member
            </span>
            <span className="px-4 py-2 border border-primary-foreground/30 rounded">
              HUD Approved
            </span>
            <span className="px-4 py-2 border border-primary-foreground/30 rounded">
              LIHTC Certified
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} HIG Affordable Housing Development. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Accessibility
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
