"use client";

import React from "react";
import Link from "next/link";
import { 
  Award, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ChallengeCard({ challenge, isCompleted = false, userScore }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "beginner":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "intermediate":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "advanced":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${getDifficultyColor(challenge.difficulty)}`}>
              {challenge.difficulty}
            </span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {challenge.estimatedTime}
            </span>
          </div>

          {isCompleted ? (
            <Badge variant="verified" size="sm">
              Completed {userScore ? `(${userScore}/100)` : ""}
            </Badge>
          ) : (
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              {challenge.studentsAttempted} students
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-lg leading-snug">
          <Link href={`/challenges/${challenge.id}`}>
            {challenge.title}
          </Link>
        </h3>

        {/* Category */}
        <p className="text-xs font-semibold text-slate-500 mt-1">
          {challenge.category}
        </p>

        {/* Short Description */}
        <p className="text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
          {challenge.shortDescription}
        </p>

        {/* Skills Tested */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5">
            {challenge.skillsTested.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="text-xs text-slate-500 flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          <span>{challenge.successRate} pass rate</span>
        </div>

        <Link
          href={`/challenges/${challenge.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-all"
        >
          <span>{isCompleted ? "Review Submission" : "Start Challenge"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
