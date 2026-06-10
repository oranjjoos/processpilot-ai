"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GitBranch,
  AlertCircle,
  LayoutGrid,
  Layers,
  TrendingUp,
  Map,
  BarChart2,
  Award,
  Users,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import DashboardMockup from "./DashboardMockup";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  GitBranch,
  AlertCircle,
  LayoutGrid,
  Layers,
  TrendingUp,
  Map,
  BarChart2,
  Award,
  Users,
  FileText,
};

// Cycle through subtle accent colors for visual interest
const accentColors = [
  { icon: "text-electric-400", bg: "bg-electric-500/8" },
  { icon: "text-violet-400", bg: "bg-violet-500/8" },
  { icon: "text-blue-400", bg: "bg-blue-500/8" },
  { icon: "text-emerald-400", bg: "bg-emerald-500/8" },
  { icon: "text-amber-400", bg: "bg-amber-500/8" },
  { icon: "text-rose-400", bg: "bg-rose-500/8" },
  { icon: "text-cyan-400", bg: "bg-cyan-500/8" },
  { icon: "text-indigo-400", bg: "bg-indigo-500/8" },
  { icon: "text-purple-400", bg: "bg-purple-500/8" },
  { icon: "text-teal-400", bg: "bg-teal-500/8" },
];

export default function Deliverables() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="deliverables" className="relative z-10 py-24 lg:py-32">
      <div className="container-section">
        <SectionHeader
          eyebrow="What You Receive"
          title="What you receive after the assessment."
          subtitle="A comprehensive set of findings, recommendations, and actionable plans — structured for clarity, not complexity."
        />

        {/* Dashboard preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 mb-12"
        >
          <DashboardMockup />
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {siteConfig.deliverables.map((item, i) => {
            const Icon = iconMap[item.icon] ?? FileText;
            const color = accentColors[i % accentColors.length];

            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass-card group relative overflow-hidden rounded-2xl p-5 hover:shadow-card-hover"
              >
                {/* Mock "report preview" top bar */}
                <div className="mb-4 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <div className="ml-auto h-px flex-1 bg-white/5" />
                </div>

                <div
                  className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${color.bg}`}
                >
                  <Icon size={16} className={color.icon} strokeWidth={2} />
                </div>

                <h3 className="mb-1.5 text-sm font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Post-report note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          You can decide after the report whether to implement everything,
          implement in phases, or start with only the highest-impact items.
        </motion.p>
      </div>
    </section>
  );
}
