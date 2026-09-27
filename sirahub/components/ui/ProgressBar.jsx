"use client";

import React from "react";

export function ProgressBar({
  value = 0,
  max = 100,
  variant = "emerald",
  size = "md",
  showLabel = false,
  label = "",
  className = ""
}) {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-3.5"
  };

  const variantGradients = {
    emerald: "bg-emerald-500",
    gold: "bg-amber-500",
    blue: "bg-blue-600",
    gradient: "bg-gradient-to-r from-emerald-500 via-emerald-600 to-amber-500"
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-medium text-slate-600 mb-1.5">
          <span>{label}</span>
          <span className="font-semibold text-slate-900">{percentage}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${sizeClasses[size] || sizeClasses.md} border border-slate-200/60`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${variantGradients[variant] || variantGradients.emerald}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
