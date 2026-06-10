"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  X,
  Check,
  MessageSquare,
  Clock,
  FileText,
  LayoutDashboard,
  GitBranch,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

// Pair each item with its "before tool" and "after result" badges
const itemMeta = [
  {
    beforeIcon: MessageSquare,
    beforeBadge: "WhatsApp + memory",
    afterIcon: LayoutDashboard,
    afterBadge: "CRM + automation",
  },
  {
    beforeIcon: Clock,
    beforeBadge: "Month-end manual",
    afterIcon: LayoutDashboard,
    afterBadge: "Live dashboard",
  },
  {
    beforeIcon: MessageSquare,
    beforeBadge: "Verbal / scattered",
    afterIcon: GitBranch,
    afterBadge: "Structured workflow",
  },
  {
    beforeIcon: FileText,
    beforeBadge: "Rebuilt from scratch",
    afterIcon: Cpu,
    afterBadge: "AI-assisted templates",
  },
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="before-after" className="relative z-10 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/40 to-transparent" />

      <div className="container-section relative">
        <SectionHeader
          eyebrow="Transformation"
          title="From scattered to structured."
          subtitle="Real operational shifts — from reactive and manual to visible, fast, and in control."
        />

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {siteConfig.beforeAfter.map((item, i) => {
            const meta = itemMeta[i];
            const BeforeIcon = meta.beforeIcon;
            const AfterIcon = meta.afterIcon;

            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="overflow-hidden rounded-2xl border border-white/6 bg-space-900"
              >
                {/* Label bar */}
                <div className="border-b border-white/6 bg-space-800 px-5 py-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-slate-600 uppercase tracking-wider">
                    Transformation
                  </span>
                </div>

                <div className="grid sm:grid-cols-2">
                  {/* Before */}
                  <div className="relative bg-rose-500/[0.04] p-5 sm:border-r sm:border-white/6">
                    {/* Status chip */}
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15">
                        <X size={10} className="text-rose-400" strokeWidth={3} />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-400/70">
                        Before
                      </span>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-slate-400">
                      {item.before}
                    </p>

                    {/* Tool badge */}
                    <div className="flex items-center gap-1.5 rounded-lg bg-rose-500/8 border border-rose-500/15 px-2.5 py-1.5 w-fit">
                      <BeforeIcon size={11} className="text-rose-400/70 shrink-0" strokeWidth={2} />
                      <span className="text-[10px] text-rose-400/70 font-medium">{meta.beforeBadge}</span>
                    </div>
                  </div>

                  {/* Arrow — mobile only */}
                  <div className="flex items-center justify-center border-y border-white/5 py-2 sm:hidden">
                    <ArrowRight size={14} className="text-electric-500" />
                  </div>

                  {/* After */}
                  <div className="bg-emerald-500/[0.03] p-5">
                    {/* Status chip */}
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                        <Check size={10} className="text-emerald-400" strokeWidth={3} />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/70">
                        After
                      </span>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-slate-200">
                      {item.after}
                    </p>

                    {/* Result badge */}
                    <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/8 border border-emerald-500/15 px-2.5 py-1.5 w-fit">
                      <AfterIcon size={11} className="text-emerald-400/70 shrink-0" strokeWidth={2} />
                      <span className="text-[10px] text-emerald-400/70 font-medium">{meta.afterBadge}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
