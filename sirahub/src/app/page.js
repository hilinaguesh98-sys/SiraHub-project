"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Award, 
  ExternalLink, 
  Github, 
  Building2, 
  Check, 
  ChevronRight,
  Zap,
  Clock,
  Layers,
  FileCheck2,
  TrendingUp,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { 
  OPPORTUNITIES, 
  SKILL_CHALLENGES, 
  UNIVERSITIES, 
  TRUSTED_COMPANIES, 
  CURRENT_STUDENT 
} from "@/data/mockData";

export default function LandingPage() {
  const featuredOpps = OPPORTUNITIES.slice(0, 3);
  const featuredChallenges = SKILL_CHALLENGES.slice(0, 3);

  const steps = [
    { num: 1, label: "Learn", active: false },
    { num: 2, label: "Practice", active: false },
    { num: 3, label: "Verify", active: true },
    { num: 4, label: "Portfolio", active: false },
    { num: 5, label: "Opportunities", active: false },
    { num: 6, label: "Apply", active: false }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Join Challenges",
      desc: "Accept practical coding and design challenges modeled after real tasks from Ethiopian technology firms."
    },
    {
      step: "02",
      title: "Build & Submit",
      desc: "Develop production-ready solutions using GitHub, host working live demos, and demonstrate clean code structure."
    },
    {
      step: "03",
      title: "Get Peer & Automated Review",
      desc: "Submissions are rigorously evaluated against responsiveness, code quality, and security standards."
    },
    {
      step: "04",
      title: "Unlock Opportunities",
      desc: "Directly match with paid internships and junior roles from Safaricom, Gebeya, ArifPay, and Awash Bank."
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Zero Resume Fluff",
      desc: "Forget traditional text-only CVs. Present an interactive profile validated by actual functional projects."
    },
    {
      icon: MapPin,
      title: "Ethiopia Focused",
      desc: "Direct partnerships with leading local tech ecosystems like Gebeya, Safaricom Ethiopia, and Ethio Telecom."
    },
    {
      icon: GraduationCap,
      title: "University Aligned",
      desc: "Direct platform integration with major campuses including Mekelle University, Addis Ababa University, and Bahir Dar."
    },
    {
      icon: Users,
      title: "Direct Hiring Pipeline",
      desc: "Verified scores and skills put you straight on the shortlist, bypassing automated keyword-filtering screening stages."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-extrabold border border-amber-400/30 uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Turn Your Skills Into Opportunities</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            Don't just say you have a skill. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">
              Show what you can build.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            SiraHub is Ethiopia's premier verified skill-to-opportunity platform connecting ambitious university and college students directly with leading national employers through real project evidence.
          </p>

          {/* Hero Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Build Your Skill Profile</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/opportunities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Opportunities</span>
            </Link>
          </div>

          {/* SiraHub Visual Journey Road: 1 Learn -> 2 Practice -> 3 Verify -> 4 Portfolio -> 5 Opps -> 6 Apply */}
          <div className="pt-10 max-w-3xl mx-auto">
            <div className="bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-slate-700/80 shadow-2xl">
              <div className="flex items-center justify-between overflow-x-auto gap-2 py-1">
                {steps.map((st, idx) => (
                  <React.Fragment key={st.num}>
                    <div className="flex flex-col items-center shrink-0 min-w-[70px]">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                          st.active
                            ? "bg-amber-500 text-slate-950 ring-4 ring-amber-400/30 scale-110 shadow-md"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        {st.num}
                      </div>
                      <span className={`text-[11px] font-bold mt-2 ${st.active ? "text-amber-400" : "text-slate-400"}`}>
                        {st.label}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="hidden sm:block w-8 h-0.5 bg-slate-700 shrink-0 mt-[-14px]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED UNIVERSITIES & COMPANIES MARQUEE */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by Top Ethiopian Universities & Technology Employers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80">
            {TRUSTED_COMPANIES.slice(0, 6).map((c) => (
              <div key={c.name} className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  {c.name.charAt(0)}
                </div>
                <span className="font-extrabold text-sm text-slate-700 group-hover:text-emerald-700 transition-colors">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Bridging the Gap from Study to Career
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              A transparent, merit-first pathway that turns academic knowledge into validated industry proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all space-y-4 relative group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-lg border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED OPPORTUNITIES */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Immediate Openings
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
                Featured Career Opportunities
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Stipends paid in Ethiopian Birr (ETB). Matched directly to student verified challenge badges.
              </p>
            </div>
            <Link
              href="/opportunities"
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
            >
              <span>View All Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredOpps.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. POPULAR SKILL VERIFICATION CHALLENGES */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Show What You Can Build
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
                Popular Skill Verification Challenges
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Solve realistic engineering problems, submit GitHub links, and earn permanent verification badges.
              </p>
            </div>
            <Link
              href="/challenges"
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
            >
              <span>View All Challenges</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredChallenges.map((chal) => (
              <ChallengeCard key={chal.id} challenge={chal} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY TOP STUDENTS & COMPANIES CHOOSE US */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Why SiraHub
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Top Students & Companies Choose Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Built specifically for the Ethiopian tech ecosystem, university curricula, and national hiring demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-slate-50 p-6 rounded-3xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. STUDENT PORTFOLIO PREVIEW */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Student Portfolio System
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Build a Verified Portfolio That Companies Trust
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Your profile is more than bullet points. It's a secure ledger of challenges completed, code verified, and real-world products hosted online. Show hiring managers exactly what you are capable of developing.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span>Earn official skill verification badges</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span>Link live verified projects directly to your profile</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span>Share profile with national recruiters via simple link</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/profile"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>See Hilina Guesh's Verified Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Interactive Profile Preview Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={CURRENT_STUDENT.avatar}
                    alt={CURRENT_STUDENT.name}
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-500"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                      {CURRENT_STUDENT.name}
                      <Badge variant="open" size="sm">Open to Opportunities</Badge>
                    </h4>
                    <p className="text-xs text-slate-500">
                      {CURRENT_STUDENT.department} · {CURRENT_STUDENT.university}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Verified Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="verified" size="sm">React</Badge>
                  <Badge variant="verified" size="sm">JavaScript</Badge>
                  <Badge variant="verified" size="sm">Git</Badge>
                  <Badge variant="verified" size="sm">HTML/CSS</Badge>
                  <Badge variant="verified" size="sm">UI Design</Badge>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Latest Verified Solution:</span>
                  <span className="text-emerald-700 font-bold">Score 85/100 · Verified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Code2 className="w-4 h-4 text-emerald-600" />
                  <span>React Responsive Product Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOR COMPANIES BANNER */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                For Employers
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Hire Pre-Screened Student Developers Instantly
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Say goodbye to manual resume screening and technical interviews that lead to dead ends. SiraHub provides objective, project-backed proof of a student's capabilities before you even chat.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/company"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all text-center"
              >
                Partner as Employer
              </Link>
              <Link
                href="/search"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all text-center"
              >
                Search Verified Talent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ready to launch your technical career in Ethiopia?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Join thousands of students from Mekelle University, Addis Ababa University, Bahir Dar, and Hawassa building their verified future.
          </p>
          <div className="pt-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-xl shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
