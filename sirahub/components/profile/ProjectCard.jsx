"use client";

import React from "react";
import { Github, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all duration-200 flex flex-col group">
      {/* Project Image */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.verified && (
          <div className="absolute top-3 left-3">
            <Badge variant="verified" size="sm" className="bg-white/95 backdrop-blur-xs shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Project
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-emerald-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Verified by: {project.verifiedBy || "SiraHub Verification Review"} · {project.date}
          </p>

          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Code</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
            <span>{project.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
