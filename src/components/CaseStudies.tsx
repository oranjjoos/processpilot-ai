"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" className="relative z-10 py-24 lg:py-32">
      <div className="container-section">
        <SectionHeader
          eyebrow="Case Studies"
          title="Case studies coming soon."
          subtitle="As an emerging firm, we are building our client portfolio. Below are the areas in which we are actively working on our first engagements."
        />

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card group relative overflow-hidden rounded-2xl p-5 opacity-80"
            >
              {/* Placeholder preview bars */}
              <div className="mb-4 space-y-1.5" aria-hidden="true">
                <div className="h-1.5 w-3/4 rounded-full bg-white/5" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/5" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/5" />
              </div>

              <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-300">
                {study.title}
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-slate-600">
                {study.description}
              </p>

              {/* Status badge */}
              <div className="flex items-center gap-1.5">
                <Clock size={11} className="text-slate-600" />
                <span className="text-[10px] font-medium text-slate-600">
                  {study.status}
                </span>
              </div>

              {/* Subtle diagonal watermark */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center opacity-[0.02]"
              >
                <span className="rotate-[-30deg] text-4xl font-black uppercase tracking-widest text-white">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 text-center text-xs text-slate-600"
        >
          Case studies will be published after client engagements are completed
          and client approval is received.
        </motion.p>
      </div>
    </section>
  );
}
