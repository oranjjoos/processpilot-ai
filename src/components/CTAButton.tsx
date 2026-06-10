"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function CTAButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-electric-500 to-violet-600 text-white shadow-glow-sm hover:shadow-glow hover:from-electric-600 hover:to-violet-500",
    secondary:
      "bg-transparent border border-white/15 text-slate-200 hover:bg-white/5 hover:border-white/30",
    ghost:
      "bg-transparent text-slate-300 hover:text-white underline-offset-4 hover:underline",
  };

  const base =
    "inline-flex items-center gap-2 rounded-lg font-medium tracking-tight transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 focus-visible:ring-offset-space-950 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} {...linkProps}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
