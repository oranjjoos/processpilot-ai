"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      className="relative z-10 py-24 lg:py-32"
    >
      {/* Subtle alt-bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/60 to-transparent" />

      <div className="container-section relative">
        <SectionHeader
          eyebrow="The Real Problem"
          title="You hear about AI everywhere. But where does it actually fit inside your business?"
          subtitle="Many businesses know AI and automation matter — but they don't know where to start. The result: expensive tools that don't fit, or no action at all."
        />

        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card group cursor-default rounded-2xl p-5 hover:shadow-card-hover"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 transition-colors duration-300 group-hover:bg-rose-500/15">
                <AlertTriangle
                  size={16}
                  className="text-rose-400"
                  strokeWidth={2}
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-100">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bold statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-slate-300 sm:text-2xl">
            The problem is not your people. It&apos;s that no one has studied
            your actual workflows and identified where the friction is.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-electric-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
