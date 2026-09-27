"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Plus, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Search,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Modal } from "@/components/ui/Modal";
import { CURRENT_STUDENT, SKILL_CHALLENGES } from "@/data/mockData";

export default function MySkillsPage() {
  const [skills, setSkills] = useState(CURRENT_STUDENT.skills);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillCategory, setNewSkillCategory] = useState("Frontend");

  const verifiedSkills = skills.filter((s) => s.status === "verified");
  const inProgressSkills = skills.filter((s) => s.status === "in-progress");
  const addedSkills = skills.filter((s) => s.status === "added");

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    const newSkill = {
      name: newSkillName.trim(),
      category: newSkillCategory,
      status: "added",
      progress: 0
    };

    setSkills([...skills, newSkill]);
    setNewSkillName("");
    setIsAddModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                My Skills & Verifications
              </h1>
              <Badge variant="verified" size="sm">
                Proof-First
              </Badge>
            </div>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              "Don't just say you have a skill. Show what you can build." Every verified badge is backed by real engineering challenges and code commits.
            </p>
          </div>

          <Button
            variant="primary"
            onClick={() => setIsAddModalOpen(true)}
            icon={Plus}
          >
            Add New Skill
          </Button>
        </div>

        {/* 1. Verified Skills Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Verified Skills ({verifiedSkills.length})
                </h2>
                <p className="text-xs text-slate-500">
                  Backed by completed challenges and visible to hiring companies.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {verifiedSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-5 rounded-2xl border border-emerald-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {skill.category}
                      </p>
                    </div>
                    <Badge variant="verified" size="sm">
                      Verified {skill.score ? `(${skill.score}%)` : ""}
                    </Badge>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100">
                    <span className="font-semibold text-emerald-800 block">Verified Evidence:</span>
                    {skill.evidence || "Completed SiraHub Engineering Assessment"}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Verified {skill.verifiedDate || "Recently"}</span>
                  <Link
                    href="/profile"
                    className="font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    View on Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. In Progress Skills */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                In Progress ({inProgressSkills.length})
              </h2>
              <p className="text-xs text-slate-500">
                Currently taking practical challenges to earn verification badges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inProgressSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {skill.category}
                      </p>
                    </div>
                    <Badge variant="progress" size="sm">
                      {skill.progress}% Progress
                    </Badge>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Verification Progress</span>
                      <span className="font-bold text-slate-900">{skill.progress}%</span>
                    </div>
                    <ProgressBar value={skill.progress} variant="gold" size="sm" />
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Active Challenge</span>
                  <Link
                    href={`/challenges`}
                    className="font-bold text-amber-800 hover:text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-lg"
                  >
                    Continue Challenge →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Added Skills */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-bold">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Added Skills ({addedSkills.length})
              </h2>
              <p className="text-xs text-slate-500">
                Self-reported skills. Start a verification challenge to prove your capability to employers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addedSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {skill.category}
                      </p>
                    </div>
                    <Badge variant="default" size="sm">
                      Unverified
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Take an interactive skill challenge to unlock verified status and increase employer match rate by 4x.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Needs Proof</span>
                  <Link
                    href="/challenges"
                    className="font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                  >
                    Verify This Skill →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Add New Skill Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Technical Skill"
        subtitle="Add a skill to your profile and begin the verification journey"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleAddSkill} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Skill Name *
            </label>
            <input
              type="text"
              required
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              placeholder="e.g. Django, Flutter, Docker, GraphQL"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Category
            </label>
            <select
              value={newSkillCategory}
              onChange={(e) => setNewSkillCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="Frontend">Frontend Development</option>
              <option value="Backend">Backend Development</option>
              <option value="Mobile">Mobile App Development</option>
              <option value="Database">Database & SQL</option>
              <option value="Design">UI/UX Design</option>
              <option value="DevOps">DevOps & Cloud</option>
              <option value="Data Science">Data Science & AI</option>
            </select>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <Button variant="ghost" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add Skill
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
