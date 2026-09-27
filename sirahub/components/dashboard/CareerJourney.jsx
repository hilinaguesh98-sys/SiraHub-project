"use client";

import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export function CareerJourney({ currentStep = 5 }) {
  const steps = [
    { id: 1, name: "Learn", desc: "Foundational university coursework" },
    { id: 2, name: "Practice", desc: "Hands-on coding exercises" },
    { id: 3, name: "Challenge", desc: "Real-world engineering challenges" },
    { id: 4, name: "Verify", desc: "Rigorous automated & peer review" },
    { id: 5, name: "Portfolio", desc: "Live verifiable student showcase" },
    { id: 6, name: "Match", desc: "Algorithmic skill fit with companies" },
    { id: 7, name: "Apply", desc: "Fast-track 1-click applications" },
    { id: 8, name: "Experience", desc: "Internship & junior employment" }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              SiraHub Career Progress Journey
            </h3>
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-300">
              Stage {currentStep} of 8
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track your transformation from academic coursework into verified industry talent.
          </p>
        </div>

        <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl self-start sm:self-auto flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Hilina is matching with 4 top Ethiopian tech employers</span>
        </div>
      </div>

      {/* Stepper Timeline */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[680px] grid grid-cols-8 gap-2 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-5 left-6 right-6 h-0.5 bg-slate-200 -z-0" />

          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                {/* Circle Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    isCompleted
                      ? "bg-emerald-600 text-white shadow-sm ring-4 ring-emerald-50"
                      : isCurrent
                      ? "bg-amber-500 text-slate-950 ring-4 ring-amber-100 animate-bounce-subtle shadow-md"
                      : "bg-white text-slate-400 border-2 border-slate-300"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>

                {/* Step Name */}
                <span
                  className={`mt-2.5 text-xs font-bold tracking-tight ${
                    isCurrent
                      ? "text-amber-800 font-extrabold"
                      : isCompleted
                      ? "text-slate-900"
                      : "text-slate-400"
                  }`}
                >
                  {step.name}
                </span>

                {/* Status indicator */}
                <span className="text-[10px] text-slate-500 mt-0.5 hidden md:block leading-tight line-clamp-1 px-1">
                  {isCompleted ? "Verified" : isCurrent ? "Active now" : "Upcoming"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
