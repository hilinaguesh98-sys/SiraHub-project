"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Clock, 
  Banknote, 
  Calendar, 
  Bookmark, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ShieldCheck, 
  Send,
  ExternalLink,
  BookOpen,
  Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ApplyOpportunityModal } from "@/components/opportunities/ApplyOpportunityModal";
import { OPPORTUNITIES, CURRENT_STUDENT } from "@/data/mockData";

export default function OpportunityDetailPage({ params }) {
  const resolvedParams = use(params);
  const oppId = resolvedParams?.id || "opp-1";
  const opportunity = OPPORTUNITIES.find((o) => o.id === oppId) || OPPORTUNITIES[0];

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Back Link */}
        <div>
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Opportunities
          </Link>
        </div>

        {/* Opportunity Hero Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-1.5 shadow-xs">
                {opportunity.logo ? (
                  <img
                    src={opportunity.logo}
                    alt={opportunity.company}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <Building2 className="w-8 h-8 text-slate-400" />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {opportunity.title}
                  </h1>
                  <Badge variant="verified" size="sm">
                    Verified Employer
                  </Badge>
                </div>
                <p className="text-base font-bold text-emerald-700">
                  {opportunity.company}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {opportunity.location} ({opportunity.workArrangement})
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {opportunity.duration}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                    {opportunity.stipend}
                  </span>
                </div>
              </div>
            </div>

            {/* Top CTA buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-3 rounded-2xl border transition-colors cursor-pointer ${
                  isSaved
                    ? "bg-amber-50 text-amber-600 border-amber-300"
                    : "bg-white text-slate-400 hover:text-slate-700 border-slate-200"
                }`}
                aria-label="Save Job"
              >
                <Bookmark className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
              </button>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsApplyModalOpen(true)}
                icon={Send}
              >
                Apply Now
              </Button>
            </div>
          </div>

          {/* Meta Pills */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Application Deadline:</span>
              <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg">
                {opportunity.deadline}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Applications Received:</span>
              <span className="font-bold text-slate-800">
                {opportunity.applicantsCount} student candidates
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Description Column (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Opportunity */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg font-bold text-slate-900">About the Opportunity</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {opportunity.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg font-bold text-slate-900">Responsibilities</h2>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {opportunity.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg font-bold text-slate-900">Requirements</h2>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {opportunity.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Will Learn */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                What You Will Learn & Build
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {opportunity.whatYouWillLearn.map((learn, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span className="leading-relaxed">{learn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Process */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-lg font-bold text-slate-900">Application & Evaluation Pipeline</h2>
              <p className="text-sm text-slate-600 font-medium">
                {opportunity.applicationProcess}
              </p>
            </div>
          </div>

          {/* Right Sidebar: "YOUR MATCH" Widget & Fast Apply */}
          <div className="space-y-6">
            {/* YOUR MATCH Card */}
            <div className="bg-white rounded-3xl border-2 border-emerald-300 p-6 shadow-md space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Skill Match Algorithm
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-full">
                  {opportunity.matchScore}% Match
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Your Verified Fit
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Compared against Hilina Guesh's verified Mekelle University profile.
                </p>
              </div>

              {/* Match Comparison List */}
              <div className="space-y-2.5 pt-2">
                {opportunity.matchBreakdown.map((item) => (
                  <div
                    key={item.skill}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${
                      item.verified
                        ? "bg-emerald-50/70 border-emerald-200 text-emerald-950 font-bold"
                        : item.inProgress
                        ? "bg-amber-50/70 border-amber-200 text-amber-950 font-medium"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.verified ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : item.inProgress ? (
                        <span className="w-4 h-4 rounded-full border-2 border-amber-500 flex items-center justify-center text-[10px] font-bold text-amber-700">~</span>
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] text-slate-400">-</span>
                      )}
                      <span>{item.skill}</span>
                    </span>

                    <span className="text-[11px] font-semibold">
                      {item.verified ? "Verified ✓" : item.inProgress ? "In Progress" : "Not Verified"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full font-bold shadow-lg"
                  onClick={() => setIsApplyModalOpen(true)}
                  icon={Send}
                >
                  Apply with Verified Profile
                </Button>
              </div>
            </div>

            {/* Employer Profile Strip */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                About the Employer
              </h4>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={opportunity.logo}
                    alt={opportunity.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{opportunity.company}</p>
                  <p className="text-xs text-slate-500">{opportunity.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Verified partner employer on SiraHub hiring directly from accredited Ethiopian universities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Apply Modal */}
      <ApplyOpportunityModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        opportunity={opportunity}
      />
    </div>
  );
}
