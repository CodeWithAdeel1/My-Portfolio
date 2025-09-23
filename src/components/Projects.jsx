import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h3 className="text-2xl font-bold">Projects</h3>
      <p className="mt-2 text-slate-400">
        A selection of projects that demonstrate my MERN and frontend skills.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} project={p} index={idx} />
        ))}
      </div>
    </section>
  );
}
