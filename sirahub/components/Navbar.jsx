"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Search, 
  Award, 
  Briefcase, 
  User, 
  Building2, 
  GraduationCap, 
  ChevronRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { NotificationDropdown } from "./NotificationDropdown";
import { CURRENT_STUDENT } from "@/data/mockData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Skill Challenges", href: "/challenges" },
    { name: "My Skills", href: "/skills" },
    { name: "For Companies", href: "/company" },
    { name: "For Universities", href: "/university" }
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform relative overflow-hidden">
                <span className="relative z-10 tracking-tighter">S</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-emerald-600" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-slate-900 tracking-tight">Sira<span className="text-emerald-600">Hub</span></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded border border-amber-300">ET</span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium hidden sm:inline-block -mt-0.5">Ethiopia's Skill Verification Hub</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Global Search Button */}
            <Link
              href="/search"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer hidden sm:flex items-center gap-2 text-xs font-medium border border-slate-200/80 px-3"
              aria-label="Global Search"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span className="text-slate-500">Search skills, jobs...</span>
              <kbd className="hidden md:inline-block bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 font-mono">⌘K</kbd>
            </Link>

            {/* Notifications Dropdown */}
            <NotificationDropdown />

            {/* Student Profile Quick Access / Switcher */}
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-3">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-all border border-slate-200/80 bg-white"
                title="Open Student Dashboard"
              >
                <img
                  src={CURRENT_STUDENT.avatar}
                  alt={CURRENT_STUDENT.name}
                  className="w-8 h-8 rounded-lg object-cover ring-1 ring-emerald-500"
                />
                <div className="text-left pr-1 hidden xl:block">
                  <div className="text-xs font-bold text-slate-900 leading-tight flex items-center gap-1">
                    {CURRENT_STUDENT.name}
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight">Student · MU</div>
                </div>
              </Link>
            </div>

            {/* Primary CTA */}
            <Link
              href="/dashboard"
              className="hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-amber-300" />
              Build Skill Profile
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={CURRENT_STUDENT.avatar}
                alt={CURRENT_STUDENT.name}
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500"
              />
              <div>
                <p className="font-bold text-slate-900 text-sm">{CURRENT_STUDENT.name}</p>
                <p className="text-xs text-slate-500">Mekelle University · 2nd Year</p>
              </div>
            </div>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg"
            >
              Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              href="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl"
            >
              <Search className="w-4 h-4 text-slate-500" /> Global Search
            </Link>
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl"
            >
              <User className="w-4 h-4 text-emerald-600" /> Public Profile
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-emerald-50 text-emerald-700 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
            >
              Build Your Skill Profile
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
