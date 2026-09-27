"use client";

import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  icon: Icon,
  iconPosition = "left",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2 font-semibold shadow-xs",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold shadow-sm"
  };

  const variantStyles = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-emerald-700/20 shadow-md",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20 shadow-sm",
    gold: "bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 active:bg-amber-600 shadow-amber-500/25 shadow-md",
    outline: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900",
    outlinePrimary: "bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
