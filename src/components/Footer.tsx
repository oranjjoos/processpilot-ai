import Link from "next/link";
import { Mail, Phone, Linkedin, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/6 bg-space-950">
      <div className="container-section py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500 to-violet-600">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M5 9h8M9 5l4 4-4 4"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="5" cy="6" r="1.5" fill="rgba(255,255,255,0.7)" />
                  <circle cx="5" cy="12" r="1.5" fill="rgba(255,255,255,0.7)" />
                </svg>
              </div>
              <span className="text-sm font-bold text-slate-100">
                {siteConfig.firm.name}
              </span>
            </div>

            <p className="mb-5 max-w-xs text-sm leading-relaxed text-slate-500">
              {siteConfig.footer.tagline}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <MapPin size={12} className="shrink-0" />
              {siteConfig.firm.location}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Navigate
            </p>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="cursor-pointer text-sm text-slate-500 transition-colors hover:text-slate-300"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex cursor-pointer items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <Mail size={13} className="shrink-0 text-slate-600" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex cursor-pointer items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <Phone size={13} className="shrink-0 text-slate-600" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <MessageCircle size={13} className="shrink-0 text-slate-600" />
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <Linkedin size={13} className="shrink-0 text-slate-600" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-700">
            &copy; {siteConfig.firm.foundedYear} {siteConfig.firm.name}. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href={siteConfig.footer.privacyUrl}
              className="text-xs text-slate-700 transition-colors hover:text-slate-500"
            >
              Privacy Policy
            </Link>
            <Link
              href={siteConfig.footer.termsUrl}
              className="text-xs text-slate-700 transition-colors hover:text-slate-500"
            >
              Terms of Use
            </Link>
          </div>
        </div>

        <p className="mt-5 text-center text-[10px] leading-relaxed text-slate-800">
          {siteConfig.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
