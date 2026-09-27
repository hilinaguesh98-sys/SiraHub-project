"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, MapPin } from "lucide-react";
import { UNIVERSITIES } from "@/data/mockData";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/20">
                S
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Sira<span className="text-emerald-400">Hub</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                Ethiopia
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ethiopia's premier student skill-to-opportunity platform. We help university and college students turn academic knowledge into verified practical evidence, build portfolios, and connect with forward-thinking employers.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-amber-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                "Don't just say you have a skill. Show what you can build."
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              For Students
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="hover:text-emerald-400 transition-colors">
                  Skill Challenges
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-emerald-400 transition-colors">
                  Skill Verification
                </Link>
              </li>
              <li>
                <Link href="/opportunities" className="hover:text-emerald-400 transition-colors">
                  Internships & Junior Jobs
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-emerald-400 transition-colors">
                  Student Portfolios
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-emerald-400 transition-colors">
                  Application Tracker
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              For Employers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/company" className="hover:text-emerald-400 transition-colors">
                  Company Talent Portal
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-emerald-400 transition-colors">
                  Candidate Discovery
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-emerald-400 transition-colors">
                  Post an Opportunity
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="hover:text-emerald-400 transition-colors">
                  Sponsor a Skill Challenge
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-emerald-400 transition-colors">
                  Verified Talent Pipeline
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Universities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/university" className="hover:text-emerald-400 transition-colors">
                  Career Office Portal
                </Link>
              </li>
              <li>
                <Link href="/university" className="hover:text-emerald-400 transition-colors">
                  Internship Placement Tracking
                </Link>
              </li>
              <li>
                <Link href="/university" className="hover:text-emerald-400 transition-colors">
                  Curriculum Skill Gap Analytics
                </Link>
              </li>
              <li>
                <Link href="/university" className="hover:text-emerald-400 transition-colors">
                  Industry Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Universities in Ethiopia */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Connecting Students Across Ethiopian Higher Education
            </span>
            <span className="text-xs text-slate-500">Mekelle · Addis Ababa · Bahir Dar · Hawassa · Adama · Gondar · Jimma</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {UNIVERSITIES.map((uni) => (
              <span
                key={uni.name}
                className="text-xs px-3 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-colors"
              >
                {uni.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SiraHub Technologies PLC. Addis Ababa & Mekelle, Ethiopia.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/search" className="hover:text-slate-300">Directory</Link>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              Built for Ethiopian Youth
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
