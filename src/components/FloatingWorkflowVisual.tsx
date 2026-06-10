"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  BarChart2,
  Zap,
  Search,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const cards = [
  {
    icon: Search,
    label: "Process Study",
    value: "47 workflows",
    color: "text-blue-400",
    bg: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/20",
    delay: 0,
    position: "top-[5%] left-[8%]",
    floatDuration: 4.5,
  },
  {
    icon: GitBranch,
    label: "Workflow Map",
    value: "12 bottlenecks",
    color: "text-violet-400",
    bg: "from-violet-500/10 to-violet-600/5",
    border: "border-violet-500/20",
    delay: 0.8,
    position: "top-[8%] right-[6%]",
    floatDuration: 5.5,
  },
  {
    icon: Zap,
    label: "AI Opportunities",
    value: "9 identified",
    color: "text-electric-400",
    bg: "from-electric-500/10 to-electric-600/5",
    border: "border-electric-500/20",
    delay: 0.4,
    position: "top-[42%] left-[2%]",
    floatDuration: 3.8,
  },
  {
    icon: BarChart2,
    label: "Dashboard Ready",
    value: "Real-time KPIs",
    color: "text-emerald-400",
    bg: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-500/20",
    delay: 1.2,
    position: "top-[38%] right-[2%]",
    floatDuration: 5,
  },
  {
    icon: TrendingUp,
    label: "Efficiency Gain",
    value: "~30–40% time saved",
    color: "text-amber-400",
    bg: "from-amber-500/10 to-amber-600/5",
    border: "border-amber-500/20",
    delay: 0.6,
    position: "bottom-[12%] left-[10%]",
    floatDuration: 4.2,
  },
  {
    icon: CheckCircle,
    label: "Implementation",
    value: "Phased rollout",
    color: "text-rose-400",
    bg: "from-rose-500/10 to-rose-600/5",
    border: "border-rose-500/20",
    delay: 1,
    position: "bottom-[10%] right-[8%]",
    floatDuration: 6,
  },
];

function FloatingCard({
  card,
}: {
  card: (typeof cards)[0];
}) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay: card.delay + 0.5, duration: 0.5 },
        scale: { delay: card.delay + 0.5, duration: 0.5 },
        y: {
          delay: card.delay,
          duration: card.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute ${card.position} glass-card rounded-xl px-3.5 py-2.5 shadow-card`}
      style={{ minWidth: 140 }}
    >
      <div
        className={`mb-1.5 flex items-center gap-2 bg-gradient-to-br ${card.bg} rounded-lg p-0.5`}
      >
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-md bg-space-900`}
        >
          <Icon size={13} className={card.color} strokeWidth={2} />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          {card.label}
        </span>
      </div>
      <p className="text-xs font-semibold text-slate-200">{card.value}</p>
    </motion.div>
  );
}

export default function FloatingWorkflowVisual() {
  return (
    <div className="relative h-[480px] w-full max-w-[520px] select-none lg:h-[560px]">
      {/* Central glowing orb */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/20 blur-2xl"
      />

      {/* Central icon ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      >
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500 to-violet-600 shadow-glow">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <path
              d="M11 18h14M18 11l7 7-7 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="11" cy="12" r="2.5" fill="rgba(255,255,255,0.7)" />
            <circle cx="11" cy="24" r="2.5" fill="rgba(255,255,255,0.7)" />
          </svg>

          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl border border-dashed border-white/20"
          />
        </div>
      </motion.div>

      {/* Connecting dots — orbital paths */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 110;
        const x = 50 + (r / 520) * 100 * Math.cos(angle);
        const y = 50 + (r / 560) * 100 * Math.sin(angle);
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              delay: i * 0.2 + 1,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-400"
          />
        );
      })}

      {/* Floating metric cards */}
      {cards.map((card, i) => (
        <FloatingCard key={i} card={card} />
      ))}
    </div>
  );
}
