"use client";

import React from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  CheckCircle2, 
  Sparkles, 
  Award, 
  ArrowRight, 
  AlertCircle,
  FolderPlus,
  User
} from "lucide-react";

export function ChallengeResultModal({
  isOpen,
  onClose,
  challenge,
  score = 85
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Challenge Evaluation Report"
      subtitle="Automated & peer code verification results"
      maxWidth="max-w-xl"
    >
      <div className="space-y-6">
        {/* Score Banner */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-2xl p-6 text-center relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-bold border border-emerald-500/30 mb-3">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Challenge Completed & Verified</span>
          </div>

          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-black tracking-tight text-white">{score}</span>
            <span className="text-xl font-bold text-emerald-300">/100</span>
          </div>

          <p className="text-xs text-emerald-200 mt-2 font-medium">
            Status: Passed & Verified for Hilina Guesh (Mekelle University)
          </p>
        </div>

        {/* Skills Demonstrated Section */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Skills Demonstrated & Verified:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">React</span>
              <Badge variant="verified" size="sm">Verified</Badge>
            </div>
            <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Responsive Design</span>
              <Badge variant="verified" size="sm">Verified</Badge>
            </div>
            <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Component Design</span>
              <Badge variant="verified" size="sm">Verified</Badge>
            </div>
          </div>
        </div>

        {/* Strengths & Improvements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Strengths */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h5 className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Verified Strengths
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Component structure & clean decoupling
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Responsive mobile implementation
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Clean UI & Ethiopian Birr price formatting
              </li>
            </ul>
          </div>

          {/* Areas to improve */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h5 className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Areas to Improve
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Accessibility (add ARIA live regions)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Code organization into separate hook files
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
          <Link
            href="/profile"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
          >
            <User className="w-4 h-4 text-slate-500" />
            View Profile
          </Link>
          <Link
            href="/profile"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-700/20"
          >
            <FolderPlus className="w-4 h-4 text-emerald-200" />
            Add to Portfolio
          </Link>
        </div>
      </div>
    </Modal>
  );
}
