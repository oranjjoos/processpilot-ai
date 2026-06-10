"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import CTAButton from "./CTAButton";
import FloatingWorkflowVisual from "./FloatingWorkflowVisual";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const heroBullets = [
  "Workflow study before any tool recommendation",
  "AI opportunities identified and ranked by impact",
  "Vendor-neutral — we recommend what fits, not what sells",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[92vh] items-center overflow-x-hidden pb-12 pt-24 lg:min-h-screen lg:pb-16 lg:pt-32"
    >
      <div className="container-section w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Left — text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/25 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-400" />
                </span>
                AI Business Consulting
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              Make your business{" "}
              <span className="gradient-text">AI-ready</span> without wasting
              money on the wrong tools.
            </motion.h1>

            {/* Bullet proof points — replaces long paragraph */}
            <motion.ul variants={fadeInUp} className="mb-8 space-y-2.5">
              {heroBullets.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric-500/15">
                    <Check size={9} className="text-electric-400" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-snug text-slate-400">{point}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA row */}
            <motion.div
              variants={fadeInUp}
              className="mb-10 flex flex-wrap items-center gap-3"
            >
              <CTAButton
                href="#contact"
                size="lg"
                onClick={() => scrollTo("#contact")}
              >
                {siteConfig.cta.primary}
                <ArrowRight size={16} strokeWidth={2.5} />
              </CTAButton>
              <CTAButton
                href="#how-it-works"
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("#how-it-works")}
              >
                {siteConfig.cta.secondary}
              </CTAButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 border-t border-white/6 pt-7"
            >
              {[
                { value: "Free", label: "First consultation" },
                { value: "End-to-end", label: "Support available" },
                { value: "45+ yrs", label: "Group experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-slate-100">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — animated visual (hidden on small mobile, shown sm+) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden justify-center sm:flex lg:justify-end"
          >
            <FloatingWorkflowVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollTo("#problem")}
            aria-label="Scroll down"
            className="flex cursor-pointer flex-col items-center gap-1.5 text-slate-600 transition-colors hover:text-slate-400"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
