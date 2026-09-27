"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Briefcase, 
  User, 
  Building2, 
  FolderGit2, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  MapPin,
  ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { 
  OPPORTUNITIES, 
  CURRENT_STUDENT, 
  OTHER_STUDENTS, 
  TRUSTED_COMPANIES, 
  SKILL_CHALLENGES 
} from "@/data/mockData";

export default function GlobalSearchPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Opportunities", "Students", "Companies", "Projects", "Skills"];

  const allStudents = [CURRENT_STUDENT, ...OTHER_STUDENTS];
  const allProjects = CURRENT_STUDENT.projects;

  // Filter logic
  const filteredOpps = OPPORTUNITIES.filter((o) =>
    o.title.toLowerCase().includes(query.toLowerCase()) ||
    o.company.toLowerCase().includes(query.toLowerCase()) ||
    o.requiredSkills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredStudents = allStudents.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.department.toLowerCase().includes(query.toLowerCase()) ||
    s.university.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCompanies = TRUSTED_COMPANIES.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.sector.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = allProjects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const allSkills = [
    { name: "React", category: "Frontend", verifiedInEthiopia: 480 },
    { name: "JavaScript", category: "Programming", verifiedInEthiopia: 650 },
    { name: "Python", category: "Backend & AI", verifiedInEthiopia: 520 },
    { name: "Git & GitHub", category: "Tools", verifiedInEthiopia: 710 },
    { name: "SQL", category: "Database", verifiedInEthiopia: 380 },
    { name: "UI/UX Design", category: "Design", verifiedInEthiopia: 290 },
    { name: "Flutter", category: "Mobile", verifiedInEthiopia: 240 }
  ];

  const filteredSkills = allSkills.filter((sk) =>
    sk.name.toLowerCase().includes(query.toLowerCase()) ||
    sk.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Search Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Global Platform Directory
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Search verified students, opportunities, companies, projects, and skills across Ethiopia.
            </p>
          </div>

          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search students, opportunities, companies, projects and skills..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Results Container */}
        <div className="space-y-8">
          {/* Opportunities Section */}
          {(activeTab === "All" || activeTab === "Opportunities") && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                Opportunities ({filteredOpps.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredOpps.map((opp) => (
                  <Link
                    key={opp.id}
                    href={`/opportunities/${opp.id}`}
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex items-start justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm hover:text-emerald-700">
                        {opp.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{opp.company} · {opp.location}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="verified" size="sm">{opp.matchScore}% Match</Badge>
                        <span className="text-[11px] font-semibold text-slate-700">{opp.stipend}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Students Section */}
          {(activeTab === "All" || activeTab === "Students") && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Verified Students ({filteredStudents.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredStudents.map((s) => (
                  <Link
                    key={s.id}
                    href="/profile"
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex items-center gap-3"
                  >
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="w-12 h-12 rounded-xl object-cover ring-1 ring-emerald-500 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 text-xs truncate flex items-center gap-1">
                        {s.name}
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate">{s.university}</p>
                      <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">{s.availability}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Companies Section */}
          {(activeTab === "All" || activeTab === "Companies") && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                Partner Companies ({filteredCompanies.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredCompanies.map((c) => (
                  <Link
                    key={c.name}
                    href="/company"
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
                  >
                    <h4 className="font-bold text-slate-900 text-sm">{c.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{c.sector}</p>
                    <span className="text-[11px] text-emerald-600 font-bold block mt-2">
                      {c.verifiedHires} students hired
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {(activeTab === "All" || activeTab === "Projects") && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-purple-600" />
                Verified Student Projects ({filteredProjects.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProjects.map((p) => (
                  <div key={p.id} className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm">{p.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-slate-100 text-[10px] rounded font-semibold text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {(activeTab === "All" || activeTab === "Skills") && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                Skill Challenges & Badges ({filteredSkills.length})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredSkills.map((sk) => (
                  <Link
                    key={sk.name}
                    href="/challenges"
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
                  >
                    <h4 className="font-bold text-slate-900 text-sm">{sk.name}</h4>
                    <p className="text-xs text-slate-500">{sk.category}</p>
                    <span className="text-[11px] text-emerald-700 font-bold block mt-2">
                      {sk.verifiedInEthiopia} verified students
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
