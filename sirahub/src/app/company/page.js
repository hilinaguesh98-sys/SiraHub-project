"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Briefcase, 
  Users, 
  Award, 
  CheckCircle2, 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  Sparkles, 
  Send, 
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Clock,
  Banknote,
  GraduationCap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { CURRENT_STUDENT, OTHER_STUDENTS, OPPORTUNITIES } from "@/data/mockData";

export default function CompanyPortalPage() {
  const [activeTab, setActiveTab] = useState("overview"); // overview, candidates, post
  const [candidateSearch, setCandidateSearch] = useState("");
  const [selectedUniFilter, setSelectedUniFilter] = useState("all");
  const [selectedSkillFilter, setSelectedSkillFilter] = useState("all");

  // Post Opportunity Form State
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("Internship");
  const [jobLocation, setJobLocation] = useState("Addis Ababa");
  const [jobArrangement, setJobArrangement] = useState("Hybrid");
  const [jobDuration, setJobDuration] = useState("3 months");
  const [jobStipend, setJobStipend] = useState("15,000 ETB / month");
  const [jobDeadline, setJobDeadline] = useState("November 10, 2026");
  const [jobSkills, setJobSkills] = useState("React, JavaScript, Git");
  const [jobPositions, setJobPositions] = useState("3");
  const [jobDescription, setJobDescription] = useState("");
  const [jobResponsibilities, setJobResponsibilities] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);

  const allCandidates = [CURRENT_STUDENT, ...OTHER_STUDENTS];

  const filteredCandidates = allCandidates.filter((cand) => {
    const matchesSearch =
      cand.name.toLowerCase().includes(candidateSearch.toLowerCase()) ||
      cand.department.toLowerCase().includes(candidateSearch.toLowerCase()) ||
      (cand.skills && cand.skills.some((s) => s.name.toLowerCase().includes(candidateSearch.toLowerCase()))) ||
      (cand.verifiedSkills && cand.verifiedSkills.some((s) => s.toLowerCase().includes(candidateSearch.toLowerCase())));

    const matchesUni =
      selectedUniFilter === "all" ||
      cand.university.toLowerCase().includes(selectedUniFilter.toLowerCase());

    const matchesSkill =
      selectedSkillFilter === "all" ||
      (cand.skills && cand.skills.some((s) => s.name.toLowerCase() === selectedSkillFilter.toLowerCase() && s.status === "verified")) ||
      (cand.verifiedSkills && cand.verifiedSkills.some((s) => s.toLowerCase() === selectedSkillFilter.toLowerCase()));

    return matchesSearch && matchesUni && matchesSkill;
  });

  const handlePublishJob = (e) => {
    e.preventDefault();
    setPostSuccess(true);
    setTimeout(() => {
      setPostSuccess(false);
      setActiveTab("overview");
      setJobTitle("");
      setJobDescription("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Company Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 border-r border-slate-800 p-4 shrink-0 hidden lg:flex flex-col justify-between min-h-[calc(100vh-4rem)]">
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-2 bg-slate-800/80 rounded-2xl border border-slate-700">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
              S
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-white truncate">Safaricom Ethiopia</h4>
              <p className="text-[11px] text-emerald-400">Employer Portal</p>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-emerald-600 text-white font-bold"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Company Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("candidates")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "candidates"
                  ? "bg-emerald-600 text-white font-bold"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Candidate Discovery</span>
            </button>
            <button
              onClick={() => setActiveTab("post")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "post"
                  ? "bg-emerald-600 text-white font-bold"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Post Opportunity</span>
            </button>
          </nav>
        </div>

        <div className="p-3 bg-slate-800/60 rounded-2xl border border-slate-700 text-xs space-y-1">
          <span className="font-bold text-white block">Ethiopian Universities</span>
          <p className="text-slate-400 text-[11px]">Direct integration with MU, AAU, BDU, Hawassa & ASTU.</p>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">
        {/* Mobile Tab Switcher */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
              activeTab === "overview" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("candidates")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
              activeTab === "candidates" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"
            }`}
          >
            Candidate Discovery
          </button>
          <button
            onClick={() => setActiveTab("post")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
              activeTab === "post" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"
            }`}
          >
            Post Opportunity
          </button>
        </div>

        {/* TAB 1: OVERVIEW DASHBOARD */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Employer Talent Portal
                  </h1>
                  <Badge variant="verified" size="sm">
                    Pre-Screened
                  </Badge>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Hire verified student engineers and designers without wading through resume fluff.
                </p>
              </div>

              <Button
                variant="primary"
                onClick={() => setActiveTab("post")}
                icon={Plus}
              >
                Post New Opportunity
              </Button>
            </div>

            {/* 4 Statistics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Active Opportunities
                </span>
                <span className="text-3xl font-black text-slate-900 block mt-2">6</span>
                <span className="text-xs text-emerald-600 font-semibold mt-1 block">3 Internships · 3 Junior</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Total Applications
                </span>
                <span className="text-3xl font-black text-slate-900 block mt-2">84</span>
                <span className="text-xs text-blue-600 font-semibold mt-1 block">+12 this week</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Shortlisted Candidates
                </span>
                <span className="text-3xl font-black text-slate-900 block mt-2">18</span>
                <span className="text-xs text-purple-600 font-semibold mt-1 block">Passed verified challenges</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Challenge Submissions
                </span>
                <span className="text-3xl font-black text-slate-900 block mt-2">42</span>
                <span className="text-xs text-amber-600 font-semibold mt-1 block">8 awaiting review</span>
              </div>
            </div>

            {/* Recommended Students Based on Verified Skills */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Recommended Verified Students
                  </h2>
                  <p className="text-xs text-slate-500">
                    Matched automatically to your Frontend & Mobile engineering requirements.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("candidates")}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  View All Candidates →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCandidates.slice(0, 3).map((student) => (
                  <div
                    key={student.id}
                    className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-3.5">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-500 shrink-0"
                        />
                        <div className="min-w-0">
                          <h3 className="font-bold text-slate-900 text-base flex items-center gap-1">
                            {student.name}
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          </h3>
                          <p className="text-xs text-emerald-700 font-semibold truncate">
                            {student.university}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate">
                            {student.department}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                          Verified Technical Skills:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {student.skills ? (
                            student.skills.filter(s => s.status === "verified").map((s) => (
                              <span key={s.name} className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                                ✓ {s.name}
                              </span>
                            ))
                          ) : (
                            student.verifiedSkills?.map((s) => (
                              <span key={s} className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                                ✓ {s}
                              </span>
                            ))
                          )}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                        <span>Projects: <strong className="text-slate-900">{student.projects?.length || student.projectsCount}</strong></span>
                        <span className="text-emerald-700 font-bold">{student.availability}</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/profile"
                        className="w-full text-center py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                      >
                        View Verified Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Company Postings */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Your Active Job Postings</h3>
              <div className="divide-y divide-slate-100">
                {OPPORTUNITIES.slice(0, 3).map((opp) => (
                  <div key={opp.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{opp.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {opp.location} · {opp.duration} · {opp.stipend}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
                        {opp.applicantsCount} Applicants
                      </span>
                      <Link
                        href={`/opportunities/${opp.id}`}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
                      >
                        Manage Listing →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CANDIDATE DISCOVERY */}
        {activeTab === "candidates" && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Find Students With Proven Skills
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Filter talented students across Mekelle University, Addis Ababa University, and nationwide Ethiopian institutions.
                </p>
              </div>

              {/* Candidate Search Bar */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={candidateSearch}
                  onChange={(e) => setCandidateSearch(e.target.value)}
                  placeholder="Search students by skill, university, department, project..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                    University:
                  </span>
                  {["all", "Mekelle", "Addis Ababa", "Bahir Dar", "Hawassa"].map((uni) => (
                    <button
                      key={uni}
                      onClick={() => setSelectedUniFilter(uni)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold cursor-pointer ${
                        selectedUniFilter === uni
                          ? "bg-slate-900 text-white font-bold"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {uni === "all" ? "All Universities" : uni}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                    Verified Skill:
                  </span>
                  {["all", "React", "Python", "Node.js", "Flutter", "Git"].map((sk) => (
                    <button
                      key={sk}
                      onClick={() => setSelectedSkillFilter(sk)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold cursor-pointer ${
                        selectedSkillFilter === sk
                          ? "bg-emerald-600 text-white font-bold"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {sk === "all" ? "All Skills" : sk}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Candidates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandidates.map((student) => (
                <div
                  key={student.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-500 shrink-0"
                      />
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900 text-base flex items-center gap-1">
                          {student.name}
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        </h3>
                        <p className="text-xs text-emerald-700 font-semibold truncate">
                          {student.university}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">
                          {student.department}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Verified Technical Skills:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {student.skills ? (
                          student.skills.filter(s => s.status === "verified").map((s) => (
                            <span key={s.name} className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                              ✓ {s.name}
                            </span>
                          ))
                        ) : (
                          student.verifiedSkills?.map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                              ✓ {s}
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                      <span>Projects: <strong className="text-slate-900">{student.projects?.length || student.projectsCount}</strong></span>
                      <span className="text-emerald-700 font-bold">{student.availability}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <Link
                      href="/profile"
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                    >
                      View Profile & Evidence
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: POST OPPORTUNITY */}
        {activeTab === "post" && (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Post an Opportunity for Ethiopian Students
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Reach pre-screened students with verified code challenges across Ethiopia.
              </p>
            </div>

            {postSuccess && (
              <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-800 font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Opportunity published successfully to SiraHub Marketplace!
              </div>
            )}

            <form onSubmit={handlePublishJob} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Frontend Development Intern (React)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Opportunity Type
                  </label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Internship">Internship</option>
                    <option value="Junior Job">Junior Job</option>
                    <option value="Part-Time Trainee">Part-Time Trainee</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Arrangement
                  </label>
                  <select
                    value={jobArrangement}
                    onChange={(e) => setJobArrangement(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                    placeholder="e.g. Addis Ababa or Mekelle"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={jobDuration}
                    onChange={(e) => setJobDuration(e.target.value)}
                    placeholder="e.g. 3 months"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Stipend / Salary (in ETB) *
                  </label>
                  <input
                    type="text"
                    value={jobStipend}
                    onChange={(e) => setJobStipend(e.target.value)}
                    placeholder="e.g. 15,000 ETB / month"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Application Deadline *
                  </label>
                  <input
                    type="text"
                    value={jobDeadline}
                    onChange={(e) => setJobDeadline(e.target.value)}
                    placeholder="e.g. November 10, 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Required Verified Skills (Comma-separated) *
                  </label>
                  <input
                    type="text"
                    required
                    value={jobSkills}
                    onChange={(e) => setJobSkills(e.target.value)}
                    placeholder="e.g. React, JavaScript, Git"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Job Description *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Describe the team, product, and mission..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Responsibilities
                  </label>
                  <textarea
                    rows={3}
                    value={jobResponsibilities}
                    onChange={(e) => setJobResponsibilities(e.target.value)}
                    placeholder="List core duties..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <Button variant="outline" type="button" onClick={() => setActiveTab("overview")}>
                  Save Draft
                </Button>
                <Button variant="primary" type="submit" size="lg">
                  Publish Opportunity
                </Button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
