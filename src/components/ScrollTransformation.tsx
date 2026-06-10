"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  MessageSquare,
  FileSpreadsheet,
  Clock,
  AlertTriangle,
  XCircle,
  Mail,
  GitBranch,
  Cpu,
  Wrench,
  LayoutDashboard,
  CheckCircle,
  Map,
  Search,
} from "lucide-react";
import { fadeInUp, staggerContainerSlow } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CardData {
  Icon: React.ElementType;
  label: string;
  sub: string;
  iconColor: string;
  bg: string;
  border: string;
}

// ─── Phase content ────────────────────────────────────────────────────────────

const phases = [
  {
    eyebrow: "Right Now",
    headline: "Your operations are manual and disconnected.",
    description:
      "Approvals over WhatsApp. Excel files rebuilt every Monday. Reports that arrive too late to act on. No single source of truth.",
    accentColor: "text-rose-400",
    dotColor: "bg-rose-500",
    borderColor: "border-rose-500/20",
  },
  {
    eyebrow: "Our Process",
    headline: "We study every step before suggesting anything.",
    description:
      "Our consultants map workflows end-to-end. We interview your team, review your tools, and document every bottleneck and missed opportunity.",
    accentColor: "text-amber-400",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-500/20",
  },
  {
    eyebrow: "After Assessment",
    headline: "A clear, structured path to AI-ready operations.",
    description:
      "Workflow maps. AI opportunity matrix. Prioritised roadmap. Vendor-neutral tool recommendations. No guesswork. No vendor pressure.",
    accentColor: "text-electric-400",
    dotColor: "bg-electric-500",
    borderColor: "border-electric-500/20",
  },
];

// ─── Card data ────────────────────────────────────────────────────────────────

const beforeCards: CardData[] = [
  {
    Icon: MessageSquare,
    label: "WhatsApp approvals",
    sub: "No audit trail",
    iconColor: "text-rose-400",
    bg: "bg-rose-500/8",
    border: "border-rose-500/15",
  },
  {
    Icon: FileSpreadsheet,
    label: "Excel v7_FINAL",
    sub: "Version confusion",
    iconColor: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/15",
  },
  {
    Icon: Clock,
    label: "Delayed reports",
    sub: "End-of-month rush",
    iconColor: "text-orange-400",
    bg: "bg-orange-500/8",
    border: "border-orange-500/15",
  },
  {
    Icon: AlertTriangle,
    label: "Manual approvals",
    sub: "Lost in messages",
    iconColor: "text-rose-400",
    bg: "bg-rose-500/8",
    border: "border-rose-500/15",
  },
  {
    Icon: XCircle,
    label: "Disconnected tools",
    sub: "Manual data transfer",
    iconColor: "text-red-400",
    bg: "bg-red-500/8",
    border: "border-red-500/15",
  },
  {
    Icon: Mail,
    label: "Scattered emails",
    sub: "No central thread",
    iconColor: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/15",
  },
];

const afterCards: CardData[] = [
  {
    Icon: GitBranch,
    label: "Workflow Map",
    sub: "End-to-end visibility",
    iconColor: "text-electric-400",
    bg: "bg-electric-500/8",
    border: "border-electric-500/20",
  },
  {
    Icon: Cpu,
    label: "AI Opportunities",
    sub: "9 identified & scored",
    iconColor: "text-violet-400",
    bg: "bg-violet-500/8",
    border: "border-violet-500/20",
  },
  {
    Icon: Wrench,
    label: "Recommended Tools",
    sub: "Vendor-neutral",
    iconColor: "text-sky-400",
    bg: "bg-sky-500/8",
    border: "border-sky-500/20",
  },
  {
    Icon: Map,
    label: "Implementation Roadmap",
    sub: "Phased & prioritised",
    iconColor: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
  },
  {
    Icon: LayoutDashboard,
    label: "Live Dashboard",
    sub: "Real-time KPIs",
    iconColor: "text-teal-400",
    bg: "bg-teal-500/8",
    border: "border-teal-500/20",
  },
  {
    Icon: CheckCircle,
    label: "Training Plan",
    sub: "Full adoption support",
    iconColor: "text-emerald-400",
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
  },
];

