"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  problem: string;
  preferredTime: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  industry: "",
  problem: "",
  preferredTime: "",
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: siteConfig.contact.whatsappUrl,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ProcessPilot AI",
    href: siteConfig.contact.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.firm.location,
    href: null,
  },
];

function InputField({
  label,
  id,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: keyof FormData;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (id: keyof FormData, val: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-slate-400"
      >
        {label}
        {required && <span className="ml-0.5 text-electric-400">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 hover:border-white/12 focus:border-electric-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-electric-500/30"
      />
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (id: keyof FormData, val: string) =>
    setForm((prev) => ({ ...prev, [id]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // ──────────────────────────────────────────────────────────
      // TODO: Replace the simulated delay below with your real
      // email integration. Options:
      //
      // 1. Formspree (simplest):
      //    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //      method: "POST",
      //      headers: { "Content-Type": "application/json" },
      //      body: JSON.stringify(form),
      //    });
      //    if (!res.ok) throw new Error("Submission failed");
      //
      // 2. EmailJS:
      //    await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY");
      //
      // 3. Resend (via Next.js API route at /api/contact):
      //    const res = await fetch("/api/contact", {
      //      method: "POST",
      //      headers: { "Content-Type": "application/json" },
      //      body: JSON.stringify(form),
      //    });
      //
      // 4. HubSpot Forms API:
      //    Post to: https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
      //
      // Form recipient configured in siteConfig.contact.formRecipient
      // ──────────────────────────────────────────────────────────
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please try emailing us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 lg:py-32">
      <div className="container-section">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Ready to find out where AI fits your business?"
          subtitle="First consultation is free. No obligation, no selling."
        />

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-12"
        >
          {/* Left — contact details */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="space-y-5">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-electric-500/10">
                      <Icon size={15} className="text-electric-400" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-600">{item.label}</p>
                      <p className="text-sm font-medium text-slate-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block cursor-pointer rounded-xl border border-white/5 p-3 transition-colors hover:border-electric-500/20 hover:bg-electric-500/5"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 p-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* What happens next */}
            <div className="mt-6 rounded-xl border border-electric-500/12 bg-electric-500/4 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-electric-400/80">
                What happens next
              </p>
              <div className="space-y-2.5">
                {[
                  "We respond within 1 business day",
                  "Free 30-min consultation — no selling",
                  "Receive a tailored process study proposal",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric-500/20 text-[9px] font-bold text-electric-400">
                      {i + 1}
                    </span>
                    <span className="text-xs text-slate-400">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-4">
              <CTAButton
                href={siteConfig.contact.whatsappUrl}
                variant="secondary"
                className="w-full justify-center"
                external
              >
                <MessageCircle size={15} />
                {siteConfig.cta.whatsapp}
              </CTAButton>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
                    <CheckCircle size={28} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-100">
                    Message sent
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                    {siteConfig.cta.formSuccess}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 cursor-pointer text-xs text-slate-600 underline underline-offset-4 hover:text-slate-400"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6 grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="Your name"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                    />
                    <InputField
                      label="Company name"
                      id="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Trading Ltd"
                    />
                    <InputField
                      label="Phone number"
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+000 0000 000000"
                    />
                    <InputField
                      label="Email address"
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                    />
                    <div className="sm:col-span-2">
                      <InputField
                        label="Industry / type of business"
                        id="industry"
                        value={form.industry}
                        onChange={handleChange}
                        placeholder="e.g. Trading, Construction, Professional Services…"
                      />
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="mb-4">
                    <label
                      htmlFor="problem"
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      Biggest operational problem or pain point
                      <span className="ml-0.5 text-electric-400">*</span>
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      required
                      rows={4}
                      value={form.problem}
                      onChange={(e) => handleChange("problem", e.target.value)}
                      placeholder="Describe what is taking too long, costing too much, or causing the most friction in your business…"
                      className="w-full resize-none rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 hover:border-white/12 focus:border-electric-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-electric-500/30"
                    />
                  </div>

                  <div className="mb-6">
                    <InputField
                      label="Preferred appointment time"
                      id="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      placeholder="e.g. Weekday mornings, any time, after 3pm…"
                    />
                  </div>

                  {error && (
                    <p className="mb-4 text-sm text-rose-400">{error}</p>
                  )}

                  <CTAButton
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full justify-center"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        {siteConfig.cta.formSubmit}
                      </>
                    )}
                  </CTAButton>

                  <p className="mt-3 text-center text-xs text-slate-600">
                    No sales pressure. We will reach out to schedule your free
                    consultation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
