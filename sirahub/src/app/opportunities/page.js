"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Search, 
  Filter, 
  MapPin, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  Layers,
  X
} from "lucide-react";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Badge } from "@/components/ui/Badge";
import { OPPORTUNITIES } from "@/data/mockData";

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedArrangement, setSelectedArrangement] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [savedIds, setSavedIds] = useState([]);

  const types = ["all", "Internship", "Junior Job"];
  const arrangements = ["all", "Remote", "On-site", "Hybrid"];
  const locations = ["all", "Addis Ababa", "Mekelle", "Bahir Dar", "Hawassa"];
  const popularSkills = ["all", "React", "JavaScript", "Python", "SQL", "Git", "UI Design"];

  const handleToggleSave = (id) => {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((item) => item !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  };

  const filteredOpps = OPPORTUNITIES.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.requiredSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType =
      selectedType === "all" || opp.type.toLowerCase() === selectedType.toLowerCase();

    const matchesArrangement =
      selectedArrangement === "all" ||
      (opp.workArrangement && opp.workArrangement.toLowerCase() === selectedArrangement.toLowerCase());

    const matchesLocation =
      selectedLocation === "all" || opp.location.toLowerCase().includes(selectedLocation.toLowerCase());

    const matchesSkill =
      selectedSkill === "all" ||
      opp.requiredSkills.some((s) => s.toLowerCase() === selectedSkill.toLowerCase());

    return matchesSearch && matchesType && matchesArrangement && matchesLocation && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Find Opportunities That Match Your Skills
                </h1>
                <Badge variant="verified" size="sm">
                  Verified Only
                </Badge>
              </div>
              <p className="text-sm text-slate-500 mt-1 max-w-2xl">
                Browse pre-screened internships and junior roles from leading Ethiopian technology startups, telecom leaders, and banks.
              </p>
            </div>

            <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl flex items-center gap-2 self-start md:self-auto">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Hilina has 4 high-match opportunities (80%+)</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="pt-2">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs, internships, skills (e.g. React, Python, Safaricom, ArifPay)..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Filters Bar */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
            {/* Type Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                Type:
              </span>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedType === type
                      ? "bg-slate-900 text-white font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {type === "all" ? "All" : type}
                </button>
              ))}
            </div>

            {/* Arrangement Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                Mode:
              </span>
              {arrangements.map((arr) => (
                <button
                  key={arr}
                  onClick={() => setSelectedArrangement(arr)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedArrangement === arr
                      ? "bg-emerald-600 text-white font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {arr === "all" ? "All" : arr}
                </button>
              ))}
            </div>

            {/* Location Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                City:
              </span>
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedLocation === loc
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {loc === "all" ? "All" : loc}
                </button>
              ))}
            </div>

            {/* Reset Filters */}
            {(selectedType !== "all" || selectedArrangement !== "all" || selectedLocation !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedType("all");
                  setSelectedArrangement("all");
                  setSelectedLocation("all");
                  setSearchQuery("");
                }}
                className="ml-auto text-xs text-rose-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-900">{filteredOpps.length}</strong> opportunities in Ethiopia
            </span>
            <span className="text-emerald-700 font-semibold">Compensation shown in Ethiopian Birr (ETB)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpps.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
                onSave={handleToggleSave}
                isSaved={savedIds.includes(opp.id)}
              />
            ))}
          </div>

          {filteredOpps.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No opportunities matched your filters</h3>
              <p className="text-xs text-slate-500">Try clearing one or more filters to view all Ethiopian openings.</p>
              <button
                onClick={() => {
                  setSelectedType("all");
                  setSelectedArrangement("all");
                  setSelectedLocation("all");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-emerald-600 hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
