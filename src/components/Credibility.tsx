"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Target, Users, Lightbulb } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

const metrics = [
  { value: "45+", label: "Years consulting", sublabel: "Group background" },
  { value: "Process", label: "Before tools", sublabel: "Always" },
  { value: "Vendor", label: "Neutral", sublabel: "No commissions" },
  { value: "Owner-led", label: "Focus", sublabel: "Not enterprise" },
];

const pillars = [
  {
    icon: Users,
    title: "Built by consultants who understand traditional businesses",
    description:
      "Structured consulting backgrounds — we understand operations, not just tech.",
  },
  {
    icon: Target,
    title: "Focused on practical value, not technology hype",
    description:
      "We recommend what fits. Simpler solutions always win if they work.",
  },
  {
    icon: Lightbulb,
    title: "Designed for owner-led businesses",
    description:
      "Built for companies where the owner is still in the room.",
  },
  {
    icon: Shield,
    title: "AI insight combined with process discipline",
    description:
      "AI knowledge + structured process thinking. Grounded, scoped, and realistic.",
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

          {/* Proof metric tiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-electric-500/15 bg-electric-500/5 p-4 text-center"
              >
                <p className="text-2xl font-bold gradient-text leading-none">{m.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-300">{m.label}</p>
                <p className="mt-0.5 text-[10px] text-slate-600">{m.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Compact credibility statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12 rounded-2xl border border-white/6 bg-white/[0.02] px-6 py-5 text-center"
          >
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.firm.credibilityStatement}
            </p>
            <p className="mt-3 text-xs font-semibold text-electric-400">
              — {siteConfig.firm.name}
            </p>
          </motion.div>

          {/* Pillars grid */}
          <motion.div
            ref={ref}
            variants={staggerContainerSlow}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-4 sm:grid-cols-2"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card flex gap-3.5 rounded-2xl p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-electric-500/10">
                    <Icon size={15} className="text-electric-400" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold leading-snug text-slate-100">
                      {pillar.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-500">
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
