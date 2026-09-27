"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Download, 
  Share2, 
  Edit3, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Award, 
  Code2, 
  Languages, 
  Sparkles,
  Check,
  Building2
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/profile/ProjectCard";
import { EditProfileModal } from "@/components/profile/EditProfileModal";
import { CURRENT_STUDENT } from "@/data/mockData";

export default function StudentProfilePage() {
  const [student, setStudent] = useState(CURRENT_STUDENT);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadCV = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs relative">
          {/* Cover Banner */}
          <div className="h-44 sm:h-56 w-full relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-slate-900">
            <img
              src={student.coverImage}
              alt="Cover background"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="bg-white/90 backdrop-blur-xs text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-300 shadow-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified SiraHub Portfolio
              </span>
            </div>
          </div>

          {/* Profile Header Main */}
          <div className="px-6 sm:px-10 pb-8 relative pt-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 -mt-16 sm:-mt-20">
              {/* Avatar & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                <div className="relative">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover ring-4 ring-white shadow-xl bg-white"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-1.5 rounded-xl ring-2 ring-white shadow-md">
                    <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {student.name}
                    </h1>
                    <Badge variant="open" size="sm">
                      ● Open to Opportunities
                    </Badge>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-slate-700">
                    {student.headline}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-emerald-700">
                    {student.department} · {student.university} ({student.year})
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {student.location}
                  </p>
                </div>
              </div>

              {/* Actions: Edit, Share, Download CV */}
              <div className="flex flex-wrap items-center gap-2.5 no-print">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditOpen(true)}
                  icon={Edit3}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  icon={copied ? Check : Share2}
                >
                  {copied ? "Link Copied!" : "Share Profile"}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleDownloadCV}
                  icon={Download}
                >
                  Download CV
                </Button>
              </div>
            </div>

            {/* Proof of Skill Highlights Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Verified Skills
                </span>
                <span className="text-2xl font-black text-emerald-600 block mt-1">
                  {student.metrics.verifiedSkillsCount}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Challenges Passed
                </span>
                <span className="text-2xl font-black text-slate-900 block mt-1">
                  {student.metrics.completedChallengesCount}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Public Projects
                </span>
                <span className="text-2xl font-black text-slate-900 block mt-1">
                  {student.projects.length}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Portfolio Rank
                </span>
                <span className="text-sm font-extrabold text-amber-600 block mt-2">
                  Top 8% in Ethiopia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span>About Hilina</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {student.bio}
              </p>
            </div>

            {/* Verified Skills & All Skills */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    Verified Technical Skills
                  </h2>
                  <p className="text-xs text-slate-500">
                    Validated through SiraHub hands-on challenges and live GitHub repository audits.
                  </p>
                </div>
                <Link
                  href="/skills"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 no-print"
                >
                  Manage Skills →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {student.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      skill.status === "verified"
                        ? "bg-emerald-50/50 border-emerald-200/80 shadow-xs"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">
                        {skill.name}
                      </span>
                      {skill.status === "verified" ? (
                        <Badge variant="verified" size="sm">
                          Verified ({skill.score}/100)
                        </Badge>
                      ) : (
                        <Badge variant="progress" size="sm">
                          {skill.progress ? `${skill.progress}% in progress` : "Added"}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {skill.evidence || `Category: ${skill.category}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Projects Showcase */}
            <div id="projects" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Verified Software Projects</h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Real, functional software built by Hilina with verified source code on GitHub.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {student.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Completed Skill Challenges */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                Completed Skill Challenges
              </h2>
              <div className="space-y-3">
                {student.completedChallenges.map((chal) => (
                  <div
                    key={chal.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">
                          {chal.title}
                        </h4>
                        <Badge variant="verified" size="sm">
                          Verified
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Completed on {chal.completedDate} · Score: <span className="font-bold text-emerald-700">{chal.score}/{chal.maxScore}</span>
                      </p>
                      <p className="text-xs text-slate-600 mt-1 italic">
                        "{chal.feedback}"
                      </p>
                    </div>

                    <Link
                      href={`/challenges/${chal.id}`}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0 self-start sm:self-auto"
                    >
                      View Challenge Rubric →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Column (1 col) */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                Education
              </h3>
              <div className="space-y-4 divide-y divide-slate-100">
                {student.education.map((edu, idx) => (
                  <div key={edu.institution} className={idx > 0 ? "pt-4" : ""}>
                    <h4 className="font-bold text-slate-900 text-sm">{edu.institution}</h4>
                    <p className="text-xs text-emerald-700 font-semibold">{edu.degree}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{edu.period} · {edu.location}</p>
                    {edu.gpa && <p className="text-xs font-medium text-slate-700 mt-1">GPA: {edu.gpa}</p>}
                    <p className="text-[11px] text-slate-500 mt-1">{edu.highlights}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div id="certificates" className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-amber-500" />
                Credentials & Certificates
              </h3>
              <div className="space-y-3">
                {student.certificates.map((cert) => (
                  <div key={cert.title} className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <h4 className="font-bold text-slate-900 text-xs">{cert.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{cert.issuer} · {cert.issueDate}</p>
                    <span className="text-[10px] font-mono text-slate-400 block mt-1">ID: {cert.credentialId}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Languages className="w-5 h-5 text-blue-600" />
                Languages
              </h3>
              <div className="space-y-2.5">
                {student.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{lang.name}</span>
                    <span className="text-slate-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact / Inquiries Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 shadow-md space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                Interested in Hiring Hilina?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hilina is pre-screened with verified React and JavaScript skills, ready for 3-month summer internships or trainee software roles.
              </p>
              <div className="pt-2">
                <Link
                  href="/company"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  Contact Candidate on SiraHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        student={student}
        onSave={(updated) => setStudent(updated)}
      />
    </div>
  );
}

function FileCheck2(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
