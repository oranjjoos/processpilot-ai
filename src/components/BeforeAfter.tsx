"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="before-after" className="relative z-10 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/40 to-transparent" />

      <div className="container-section relative">
        <SectionHeader
          eyebrow="Transformation"
          title="From scattered operations to intelligent workflows."
          subtitle="These are the kinds of shifts our clients see — from reactive and manual to structured, visible, and efficient."
        />

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {siteConfig.beforeAfter.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card group overflow-hidden rounded-2xl"
            >
              {/* Label bar */}
              <div className="border-b border-white/6 px-6 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>
              </div>

              <div className="grid gap-0 sm:grid-cols-2">
                {/* Before */}
                <div className="relative p-5 sm:border-r sm:border-white/6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15">
                      <X size={11} className="text-rose-400" strokeWidth={3} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-rose-400/70">
                      Before
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.before}
                  </p>
                </div>

                {/* Arrow divider on mobile */}
                <div className="flex items-center justify-center border-y border-white/6 py-2 sm:hidden">
                  <ArrowRight size={14} className="text-electric-500" />
                </div>

                {/* After */}
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check
                        size={11}
                        className="text-emerald-400"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400/70">
                      After
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">
                    {item.after}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <div className="h-px bg-gradient-to-r from-rose-500/0 via-electric-500/40 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
