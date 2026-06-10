"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Target, Users, Lightbulb } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

const pillars = [
  {
    icon: Users,
    title: "Built by consultants who understand traditional businesses",
    description:
      "We come from structured consulting backgrounds — not just tech. We understand operations, reporting, and the realities of running a business day-to-day.",
  },
  {
    icon: Target,
    title: "Focused on practical value, not technology hype",
    description:
      "We recommend what actually fits your business — not the most expensive or most hyped tool. If a simpler solution achieves the same outcome, that is what we recommend.",
  },
  {
    icon: Lightbulb,
    title: "Designed for owner-led businesses",
    description:
      "Our work is built for companies where the owner is still deeply involved in operations — and where clarity, control, and efficiency matter most.",
  },
  {
    icon: Shield,
    title: "AI insight combined with process discipline",
    description:
      "We combine knowledge of modern AI tools with structured process thinking — so recommendations are grounded, scoped, and realistic.",
  },
];

export default function Credibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="credibility" className="relative z-10 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/50 to-transparent" />

      <div className="container-section relative">
        <div className="mx-auto max-w-4xl">
          {/* Credibility statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-16 rounded-2xl border border-electric-500/15 bg-electric-500/5 p-8 text-center lg:p-12"
          >
            {/* Decorative quote mark */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-4 font-serif text-6xl leading-none text-electric-500/15 select-none"
            >
              &ldquo;
            </div>

            <p className="relative mx-auto max-w-3xl text-lg font-medium leading-relaxed text-slate-300 lg:text-xl">
              {siteConfig.firm.credibilityStatement}
            </p>

            <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-electric-500/60 to-transparent" />
            <p className="mt-4 text-sm font-semibold text-electric-400">
              {siteConfig.firm.name}
            </p>
          </motion.div>

          {/* Pillars grid */}
          <motion.div
            ref={ref}
            variants={staggerContainerSlow}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-6 sm:grid-cols-2"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card flex gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-electric-500/10">
                    <Icon size={16} className="text-electric-400" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold text-slate-100">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