// ─── Card grid ────────────────────────────────────────────────────────────────

function CardGrid({ cards }: { cards: CardData[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.07,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`glass-card rounded-xl p-3 border ${card.border} cursor-default`}
        >
          <div
            className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${card.bg}`}
          >
            <card.Icon
              size={13}
              className={card.iconColor}
              strokeWidth={2}
            />
          </div>
          <p className="text-xs font-semibold text-slate-200 leading-snug">
            {card.label}
          </p>
          <p className="text-[10px] text-slate-600 mt-0.5">{card.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Analysis visual (phase 2) ────────────────────────────────────────────────

function AnalysisVisual() {
  const nodeLabels = ["Interview team", "Review tools", "Map processes", "Find gaps"];
  const nodePositions = [
    "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
    "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-72">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 rounded-full border border-dashed border-amber-500/15"
      />
      {/* Inner counter-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute w-44 h-44 rounded-full border border-dashed border-amber-500/10"
      />

      {/* Center node */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center w-28 h-28 rounded-full border border-amber-500/30 bg-amber-500/5 text-center shadow-glow-sm"
      >
        <Search size={20} className="text-amber-400 mb-1" strokeWidth={1.5} />
        <p className="text-xs font-semibold text-amber-400">Mapping</p>
        <p className="text-[9px] text-slate-600 mt-0.5">workflows</p>
      </motion.div>

      {/* Compass nodes */}
      {nodeLabels.map((label, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, delay: i * 0.55, repeat: Infinity }}
          className={`absolute ${nodePositions[i]} text-[10px] font-medium text-amber-400/80 px-2.5 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 whitespace-nowrap z-10`}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Phase text block ─────────────────────────────────────────────────────────

function PhaseText({ phase }: { phase: (typeof phases)[0] }) {
  return (
    <div className="max-w-md">
      <span
        className={`inline-block mb-4 text-xs font-semibold uppercase tracking-widest ${phase.accentColor} border ${phase.borderColor} rounded-full px-3 py-1`}
      >
        {phase.eyebrow}
      </span>
      <h3 className="text-3xl font-bold leading-tight text-slate-50 mb-4 lg:text-4xl">
        {phase.headline}
      </h3>
      <p className="text-base leading-relaxed text-slate-400">
        {phase.description}
      </p>
    </div>
  );
}

// ─── Desktop sticky scroll ────────────────────────────────────────────────────

function DesktopScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Opacity for each phase
  const p1Opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.28, 0.38],
    [1, 1, 0, 0]
  );
  const p2Opacity = useTransform(
    scrollYProgress,
    [0.28, 0.40, 0.60, 0.70],
    [0, 1, 1, 0]
  );
  const p3Opacity = useTransform(
    scrollYProgress,
    [0.62, 0.75, 1],
    [0, 1, 1]
  );

  // Background gradient tints
  const bg1Opacity = useTransform(scrollYProgress, [0, 0.30], [1, 0]);
  const bg3Opacity = useTransform(scrollYProgress, [0.60, 0.80], [0, 1]);

  // Progress dot opacities
  const dot1 = useTransform(scrollYProgress, [0, 0.20, 0.33], [1, 1, 0.25]);
  const dot2 = useTransform(
    scrollYProgress,
    [0.25, 0.40, 0.60, 0.70],
    [0.25, 1, 1, 0.25]
  );
  const dot3 = useTransform(scrollYProgress, [0.60, 0.75, 1], [0.25, 1, 1]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-space-950" />
        <motion.div
          style={{ opacity: bg1Opacity }}
          className="absolute inset-0 bg-gradient-to-br from-rose-950/12 via-transparent to-transparent"
        />
        <motion.div
          style={{ opacity: bg3Opacity }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-950/15"
        />

        {/* Section label */}
        <div className="absolute top-10 left-0 right-0 z-20 flex justify-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
            From Manual to AI-Ready
          </span>
        </div>

        {/* Content area */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-section w-full">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Left: phase text */}
              <div className="relative" style={{ minHeight: "200px" }}>
                <motion.div
                  style={{ opacity: p1Opacity }}
                  className="absolute inset-0 flex items-center"
                >
                  <PhaseText phase={phases[0]} />
                </motion.div>
                <motion.div
                  style={{ opacity: p2Opacity }}
                  className="absolute inset-0 flex items-center"
                >
                  <PhaseText phase={phases[1]} />
                </motion.div>
                <motion.div
                  style={{ opacity: p3Opacity }}
                  className="absolute inset-0 flex items-center"
                >
                  <PhaseText phase={phases[2]} />
                </motion.div>
              </div>

              {/* Right: visual */}
              <div className="relative" style={{ minHeight: "360px" }}>
                <motion.div
                  style={{ opacity: p1Opacity }}
                  className="absolute inset-0 flex items-center justify-end"
                >
                  <CardGrid cards={beforeCards} />
                </motion.div>
                <motion.div
                  style={{ opacity: p2Opacity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <AnalysisVisual />
                </motion.div>
                <motion.div
                  style={{ opacity: p3Opacity }}
                  className="absolute inset-0 flex items-center justify-end"
                >
                  <CardGrid cards={afterCards} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {[dot1, dot2, dot3].map((dotOpacity, i) => (
            <motion.div
              key={i}
              style={{ opacity: dotOpacity }}
              className="w-2 h-2 rounded-full bg-slate-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mobile stacked version ───────────────────────────────────────────────────

function MobileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const mobilePhases = [
    { phase: phases[0], cards: beforeCards, showCards: true },
    { phase: phases[1], cards: null, showCards: false },
    { phase: phases[2], cards: afterCards, showCards: true },
  ];

  return (
    <div ref={ref} className="container-section py-24 space-y-16">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          From Manual to AI-Ready
        </span>
      </div>

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-12"
      >
        {mobilePhases.map(({ phase, cards, showCards }, i) => (
          <motion.div key={i} variants={fadeInUp} className="space-y-6">
            <div className="max-w-lg">
              <span
                className={`inline-block mb-3 text-xs font-semibold uppercase tracking-widest ${phase.accentColor} border ${phase.borderColor} rounded-full px-3 py-1`}
              >
                {phase.eyebrow}
              </span>
              <h3 className="text-2xl font-bold leading-tight text-slate-50 mb-3">
                {phase.headline}
              </h3>
              <p className="text-base leading-relaxed text-slate-400">
                {phase.description}
              </p>
            </div>
            {showCards && cards && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className={`glass-card rounded-xl p-3 border ${card.border}`}
                  >
                    <div
                      className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${card.bg}`}
                    >
                      <card.Icon
                        size={13}
                        className={card.iconColor}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-200 leading-snug">
                      {card.label}
                    </p>
                    <p className="text-[10px] text-slate-600 mt-0.5">
                      {card.sub}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {!showCards && (
              <div className="glass-card rounded-2xl p-6 border border-amber-500/15 text-center">
                <Search
                  size={28}
                  className="text-amber-400 mx-auto mb-3"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-semibold text-amber-400 mb-1">
                  Deep workflow study
                </p>
                <p className="text-xs text-slate-500">
                  Interviews · Process mapping · Tool review · Bottleneck
                  analysis
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ScrollTransformation() {
  return (
    <section id="transformation" className="relative z-10">
      {/* Desktop sticky scroll */}
      <div className="hidden lg:block">
        <DesktopScroll />
      </div>

      {/* Mobile stacked layout */}
      <div className="lg:hidden">
        <MobileSection />
      </div>
    </section>
  );
}
