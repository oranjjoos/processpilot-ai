"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";
import { fadeInUp } from "@/lib/utils";

const stepColors = [
  { ring: "border-electric-500/40", bg: "bg-electric-500/10", text: "text-electric-400" },
  { ring: "border-blue-500/40", bg: "bg-blue-500/10", text: "text-blue-400" },
  { ring: "border-violet-500/40", bg: "bg-violet-500/10", text: "text-violet-400" },
  { ring: "border-emerald-500/40", bg: "bg-emerald-500/10", text: "text-emerald-400" },
  { ring: "border-amber-500/40", bg: "bg-amber-500/10", text: "text-amber-400" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="relative z-10 py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/40 to-transparent" />

      <div className="container-section relative">
        <SectionHeader
          eyebrow="The Process"
          title="Five clear steps from first meeting to full transformation."
          subtitle="Start with a free conversation. Then choose exactly how far you want to go."
        />

        <div
          ref={ref}
          className="relative mt-16"
        >
          {/* Vertical connector line (desktop) */}
          <div className="absolute left-8 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-electric-500/50 via-violet-500/30 to-transparent lg:left-[calc(50%-0.5px)] lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {siteConfig.process.map((step, i) => {
              const color = stepColors[i];
              const isRight = i % 2 !== 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isRight ? 30 : -30 }
                  }
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex items-start gap-6 lg:mb-12 lg:grid lg:grid-cols-2 lg:gap-12 ${
                    isRight ? "lg:text-right" : ""
                  }`}
                >
                  {/* Content — alternates side on desktop */}
                  <div className={`flex-1 ${isRight ? "lg:order-2 lg:text-left" : ""}`}>
                    <div className="glass-card rounded-2xl p-6 hover:shadow-card-hover transition-shadow duration-300">
                      {step.step === 1 && (
                        <span className="mb-3 inline-block rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                          Free — No obligation
                        </span>
                      )}
                      {step.step === 5 && (
                        <span className="mb-3 inline-block rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                          Optional
                        </span>
                      )}
                      <h3 className="mb-2 text-lg font-semibold text-slate-100">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center step bubble */}
                  <div
                    className={`relative z-10 flex shrink-0 flex-col items-center lg:col-span-1 lg:justify-center ${
                      isRight ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Mobile connector */}
                    {i < siteConfig.process.length - 1 && (
                      <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-white/10 to-transparent lg:hidden" />
                    )}

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${color.ring} ${color.bg} shadow-glow-sm`}
                    >
                      <span className={`text-sm font-bold ${color.text}`}>
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Empty grid cell on desktop */}
                  <div className={`hidden lg:block ${isRight ? "lg:order-3" : ""}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <CTAButton href="#contact" size="lg">
            Start with a free consultation
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
