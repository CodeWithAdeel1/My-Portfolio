import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Hero />
        <Qualification />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
