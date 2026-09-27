"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Github, Globe, UploadCloud, FileText, CheckCircle2 } from "lucide-react";

export function ChallengeSubmissionModal({
  isOpen,
  onClose,
  challenge,
  onSubmitSuccess
}) {
  const [githubUrl, setGithubUrl] = useState("https://github.com/hilina-guesh/react-product-card");
  const [liveDemoUrl, setLiveDemoUrl] = useState("https://hilina-product-card.vercel.app");
  const [explanation, setExplanation] = useState(
    "Built using functional React components and Tailwind CSS. Implemented clean prop delegation, mobile-first responsiveness, and interactive cart count state with optimistic UI updates."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      if (onSubmitSuccess) {
        onSubmitSuccess({
          githubUrl,
          liveDemoUrl,
          explanation,
          score: 85
        });
      }
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Submit Skill Challenge Solution"
      subtitle={challenge?.title || "Prove your skills with real code"}
      maxWidth="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5 text-slate-900" />
            GitHub Repository URL *
          </label>
          <input
            type="url"
            required
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="https://github.com/username/project-repo"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <p className="text-[11px] text-slate-500 mt-1">
            Make sure your repository is public and includes a descriptive README.
          </p>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            Live Demo URL *
          </label>
          <input
            type="url"
            required
            value={liveDemoUrl}
            onChange={(e) => setLiveDemoUrl(e.target.value)}
            placeholder="https://your-demo.vercel.app or github pages"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <UploadCloud className="w-3.5 h-3.5 text-blue-600" />
            Screenshots & Visual Evidence
          </label>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-emerald-500 bg-slate-50/50 cursor-pointer transition-colors">
            <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1" />
            <p className="text-xs font-semibold text-slate-700">
              Drag and drop screenshots (Desktop & Mobile)
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">PNG, JPG up to 10MB</p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            Explanation & Architecture Decisions
          </label>
          <textarea
            rows={3}
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Describe your design patterns, responsive strategy, and any tradeoffs you made..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 leading-relaxed"
          />
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
          <Button variant="ghost" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="min-w-[150px]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Evaluating...
              </span>
            ) : (
              "Submit Challenge"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
