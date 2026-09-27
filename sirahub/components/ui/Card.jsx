"use client";

import React from "react";

export function Card({ children, className = "", hover = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 ${
        hover ? "hover:border-slate-300 hover:shadow-md transition-all duration-200 cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-bold text-slate-900 tracking-tight ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }) {
  return <p className={`text-sm text-slate-500 mt-1 leading-relaxed ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={`mt-5 pt-4 border-t border-slate-100 flex items-center justify-between ${className}`}>{children}</div>;
}
