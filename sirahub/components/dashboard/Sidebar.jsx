"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  User, 
  Award, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  Send, 
  Bookmark, 
  FileCheck2, 
  Settings,
  ShieldCheck,
  Building2,
  GraduationCap
} from "lucide-react";
import { CURRENT_STUDENT } from "@/data/mockData";

export function StudentSidebar() {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "My Profile", href: "/profile", icon: User },
    { label: "My Skills", href: "/skills", icon: Award },
    { label: "Skill Challenges", href: "/challenges", icon: Code2 },
    { label: "My Projects", href: "/profile#projects", icon: FolderGit2 },
    { label: "Opportunities", href: "/opportunities", icon: Briefcase },
    { label: "Applications", href: "/applications", icon: Send },
    { label: "Saved Opportunities", href: "/opportunities?filter=saved", icon: Bookmark },
    { label: "Certificates", href: "/profile#certificates", icon: FileCheck2 },
    { label: "Settings", href: "/profile", icon: Settings }
  ];

  const isActive = (href) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col shrink-0 min-h-[calc(100vh-4rem)]">
      {/* Student Brief Card */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <img
            src={CURRENT_STUDENT.avatar}
            alt={CURRENT_STUDENT.name}
            className="w-11 h-11 rounded-xl object-cover ring-2 ring-emerald-500 shrink-0"
          />
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900 truncate flex items-center gap-1">
              {CURRENT_STUDENT.name}
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            </h4>
            <p className="text-[11px] text-slate-500 truncate">
              {CURRENT_STUDENT.department}
            </p>
            <p className="text-[11px] font-semibold text-emerald-700 truncate">
              {CURRENT_STUDENT.university}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const active = isActive(link.href);

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active
                  ? "bg-emerald-50 text-emerald-800 shadow-xs border border-emerald-200/60"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? "text-emerald-700 stroke-[2.5]" : "text-slate-400"}`} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Switcher Card */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/60 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
          Platform Portals
        </span>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/company"
            className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700"
          >
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Company</span>
          </Link>
          <Link
            href="/university"
            className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700"
          >
            <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
            <span>University</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
