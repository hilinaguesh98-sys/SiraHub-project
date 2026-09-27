"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  Search, 
  Filter, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { Badge } from "@/components/ui/Badge";
import { SKILL_CHALLENGES } from "@/data/mockData";

export default function ChallengesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];
  const categories = ["all", "Frontend Development", "Backend Development", "Web Fundamentals", "Mobile & UI Design", "Databases & Systems"];

  const filteredChallenges = SKILL_CHALLENGES.filter((chal) => {
    const matchesSearch =
      chal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chal.skillsTested.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      chal.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDifficulty =
      selectedDifficulty === "all" ||
      chal.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

    const matchesCategory =
      selectedCategory === "all" || chal.category === selectedCategory;

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verifiable Code Challenges</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Skill Challenge Marketplace
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Companies don't want to read bullet points. They want to see your code. Complete realistic, project-based engineering challenges, submit your GitHub repositories, and earn permanent verified badges.
            </p>
          </div>

          {/* Quick stats strip */}
          <div className="mt-8 pt-6 border-t border-slate-700/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-2xl font-black text-emerald-400">12+</span>
              <span className="text-xs text-slate-300 block">Active Challenges</span>
            </div>
            <div>
              <span className="text-2xl font-black text-white">2,400+</span>
              <span className="text-xs text-slate-300 block">Student Submissions</span>
            </div>
            <div>
              <span className="text-2xl font-black text-amber-400">76%</span>
              <span className="text-xs text-slate-300 block">Avg Industry Pass Rate</span>
            </div>
            <div>
              <span className="text-2xl font-black text-emerald-400">35+</span>
              <span className="text-xs text-slate-300 block">Hiring Companies Aligned</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search challenges by skill (e.g. React, SQL, Python), topic..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Difficulty Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Difficulty:
              </span>
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all capitalize shrink-0 cursor-pointer ${
                    selectedDifficulty === diff
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-t border-slate-100 pt-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white font-bold"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong className="text-slate-900">{filteredChallenges.length}</strong> available skill challenges</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                isCompleted={challenge.id === "chal-2" || challenge.id === "chal-3"}
                userScore={challenge.id === "chal-2" ? 95 : challenge.id === "chal-3" ? 91 : null}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
