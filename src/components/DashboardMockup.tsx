"use client";

import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, Cpu, BarChart2 } from "lucide-react";

interface DashboardMockupProps {
  animate?: boolean;
}

export default function DashboardMockup({ animate = true }: DashboardMockupProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Browser frame */}
      <div className="rounded-2xl border border-white/8 bg-space-900 shadow-2xl overflow-hidden">
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-space-800 border-b border-white/6">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
          </div>
          <div className="flex-1 mx-3 h-5 rounded-full bg-space-700 flex items-center px-3">
            <span className="text-[10px] text-slate-600">
              app.processpilot.ai/report
            </span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-200">
                Business Assessment Report
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                ProcessPilot AI — Confidential
              </p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Complete
            </span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              {
                label: "Digital Maturity",
                value: "3.2/10",
                color: "text-amber-400",
                bg: "bg-amber-500/8",
                Icon: BarChart2,
              },
              {
                label: "Process Gaps",
                value: "14",
                color: "text-rose-400",
                bg: "bg-rose-500/8",
                Icon: AlertCircle,
              },
              {
                label: "AI Opportunities",
                value: "9",
                color: "text-electric-400",
                bg: "bg-electric-500/8",
                Icon: Cpu,
              },
              {
                label: "Est. Time Saved",
                value: "~35%",
                color: "text-emerald-400",
                bg: "bg-emerald-500/8",
                Icon: TrendingUp,
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={animate ? { opacity: 0, y: 8 } : { opacity: 1 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                className={`rounded-xl ${stat.bg} p-2.5 border border-white/5`}
              >
                <stat.Icon
                  size={11}
                  className={`${stat.color} mb-1.5`}
                  strokeWidth={2}
                />
                <p className={`text-sm font-bold leading-none ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-[9px] text-slate-600 leading-tight mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Main content: AI matrix + roadmap */}
          <div className="grid grid-cols-5 gap-2">
            {/* AI Opportunity Matrix */}
            <div className="col-span-3 rounded-xl bg-space-800/60 border border-white/5 p-2.5">
              <p className="text-[9px] font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                AI Opportunity Matrix
              </p>
              <div className="space-y-1.5">
                {[
                  {
                    label: "Approval Workflow",
                    impact: "High",
                    dot: "bg-electric-500",
                    badge: "bg-electric-500/15 text-electric-400",
                  },
                  {
                    label: "CRM + Sales Follow-up",
                    impact: "High",
                    dot: "bg-violet-500",
                    badge: "bg-violet-500/15 text-violet-400",
                  },
                  {
                    label: "Report Generation",
                    impact: "Medium",
                    dot: "bg-sky-500",
                    badge: "bg-sky-500/15 text-sky-400",
                  },
                  {
                    label: "Document Templates",
                    impact: "Medium",
                    dot: "bg-blue-500",
                    badge: "bg-blue-500/15 text-blue-400",
                  },
                  {
                    label: "Inventory Tracking",
                    impact: "Low",
                    dot: "bg-slate-500",
                    badge: "bg-slate-500/15 text-slate-400",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <div
                        className={`w-1 h-1 rounded-full ${row.dot} shrink-0`}
                      />
                      <span className="text-[9px] text-slate-400 truncate">
                        {row.label}
                      </span>
                    </div>
                    <span
                      className={`text-[8px] shrink-0 px-1.5 py-0.5 rounded ${row.badge}`}
                    >
                      {row.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap timeline */}
            <div className="col-span-2 rounded-xl bg-space-800/60 border border-white/5 p-2.5">
              <p className="text-[9px] font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                Roadmap
              </p>
              <div className="space-y-2.5">
                {[
                  { phase: "Quick wins", pct: "90%", color: "bg-emerald-500" },
                  { phase: "Phase 2", pct: "65%", color: "bg-electric-500" },
                  { phase: "Phase 3", pct: "40%", color: "bg-violet-500" },
                  { phase: "Strategic", pct: "20%", color: "bg-blue-500" },
                ].map((row, i) => (
                  <div key={row.phase}>
                    <p className="text-[8px] text-slate-500 mb-1">
                      {row.phase}
                    </p>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${row.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: row.pct }}
                        transition={{
                          delay: i * 0.15 + 0.5,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
