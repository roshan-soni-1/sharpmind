import React, { useEffect, useState } from "react";
import { ArrowLeft, Github, Terminal, Zap, Calendar, Star } from "lucide-react";

const About = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    document.title = "sharpmind";
  }, []);
  
  useEffect(() => {
    fetch("https://api.github.com/repos/roshan-soni-1/sharpmind")
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
      })
      .catch((err) => {
        console.error("Failed to fetch stars:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <navbar className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-4 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button className="flex text-black dark:text-white items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        onClick={() => {history.back() }}
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Back
        </button>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          DevLog #01
        </span>
      </navbar>

      <article className="max-w-2xl mx-auto p-6 pb-32">
        <header className="mb-10">

          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            Building the Ultimate Minimalist Mental Math Trainer
          </h1>

          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-8">
            <a
              href="https://github.com/roshan-soni-1/sharpmind"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:scale-105 transition"
            >
              <Github className="w-5 h-5" />
            </a>
          
            <a
              href="https://github.com/roshan-soni-1/sharpmind/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition group"
            >
              <Star className="w-4 h-4 text-yellow-500 group-hover:fill-yellow-500 transition" />
              <span className="font-bold text-slate-900 dark:text-white">
                {stars ?? "—"}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">
                stars
              </span>
            </a>
          </div>
        </header>

        <div className="prose dark:prose-invert prose-slate max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            I built <strong>Mind Calculation</strong> because I wanted a way to train my brain without distractions. Most math apps today are cluttered with ads or require lengthy sign-up processes. I wanted something pure, fast, and accessible.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 mt-8">
            The Tech Stack
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            As a developer, I chose a modern stack to ensure performance on every device:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <TechCard 
              icon={<Zap className="text-yellow-500" />}
              title="Vite + React"
              desc="For instant load times and a smooth component-based architecture."
            />
            <TechCard 
              icon={<Terminal className="text-cyan-500" />}
              title="Tailwind CSS v4"
              desc="Utilizing the latest engine for zero-runtime styling overhead."
            />
          </div>

          <blockquote className="border-l-4 border-orange-500 pl-4 py-1 my-8 bg-slate-50 dark:bg-slate-800/50 italic text-slate-700 dark:text-slate-300 rounded-r-lg">
            "The goal was simple: No logins. No databases. Just pure math and local persistence."
          </blockquote>
        </div>

        <div className="mt-12 bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
            About the Author
          </h4>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm text-3xl overflow-hidden">
              <img 
                className="rounded-full w-full h-full object-cover" 
                src="https://avatars.githubusercontent.com/u/157717968?v=4"
                alt="Roshan Soni"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Roshan Soni
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                Full-stack developer passionate about building clean, high-performance web applications.
              </p>
              
              <a 
                href="https://github.com/roshan-soni-1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
              >
                <Github size={16} />
                Follow on GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const TechCard = ({ icon, title, desc }) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl flex items-start gap-3 shadow-sm">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-slate-800 dark:text-white text-sm">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
    </div>
  </div>
);

export default About;