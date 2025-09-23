import React from "react";
import { motion } from "framer-motion";

export default function Qualification() {
  const qualifications = [
    {
      title: "Matriculation",
      detail: "Marks: 965 (88.8%)",
      year: "2019",
    },
    {
      title: "FSc (Pre-Engineering)",
      detail: "Marks: 866 (78%)",
      year: "2021",
    },
    {
      title: "BS Computer Science",
      detail: "CGPA: 3.72",
      year: "2021-2025",
    },
    {
      title: "1-Year Training as MERN Stack",
      detail: "SMIT, Peshawar",
      year: "2025",
    },
  ];

  return (
    <section
      id="qualification"
      className="relative py-24 px-4 sm:px-6 lg:px-8 mt-12"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="  text-3xl md:text-4xl font-extrabold text-center mb-16
                   bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                   bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(59,130,246,0.5)]"
      >
        Qualifications
      </motion.h2>

      {/* Qualification Cards */}
      <div className=" mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {qualifications.map((qual, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 
                       shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400/30 
                       transition-all duration-300 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                           bg-clip-text text-transparent mb-2">
              {qual.title}
            </h3>
            <p className="text-slate-300 text-base">{qual.detail}</p>
            <span className="block text-slate-500 text-sm mt-2">{qual.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
