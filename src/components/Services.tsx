"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  GitBranch,
  Search,
  Layers,
  Map,
  Rocket,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  GitBranch,
  Search,
  Layers,
  Map,
  Rocket,
  GraduationCap,
  RefreshCw,
};

const serviceColors = [
  "from-electric-500/10 to-electric-600/5 border-electric-500/15 text-electric-400",
  "from-blue-500/10 to-blue-600/5 border-blue-500/15 text-blue-400",
  "from-violet-500/10 to-violet-600/5 border-violet-500/15 text-violet-400",
  "from-indigo-500/10 to-indigo-600/5 border-indigo-500/15 text-indigo-400",
  "from-purple-500/10 to-purple-600/5 border-purple-500/15 text-purple-400",
  "from-emerald-500/10 to-emerald-600/5 border-emerald-500/15 text-emerald-400",
  "from-teal-500/10 to-teal-600/5 border-teal-500/15 text-teal-400",
  "from-amber-500/10 to-amber-600/5 border-amber-500/15 text-amber-400",
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative z-10 py-24 lg:py-32">
      <div className="container-section">
        <SectionHeader
          eyebrow="Our Services"
          title="Start with clarity. Continue as far as you need."
          subtitle="Every engagement begins with understanding your business. How far we go together is your choice."
        />

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Layers;
            const colorClass = serviceColors[i % serviceColors.length];
            const [fromTo, borderColor, textColor] = colorClass.split(" text-");
            const colors = colorClass.split(" ");
            const iconTextColor = colors[colors.length - 1];
            const bgColors = colors.slice(0, 2).join(" ");
            const borderC = colors[2];

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="glass-card group cursor-default rounded-2xl p-5 transition-all duration-300 hover:shadow-card-hover"
              >
                {/* Icon container */}
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${bgColors} border ${borderC}`}
                >
                  <Icon size={18} className={iconTextColor} strokeWidth={2} />
                </div>

                {/* First service badge */}
                {i === 0 && (
                  <span className="mb-2 inline-block rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                    Free first session
                  </span>
                )}

                <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-100">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Flexibility note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Assessment only", desc: "Process study + full report with no obligation to continue." },
            { label: "Assessment + roadmap", desc: "Study, recommendations, and a phased implementation plan." },
            { label: "End-to-end support", desc: "From study to rollout — tools, training, dashboards, and ongoing support." },
          ].map((opt) => (
            <div
              key={opt.label}
              className="rounded-xl border border-white/6 bg-white/[0.02] p-4"
            >
              <p className="mb-1 text-sm font-semibold text-slate-200">
                {opt.label}
              </p>
              <p className="text-xs leading-relaxed text-slate-500">{opt.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
