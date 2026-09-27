"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Clock, 
  Banknote, 
  Calendar, 
  Bookmark, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function OpportunityCard({ opportunity, onSave, isSaved = false }) {
  const [saved, setSaved] = useState(isSaved);

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
    if (onSave) onSave(opportunity.id, !saved);
  };

  const getMatchColor = (score) => {
    if (score >= 80) return "text-emerald-700 bg-emerald-50 border-emerald-200";
    if (score >= 60) return "text-blue-700 bg-blue-50 border-blue-200";
    return "text-amber-700 bg-amber-50 border-amber-200";
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Header: Company Info & Save Button */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-1">
              {opportunity.logo ? (
                <img
                  src={opportunity.logo}
                  alt={opportunity.company}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Building2 className="w-6 h-6 text-slate-500" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-base sm:text-lg leading-snug">
                <Link href={`/opportunities/${opportunity.id}`}>
                  {opportunity.title}
                </Link>
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                {opportunity.company}
              </p>
            </div>
          </div>

          <button
            onClick={toggleSave}
            className={`p-2 rounded-xl border transition-colors cursor-pointer shrink-0 ${
              saved
                ? "bg-amber-50 text-amber-600 border-amber-200"
                : "bg-white text-slate-400 hover:text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
            title={saved ? "Saved" : "Save Opportunity"}
            aria-label="Save Opportunity"
          >
            <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Badges / Meta row */}
        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-slate-600">
          <Badge variant="default" size="sm" className="bg-slate-100">
            <MapPin className="w-3 h-3 text-slate-500" />
            {opportunity.location}
          </Badge>
          <Badge variant="default" size="sm" className="bg-slate-100">
            {opportunity.type}
          </Badge>
          <Badge variant="default" size="sm" className="bg-slate-100">
            <Clock className="w-3 h-3 text-slate-500" />
            {opportunity.duration}
          </Badge>
          {opportunity.workArrangement && (
            <Badge variant="default" size="sm" className="bg-slate-100 font-medium">
              {opportunity.workArrangement}
            </Badge>
          )}
        </div>

        {/* Compensation & Deadline */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <Banknote className="w-3.5 h-3.5 text-emerald-600" />
            <span>{opportunity.stipend}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Deadline: <span className="font-semibold text-slate-700">{opportunity.deadline}</span></span>
          </div>
        </div>

        {/* Required Skills tags */}
        <div className="mt-4">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Skills Required:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {opportunity.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-lg bg-emerald-50/70 text-emerald-800 text-xs font-semibold border border-emerald-200/60"
              >
                {skill}
              </span>
            ))}
            {opportunity.niceToHaveSkills && opportunity.niceToHaveSkills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 text-xs border border-slate-200"
              >
                +{skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Skill Match Score & Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        {/* Match Percentage Pill */}
        <div className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 ${getMatchColor(opportunity.matchScore)}`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{opportunity.matchScore}% Skill Match</span>
        </div>

        {/* View Opportunity Action */}
        <Link
          href={`/opportunities/${opportunity.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-all"
        >
          <span>View Opportunity</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
