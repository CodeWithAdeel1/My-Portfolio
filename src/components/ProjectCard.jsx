import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden shadow-lg bg-slate-800/40 hover:scale-[1.02] transition relative"
    >
      {/* Project Screenshot */}
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="p-4 flex flex-col justify-between h-52">
        <div>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-emerald-600/20 text-emerald-300">
            {project.label}
          </span>
          <h4 className="mt-2 text-lg font-semibold">{project.title}</h4>
          <p className="mt-1 text-slate-300 text-sm">{project.desc}</p>
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <a href={project.github} target="_blank" rel="noreferrer" className="underline">
            Source
          </a>
          {project.live !== "-" ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="underline">
              Live
            </a>
          ) : (
            <span className="text-slate-600">No demo</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
