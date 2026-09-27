"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  ExternalLink,
  Building2,
  Sparkles,
  MapPin,
  Banknote
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { APPLICATIONS } from "@/data/mockData";

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Submitted",
    "Under Review",
    "Shortlisted",
    "Interview",
    "Accepted",
    "Rejected"
  ];

  const filteredApps = APPLICATIONS.filter((app) => {
    if (activeTab === "All") return true;
    return app.status.toLowerCase() === activeTab.toLowerCase();
  });

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "accepted":
        return <Badge variant="verified" size="md">Accepted 🎉</Badge>;
      case "interview":
        return <Badge variant="gold" size="md">Interview Scheduled</Badge>;
      case "shortlisted":
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">Shortlisted</span>;
      case "under review":
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">Under Review</span>;
      default:
        return <Badge variant="default" size="md">{status}</Badge>;
    }
  };

  const timelineSteps = ["Applied", "Under Review", "Shortlisted", "Interview", "Decision"];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                My Applications Tracker
              </h1>
              <Badge variant="verified" size="sm">
                Real-Time
              </Badge>
            </div>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Track the progress of your verified applications to Ethiopian tech companies and enterprises.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/20 transition-all"
            >
              <BriefcaseIcon className="w-4 h-4 text-emerald-200" />
              <span>Explore More Jobs</span>
            </Link>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {tabs.map((tab) => {
            const count = tab === "All" 
              ? APPLICATIONS.length 
              : APPLICATIONS.filter((a) => a.status.toLowerCase() === tab.toLowerCase()).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{tab}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeTab === tab ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-600"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Application Cards List */}
        <div className="space-y-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-xl font-bold text-slate-900">
                      {app.position}
                    </h2>
                    {getStatusBadge(app.status)}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-500">
                    <span className="font-bold text-emerald-700">{app.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {app.location}
                    </span>
                    <span>·</span>
                    <span>Applied on: {app.appliedDate}</span>
                    <span>·</span>
                    <span className="font-semibold text-slate-700">{app.stipend}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/opportunities/opp-1`}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl"
                  >
                    View Job Posting
                  </Link>
                </div>
              </div>

              {/* Visual Application Timeline */}
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Application Timeline:
                </span>
                
                <div className="overflow-x-auto pt-2 pb-1">
                  <div className="min-w-[500px] flex items-center justify-between relative">
                    {/* Background Bar */}
                    <div className="absolute top-4 left-6 right-6 h-0.5 bg-slate-200 -z-0" />

                    {timelineSteps.map((step, idx) => {
                      const isCompleted = idx + 1 < app.currentStage;
                      const isCurrent = idx + 1 === app.currentStage;

                      return (
                        <div key={step} className="relative z-10 flex flex-col items-center text-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              isCompleted
                                ? "bg-emerald-600 text-white shadow-xs"
                                : isCurrent
                                ? "bg-amber-500 text-slate-950 ring-4 ring-amber-100 font-extrabold shadow-sm"
                                : "bg-white text-slate-400 border border-slate-300"
                            }`}
                          >
                            {isCompleted ? "✓" : idx + 1}
                          </div>
                          <span className={`text-[11px] font-bold mt-2 ${
                            isCurrent ? "text-amber-800" : isCompleted ? "text-slate-800" : "text-slate-400"
                          }`}>
                            {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Next Step Note Box */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">
                    Next Step / Update:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed font-medium">
                    {app.nextStep}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {filteredApps.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <Send className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No applications under "{activeTab}"</h3>
              <p className="text-xs text-slate-500">Explore new opportunities in Ethiopia to submit your verified profile.</p>
              <button
                onClick={() => setActiveTab("All")}
                className="text-xs font-bold text-emerald-600 hover:underline"
              >
                View all applications
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
