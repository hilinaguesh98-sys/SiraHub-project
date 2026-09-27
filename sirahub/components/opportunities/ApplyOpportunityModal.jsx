"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  CheckCircle2, 
  FileCheck, 
  Send, 
  Sparkles, 
  Building2, 
  ShieldCheck,
  Check
} from "lucide-react";
import { CURRENT_STUDENT } from "@/data/mockData";

export function ApplyOpportunityModal({
  isOpen,
  onClose,
  opportunity,
  onApplySuccess
}) {
  const [coverNote, setCoverNote] = useState(
    `Dear Hiring Team at ${opportunity?.company || "Company"},\n\nI am excited to apply for the ${opportunity?.title || "role"}. My verified SiraHub portfolio highlights my hands-on React and frontend engineering projects at Mekelle University, including a responsive Ethiopian e-commerce portal and verified skills in JavaScript and Git.`
  );
  const [attachVerifiedCV, setAttachVerifiedCV] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onApplySuccess) {
        onApplySuccess(opportunity);
      }
    }, 1200);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={submitted ? "Application Submitted!" : "Apply with SiraHub Verified Portfolio"}
      subtitle={opportunity ? `${opportunity.title} · ${opportunity.company}` : ""}
      maxWidth="max-w-xl"
    >
      {submitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Application Transmitted!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
              Your application with <span className="font-bold text-slate-900">{CURRENT_STUDENT.metrics.verifiedSkillsCount} verified skills</span> and live project links has been sent directly to the talent team at <span className="font-bold text-slate-900">{opportunity?.company}</span>.
            </p>
          </div>
          <div className="pt-4 flex justify-center gap-3">
            <Button variant="primary" onClick={handleClose}>
              Done & Return
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Profile Preview Strip */}
          <div className="p-3.5 bg-emerald-50/60 border border-emerald-200/80 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={CURRENT_STUDENT.avatar}
                alt={CURRENT_STUDENT.name}
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500"
              />
              <div>
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  {CURRENT_STUDENT.name}
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </p>
                <p className="text-[11px] text-slate-600">
                  {CURRENT_STUDENT.department} · {CURRENT_STUDENT.university}
                </p>
              </div>
            </div>
            <Badge variant="verified" size="sm">
              {opportunity?.matchScore || 85}% Skill Match
            </Badge>
          </div>

          {/* Verified Evidence Checkbox */}
          <div className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50 space-y-2">
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="attachVerified"
                checked={attachVerifiedCV}
                onChange={(e) => setAttachVerifiedCV(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="attachVerified" className="text-xs text-slate-700 cursor-pointer">
                <span className="font-bold text-slate-900 block">
                  Include SiraHub Verified Evidence Ledger
                </span>
                Includes live links to your React Product Card challenge solution, GitHub code commits, and Mekelle University verification.
              </label>
            </div>
          </div>

          {/* Cover note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Brief Note to Recruiter
            </label>
            <textarea
              rows={4}
              value={coverNote}
              onChange={(e) => setCoverNote(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <Button variant="ghost" onClick={handleClose} disabled={isSubmitting}>
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
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5" /> Submit Application
                </span>
              )}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
