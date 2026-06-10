"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  MessageSquare,
  FileSpreadsheet,
  Clock,
  Mail,
  FileX,
  Layers,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

// Mock "operations chaos" items for the visual panel
const chaosItems = [
  {
    icon: MessageSquare,
    text: "Has the boss approved this?",
    meta: "WhatsApp · 3 hrs ago",
    color: "text-emerald-400",
    bg: "bg-emerald-500/8",
    dot: "bg-rose-500",
  },
  {
    icon: FileSpreadsheet,
    text: "Inventory_v7_FINAL_USE THIS.xlsx",
    meta: "Excel · Last edited by 3 people",
    color: "text-amber-400",
    bg: "bg-amber-500/8",
    dot: "bg-amber-500",
  },
  {
    icon: Clock,
    text: "Q4 Sales Report — OVERDUE",
    meta: "Due: last Monday",
    color: "text-rose-400",
    bg: "bg-rose-500/8",
    dot: "bg-rose-500",
  },
  {
    icon: Mail,
    text: "Re: Re: Re: Invoice approval",
    meta: "Email chain · 12 replies",
    color: "text-slate-400",
    bg: "bg-slate-500/8",
    dot: "bg-slate-500",
  },
  {
    icon: FileX,
    text: "Purchase PO #4421 — no reply",
    meta: "Approval pending · 4 days",
    color: "text-orange-400",
    bg: "bg-orange-500/8",
    dot: "bg-orange-500",
  },
  {
    icon: Layers,
    text: "47 rows to update manually",
    meta: "Data entry · Est. 2 hrs",
    color: "text-slate-400",
    bg: "bg-slate-500/8",
    dot: "bg-amber-500",
  },
];

// Problem icons (compact — no descriptions)
const problemIcons = [
  AlertTriangle,
  FileSpreadsheet,
  AlertCircle,
  Clock,
  Layers,
  MessageSquare,
  FileX,
  Mail,
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="relative z-10 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/60 to-transparent" />

      <div className="container-section relative">
        <SectionHeader
          eyebrow="The Real Problem"
          title="AI is everywhere. Your workflow is still manual."
          subtitle="Most businesses don&apos;t have an AI problem — they have a process visibility problem. No one has mapped where the friction actually is."
        />

        {/* Chaos panel + problem list */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {/* Left: visual chaos panel */}
          <div className="rounded-2xl border border-white/8 bg-space-900 overflow-hidden shadow-card">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-space-800 border-b border-white/6">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500/30" />
              </div>
              <div className="flex-1 mx-3">
                <div className="h-4 rounded bg-space-700 flex items-center px-2.5">
                  <span className="text-[9px] text-slate-600">Operations overview</span>
                </div>
              </div>
              <span className="text-[9px] font-semibold text-rose-400/80 bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.5 rounded">
                8 pending
              </span>
            </div>

            {/* Pending items */}
            <div className="divide-y divide-white/5">
              {chaosItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${item.bg}`}>
                      <Icon size={13} className={item.color} strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-300 truncate">{item.text}</p>
                      <p className="text-[10px] text-slate-600 mt-0.5">{item.meta}</p>
                    </div>
                    <div className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${item.dot}`} />
                  </motion.div>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="px-4 py-2.5 border-t border-white/5 bg-rose-500/3">
              <p className="text-[9px] text-rose-400/60 text-center">
                This is what &ldquo;managed by WhatsApp and Excel&rdquo; looks like at scale.
              </p>
            </div>
          </div>

          {/* Right: compact problem chips */}
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Common patterns we find
            </p>
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.problems.map((problem, i) => {
                const Icon = problemIcons[i % problemIcons.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.06 + 0.35, duration: 0.4 }}
                    className="glass-card flex items-start gap-2.5 rounded-xl p-3.5"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-500/10">
                      <Icon size={12} className="text-rose-400" strokeWidth={2} />
                    </div>
                    <p className="text-xs font-medium leading-snug text-slate-300">
                      {problem.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bold statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-slate-300 sm:text-2xl">
            The problem isn&apos;t your people. It&apos;s that no one has mapped
            your workflows and identified where the friction actually is.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-electric-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
