"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { 
  Award, 
  Clock, 
  Users, 
  CheckCircle2, 
  Github, 
  Globe, 
  UploadCloud, 
  FileText, 
  ArrowLeft, 
  ShieldCheck, 
  Check, 
  AlertCircle,
  FolderPlus,
  User,
  Sparkles,
  Terminal
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SKILL_CHALLENGES } from "@/data/mockData";

export default function ChallengeDetailPage({ params }) {
  // Unwrap Next.js App router params
  const resolvedParams = use(params);
  const challengeId = resolvedParams?.id || "chal-1";
  const challenge = SKILL_CHALLENGES.find((c) => c.id === challengeId) || SKILL_CHALLENGES[0];

  // Submission state
  const [githubUrl, setGithubUrl] = useState("https://github.com/hilina-guesh/react-product-card");
  const [liveDemoUrl, setLiveDemoUrl] = useState("https://hilina-product-card.vercel.app");
  const [explanation, setExplanation] = useState(
    "Built using reusable React functional components and Tailwind CSS. Structured with mobile-first CSS Grid, hover elevation, and an interactive stateful 'Add to Cart' button with Ethiopian Birr pricing."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setEvaluationResult({
        title: "Challenge Completed",
        score: 85,
        maxScore: 100,
        skillsDemonstrated: [
          { name: "React", status: "Verified" },
          { name: "Responsive Design", status: "Verified" },
          { name: "Component Design", status: "Verified" }
        ],
        strengths: [
          "Component structure & clean decoupling",
          "Responsive mobile implementation (320px - 1440px)",
          "Clean UI & Ethiopian Birr currency formatting"
        ],
        areasToImprove: [
          "Accessibility (add aria-labels to icon buttons)",
          "Code organization (extract constants into separate files)"
        ]
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back Link */}
        <div>
          <Link
            href="/challenges"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Skill Challenges
          </Link>
        </div>

        {/* Top Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              {challenge.difficulty}
            </span>
            <Badge variant="default" size="sm">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Estimated: {challenge.estimatedTime}
            </Badge>
            <Badge variant="default" size="sm">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              {challenge.studentsAttempted} students attempted
            </Badge>
            <Badge variant="verified" size="sm">
              Pass Rate: {challenge.successRate}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {challenge.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            {challenge.longDescription || challenge.shortDescription}
          </p>

          {/* Skills Tested */}
          <div className="pt-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Skills Tested in this Challenge:
            </span>
            <div className="flex flex-wrap gap-2">
              {challenge.skillsTested.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/70"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements & Rubric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Requirements */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Challenge Requirements
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {challenge.requirements ? (
                challenge.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" />
                    <span>Responsive design that adapts from 320px mobile to desktop.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" />
                    <span>Reusable component structure with clean props.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" />
                    <span>Proper component structure and clean modern CSS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" />
                    <span>Functional interaction (hover states, click triggers).</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Starter snippet / Deliverables */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-slate-700" />
              Starter Component Template
            </h2>
            <div className="bg-slate-950 text-slate-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
              <pre>{challenge.sampleCode || `// Starter React Component
export function ProductCard({ title, priceETB, image }) {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="card rounded-2xl border p-4">
      {/* Implement responsive card with Birr price */}
    </div>
  );
}`}</pre>
            </div>
            <p className="text-xs text-slate-500">
              You can build this in any React starter (Next.js or Vite) and deploy to Vercel or GitHub Pages.
            </p>
          </div>
        </div>

        {/* RESULTS SECTION (If Evaluated) */}
        {evaluationResult ? (
          <div className="bg-white rounded-3xl border-2 border-emerald-500 p-6 sm:p-8 shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
            {/* Top Score Banner */}
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-950 text-white rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/70 text-emerald-200 text-xs font-bold mb-3 border border-emerald-500/40">
                <Award className="w-4 h-4 text-amber-300" />
                <span>{evaluationResult.title}</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-black text-white">{evaluationResult.score}</span>
                <span className="text-xl font-bold text-emerald-300">/{evaluationResult.maxScore}</span>
              </div>
              <p className="text-xs text-emerald-200 mt-2 font-semibold">
                Congratulations Hilina! Verification badges have been minted to your public portfolio.
              </p>
            </div>

            {/* Skills Demonstrated */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Skills Demonstrated:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {evaluationResult.skillsDemonstrated.map((s) => (
                  <div key={s.name} className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-800">{s.name}</span>
                    <Badge variant="verified" size="sm">Verified</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Strengths
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {evaluationResult.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Areas to Improve
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {evaluationResult.areasToImprove.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
              <Link
                href="/profile"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
              >
                <User className="w-4 h-4 text-slate-500" />
                View Profile
              </Link>
              <Link
                href="/profile#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-700/20"
              >
                <FolderPlus className="w-4 h-4 text-emerald-200" />
                Add to Portfolio
              </Link>
            </div>
          </div>
        ) : (
          /* SUBMISSION FORM */
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-emerald-600" />
                Submit Your Solution
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Provide your code repository and live deployment for peer and automated review.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Github className="w-4 h-4 text-slate-900" />
                  GitHub Repository URL *
                </label>
                <input
                  type="url"
                  required
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/react-product-card"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  Live Demo URL *
                </label>
                <input
                  type="url"
                  required
                  value={liveDemoUrl}
                  onChange={(e) => setLiveDemoUrl(e.target.value)}
                  placeholder="https://your-product-card.vercel.app"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <UploadCloud className="w-4 h-4 text-blue-600" />
                  Screenshots & Media
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center bg-slate-50/50 hover:border-emerald-500 cursor-pointer transition-colors">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-slate-700">
                    Upload desktop and mobile responsive screenshots
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    PNG, JPG, or GIF up to 10MB
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-600" />
                  Explanation & Architecture Decisions
                </label>
                <textarea
                  rows={4}
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Describe your component structure, responsive strategy, and key decisions..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Evaluating Solution...
                    </span>
                  ) : (
                    "Submit Challenge"
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
