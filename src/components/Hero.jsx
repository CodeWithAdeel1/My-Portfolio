import React from "react";
import { motion } from "framer-motion";
import myprofile from '../assets/images/portfolio.jpg'
export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Intro */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-4xl md:text-5xl font-extrabold leading-tight 
             bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 
             bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
>
  Junior MERN Stack Developer
</motion.h2>

        <p className="mt-4 text-slate-300">
          Passionate MERN developer trained at SMIT Peshawar. I focus on
          building performant, secure, and user-friendly applications.
        </p>
      </motion.div>

      {/* Profile + Skills */}
      <motion.div
        className="rounded-2xl p-6 bg-gradient-to-br from-slate-800/60 to-slate-700/40 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={myprofile}
          alt="Muhammad Adeel"
          className="rounded-full w-40 h-40 object-cover object-center mx-auto border-4 border-emerald-500 shadow-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-center">Tech Stack</h3>
        <div className="mt-4 grid grid-cols-3 gap-3">
         
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Git & GitHub",
            "Vercel/GitHub Pages",
          ].map((s) => (
            <div
              key={s}
              className="px-3 py-2 bg-slate-800/40 rounded-lg text-center text-sm hover:scale-105 transition"
            >
              {s}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
