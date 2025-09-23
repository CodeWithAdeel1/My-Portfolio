import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf"
export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
      <div>
      <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-3xl md:text-4xl font-extrabold tracking-tight 
             bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
             bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(59,130,246,0.5)]"
>
  Muhammad Adeel
</motion.h1>
        <p className="text-sm text-slate-400 mt-1">
          MERN Stack Developer • Open to Remote Internships
        </p>
      </div>

      <nav className="flex items-center space-x-4 mt-4 md:mt-0">
        <a
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition"
          href={resume}
          download
        >
          <Download size={16} /> Download CV
        </a>
        <a href="mailto:codewithadeel1@gmail.com" className="p-2 hover:bg-slate-800/30 rounded-md">
          <Mail size={18} />
        </a>
        <a href="https://github.com/CodeWithAdeel1" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-800/30 rounded-md">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/muhammad-adeel-7a706a2b1" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-800/30 rounded-md">
          <Linkedin size={18} />
        </a>
      </nav>
    </header>
  );
}
