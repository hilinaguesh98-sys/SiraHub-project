"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Briefcase, 
  Award, 
  Send, 
  UserCircle2 
} from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const items = [
    { label: "Home", href: "/", icon: Home },
    { label: "Opportunities", href: "/opportunities", icon: Briefcase },
    { label: "Challenges", href: "/challenges", icon: Award },
    { label: "Applications", href: "/applications", icon: Send },
    { label: "Profile", href: "/profile", icon: UserCircle2 }
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 md:hidden py-1.5 px-3">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 min-w-[60px] active:scale-95 ${
                active
                  ? "text-emerald-700 font-bold"
                  : "text-slate-500 hover:text-slate-900 font-medium"
              }`}
            >
              <div className={`p-1 rounded-xl transition-colors ${active ? "bg-emerald-50 text-emerald-600" : ""}`}>
                <Icon className={`w-5 h-5 ${active ? "stroke-[2.5]" : "stroke-[1.8]"}`} />
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 ${active ? "font-bold text-emerald-800" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
