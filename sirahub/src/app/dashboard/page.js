"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  Code2, 
  Send, 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Flame, 
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Search
} from "lucide-react";
import { StudentSidebar } from "@/components/dashboard/Sidebar";
import { CareerJourney } from "@/components/dashboard/CareerJourney";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { ChallengeSubmissionModal } from "@/components/challenges/ChallengeSubmissionModal";
import { ChallengeResultModal } from "@/components/challenges/ChallengeResultModal";
import { ApplyOpportunityModal } from "@/components/opportunities/ApplyOpportunityModal";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CURRENT_STUDENT, OPPORTUNITIES, SKILL_CHALLENGES, APPLICATIONS } from "@/data/mockData";

export default function StudentDashboardPage() {
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const activeChallenge = SKILL_CHALLENGES[0]; // React Responsive Product Card
  const recommendedOpps = OPPORTUNITIES.slice(0, 3);
  const recentApplications = APPLICATIONS.slice(0, 3);

  const handleOpenApply = (opp) => {
    setSelectedOpportunity(opp);
    setApplyModalOpen(true);
  };

  const handleChallengeSuccess = () => {
    setResultModalOpen(true);
  };

  const trendingSkills = [
    { name: "React", growth: "+28% demand", isVerified: true },
    { name: "Python", growth: "+24% demand", isVerified: false },
    { name: "Node.js", growth: "+18% demand", isVerified: false },
    { name: "Flutter", growth: "+15% demand", isVerified: false },
    { name: "UI/UX Design", growth: "+12% demand", isVerified: false },
    { name: "SQL & Databases", growth: "+10% demand", isVerified: false }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar (Desktop) */}
      <div className="hidden lg:block shrink-0">
        <StudentSidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">
        {/* Welcome Top Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Good morning, {CURRENT_STUDENT.name.split(" ")[0]}! 👋
              </h1>
              <Badge variant="verified" size="sm">
                Verified Student
              </Badge>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Keep building your skills and move closer to your career goals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors"
            >
              Public Profile
            </Link>
            <Link
              href="/challenges"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-700/20 transition-all"
            >
              <Code2 className="w-4 h-4 text-emerald-200" />
              Take a Challenge
            </Link>
          </div>
        </div>

        {/* 4 Summary Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/skills"
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Verified Skills
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">
                {CURRENT_STUDENT.metrics.verifiedSkillsCount}
              </span>
              <span className="text-xs font-semibold text-emerald-600">Top 10% in MU</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">React, JS, Git, HTML/CSS</p>
          </Link>

          <Link
            href="/challenges"
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Completed Challenges
              </span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">
                {CURRENT_STUDENT.metrics.completedChallengesCount}
              </span>
              <span className="text-xs font-semibold text-blue-600">+1 in progress</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Avg score: 90.3 / 100</p>
          </Link>

          <Link
            href="/applications"
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Applications
              </span>
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">
                {CURRENT_STUDENT.metrics.activeApplicationsCount}
              </span>
              <span className="text-xs font-semibold text-purple-600">3 in review</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">1 offer received from ArifPay</p>
          </Link>

          <Link
            href="/opportunities"
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Matched Opps
              </span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">
                {CURRENT_STUDENT.metrics.matchedOpportunitiesCount}
              </span>
              <span className="text-xs font-semibold text-amber-600">80%+ Match</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Safaricom, Gebeya, ArifPay</p>
          </Link>
        </div>

        {/* Career Progress Visual Journey */}
        <CareerJourney currentStep={5} />

        {/* Two-Column Mid Section: In-Progress Challenge + Portfolio Strength & Trending Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: In-Progress Challenge */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-amber-300">
                    IN PROGRESS
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Time left: 18 hours
                  </span>
                </div>
                <Badge variant="default" size="sm">
                  Frontend Development
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {CURRENT_STUDENT.currentChallenge.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {CURRENT_STUDENT.currentChallenge.description}
              </p>

              {/* Submission Progress Bar */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600">Challenge Completion Progress</span>
                  <span className="text-emerald-700 font-extrabold">{CURRENT_STUDENT.currentChallenge.progress}%</span>
                </div>
                <ProgressBar value={CURRENT_STUDENT.currentChallenge.progress} variant="emerald" size="md" />
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {CURRENT_STUDENT.currentChallenge.skillsTested.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Submit GitHub repo & live demo URL to earn Verified React badge.
              </span>
              <Button
                variant="primary"
                onClick={() => setSubmissionModalOpen(true)}
                className="w-full sm:w-auto"
              >
                <span>Continue Challenge</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Right Col: Portfolio Strength & Trending Skills */}
          <div className="space-y-6">
            {/* Portfolio Strength Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-sm">Portfolio Strength</h3>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Very Strong
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-slate-900">75%</span>
                <span className="text-xs text-slate-500">out of 100% complete</span>
              </div>

              <ProgressBar value={75} variant="gradient" size="md" />

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Add 1 more verified challenge (e.g. Node.js or SQL) to reach <span className="font-bold text-slate-900">85%+ Top Talent Tier</span>.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <Link
                  href="/skills"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  Optimize Profile & Skills →
                </Link>
              </div>
            </div>

            {/* Trending Skills in Ethiopia */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold text-slate-900 text-sm">Trending Skills in Ethiopia</h3>
              </div>

              <div className="space-y-2">
                {trendingSkills.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-50 text-xs"
                  >
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      {item.name}
                      {item.isVerified && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-semibold">
                          Verified
                        </span>
                      )}
                    </span>
                    <span className="font-semibold text-emerald-600">{item.growth}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Opportunities Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Recommended Opportunities for You</h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Matched according to your verified skills in React, JavaScript, and Git.
              </p>
            </div>
            <Link
              href="/opportunities"
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>View All Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedOpps.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
              />
            ))}
          </div>
        </div>

        {/* Recent Applications Table */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Recent Applications</h3>
              <p className="text-xs text-slate-500">Track your real-time interview pipeline and company decisions.</p>
            </div>
            <Link
              href="/applications"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              Full Application Tracker →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3">Company</th>
                  <th className="pb-3">Position</th>
                  <th className="pb-3">Applied Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Next Step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {recentApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 font-bold text-slate-900">{app.company}</td>
                    <td className="py-3.5 text-slate-700">{app.position}</td>
                    <td className="py-3.5 text-slate-500">{app.appliedDate}</td>
                    <td className="py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        app.status === "Accepted"
                          ? "bg-emerald-100 text-emerald-800"
                          : app.status === "Interview"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-xs text-slate-600 max-w-xs truncate font-medium">
                      {app.nextStep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modals for Challenge Submission & Results */}
      <ChallengeSubmissionModal
        isOpen={submissionModalOpen}
        onClose={() => setSubmissionModalOpen(false)}
        challenge={activeChallenge}
        onSubmitSuccess={handleChallengeSuccess}
      />

      <ChallengeResultModal
        isOpen={resultModalOpen}
        onClose={() => setResultModalOpen(false)}
        challenge={activeChallenge}
        score={85}
      />
    </div>
  );
}
