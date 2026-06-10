import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Terms of Use — ${siteConfig.firm.name}`,
  description: `Terms of Use for ${siteConfig.firm.name}`,
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: `By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this website.`,
  },
  {
    heading: "Use of This Website",
    body: `This website is provided for informational purposes about ${siteConfig.firm.name} and its services. You may not use this website for any unlawful purpose or in any way that could damage, disable, or impair the site or interfere with other users.`,
  },
  {
    heading: "Intellectual Property",
    body: `All content on this website — including text, design, graphics, and code — is the property of ${siteConfig.firm.name} and is protected by applicable intellectual property laws. You may not reproduce or redistribute content without our prior written permission.`,
  },
  {
    heading: "Services and Engagements",
    body: `The services described on this website are provided subject to a separate engagement agreement between ${siteConfig.firm.name} and the client. Nothing on this website constitutes a binding offer or guarantee of specific outcomes.`,
  },
  {
    heading: "Disclaimer of Warranties",
    body: `This website and its content are provided on an "as is" basis without warranties of any kind. ${siteConfig.firm.name} does not warrant that the website will be error-free, uninterrupted, or free of harmful components.`,
  },
  {
    heading: "Limitation of Liability",
    body: `To the fullest extent permitted by law, ${siteConfig.firm.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or its content.`,
  },
  {
    heading: "Estimated Outcomes",
    body: `Any references to time savings, efficiency improvements, or outcomes on this website are illustrative estimates only. Actual results depend on implementation quality, data availability, and team adoption. ${siteConfig.firm.name} does not guarantee specific results.`,
  },
  {
    heading: "Third-Party Links",
    body: `This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. Links do not constitute endorsement.`,
  },
  {
    heading: "Changes to These Terms",
    body: `We reserve the right to update these Terms of Use at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    heading: "Contact",
    body: `If you have any questions about these Terms of Use, please contact us at ${siteConfig.contact.email}.`,
  },
];

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-sm text-slate-500">
            Last updated: {siteConfig.firm.foundedYear}
          </p>
        </div>

        {/* Intro */}
        <p className="mb-10 text-sm leading-relaxed text-slate-400">
          Please read these Terms of Use carefully before using the{" "}
          {siteConfig.firm.name} website. These terms govern your use of our
          website and the information and services described on it.
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
          This is a placeholder Terms of Use document. It should be reviewed and
          updated by a qualified legal professional before launch.
        </p>
      </div>
    </div>
  );
}
