"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, AlertCircle, Layers, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Understand the current workflow",
    description:
      "We study how your business actually runs today — the people, tools, documents, approvals, and processes involved. Not how it was designed to run. How it actually runs.",
    accent: "text-blue-400",
    accentBg: "bg-blue-500/10",
  },
  {
    icon: AlertCircle,
    step: "02",
    title: "Identify inefficiencies and manual bottlenecks",
    description:
      "We map every point where manual work, duplication, delays, or disconnected tools create friction — and document the real cost of keeping things the way they are.",
    accent: "text-rose-400",
    accentBg: "bg-rose-500/10",
  },
  {
    icon: Layers,
    step: "03",
    title: "Recommend AI and digital tools",
    description:
      "We recommend the specific tools, automations, dashboards, CRMs, or AI systems that fit your business — based on your actual workflows, not generic software lists.",
    accent: "text-violet-400",
    accentBg: "bg-violet-500/10",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Support implementation if you need it",
    description:
      "You choose the level of support — from a focused assessment only, to full end-to-end rollout, vendor coordination, training, and ongoing monitoring.",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what-we-do" className="relative z-10 py-24 lg:py-32">
      <div className="container-section">
        <SectionHeader
          eyebrow="Our Approach"
          title="We study your business before recommending software."
          subtitle="ProcessPilot AI is not here to push random tools. We first understand how the business actually works — then we identify where AI, automation, or digital systems can create real value."
        />

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 hover:shadow-card-hover"
              >
                {/* Step number */}
                <span className="absolute right-5 top-4 font-mono text-3xl font-black text-white/[0.04]">
                  {step.step}
                </span>

                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${step.accentBg} transition-colors duration-300 group-hover:scale-110`}
                >
                  <Icon size={18} className={step.accent} strokeWidth={2} />
                </div>

                <h3 className="mb-3 text-base font-semibold leading-snug text-slate-100">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Flexibility callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 rounded-2xl border border-electric-500/15 bg-electric-500/5 p-6 text-center"
        >
          <p className="text-base font-medium text-slate-300">
            Clients can choose the level of support they need — from a focused
            process study to{" "}
            <span className="text-electric-400">
              full end-to-end implementation.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
