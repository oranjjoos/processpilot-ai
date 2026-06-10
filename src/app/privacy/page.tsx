import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Privacy Policy — ${siteConfig.firm.name}`,
  description: `Privacy Policy for ${siteConfig.firm.name}`,
};

const sections = [
  {
    heading: "Information We Collect",
    body: `When you complete our contact form, we collect your name, company name, email address, phone number (optional), industry, and a description of your business problem. We use this information solely to respond to your enquiry and to schedule your free consultation.`,
  },
  {
    heading: "How We Use Your Information",
    body: `Your details are used to respond to your enquiry, to schedule and conduct your free consultation, and to send you follow-up information about our services if you have requested it. We do not use your information for any other purpose without your consent.`,
  },
  {
    heading: "Confidentiality",
    body: `All business information, documents, workflows, and operational details shared with ${siteConfig.firm.name} during a consultation or engagement are treated as strictly confidential. We do not share, publish, or reference client information without explicit written permission.`,
  },
  {
    heading: "Data Sharing",
    body: `We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share your information with trusted service providers (such as email or scheduling tools) who assist us in operating our business, under appropriate confidentiality agreements.`,
  },
  {
    heading: "Data Retention",
    body: `We retain your contact information and any information shared during our engagement for as long as is necessary to provide our services and comply with our legal obligations. You may request deletion of your information at any time by contacting us.`,
  },
  {
    heading: "Cookies",
    body: `This website may use cookies or similar technologies for basic functionality and analytics. We do not use cookies for targeted advertising. You can disable cookies in your browser settings.`,
  },
  {
    heading: "Your Rights",
    body: `You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at the email address below.`,
  },
  {
    heading: "Contact Us",
    body: `If you have any questions about this Privacy Policy, please contact us at ${siteConfig.contact.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-space-950 text-slate-100">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 lg:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-electric-400">
            {siteConfig.firm.name}
          </p>
          <h1 className="mb-3 text-3xl font-bold text-slate-50">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last updated: {siteConfig.firm.foundedYear}
          </p>
        </div>

        {/* Intro */}
        <p className="mb-10 text-sm leading-relaxed text-slate-400">
          {siteConfig.firm.name} is committed to protecting the privacy of
          individuals who contact us or engage our services. This Privacy Policy
          explains how we collect, use, and protect your personal information.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="mb-2 text-base font-semibold text-slate-100">
                {s.heading}
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/6" />

        <p className="text-xs leading-relaxed text-slate-600">
          This is a placeholder Privacy Policy. It should be reviewed and
          updated by a qualified legal professional before launch.
        </p>
      </div>
    </div>
  );
}
