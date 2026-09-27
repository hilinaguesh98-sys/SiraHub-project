"use client";

import React from "react";

export function Badge({ children, variant = "default", size = "md", className = "" }) {
  const baseStyles = "inline-flex items-center font-medium rounded-full transition-colors";
  
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3 py-1.5 text-sm gap-2"
  };

  const variantStyles = {
    default: "bg-slate-100 text-slate-700 border border-slate-200",
    verified: "bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-semibold shadow-xs",
    progress: "bg-amber-50 text-amber-700 border border-amber-200/80",
    open: "bg-emerald-50 text-emerald-800 border border-emerald-300 ring-2 ring-emerald-500/10",
    opportunity: "bg-blue-50 text-blue-700 border border-blue-200",
    gold: "bg-amber-100 text-amber-900 border border-amber-300 font-semibold",
    danger: "bg-red-50 text-red-700 border border-red-200",
    outline: "bg-transparent text-slate-600 border border-slate-300",
    dark: "bg-slate-900 text-white"
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {variant === "verified" && (
        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
      {children}
    </span>
  );
}
