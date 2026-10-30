import React from "react";
import { Link } from "react-router";
import technologies from "../dummy/technologies.json";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="#home" className="text-2xl font-bold tracking-tight">
          Anand<span className="text-cyan-400">.dev</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#home" className="transition hover:text-cyan-400">
            Home
          </a>
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>
          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/50 px-5 py-2.5 text-sm font-medium transition hover:bg-cyan-400 hover:text-black"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-10"
      >
        <div className="absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            MERN Stack Developer
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Hi, I'm Anand Chauhan
            I Builds
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modern Web Apps.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Frontend-focused Full Stack Developer specializing in React.js,
            Next.js, JavaScript, and TypeScript. I build responsive, scalable,
            and user-friendly web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 transition hover:border-cyan-400/50"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-5 w-5 object-contain"
                  loading="lazy"
                />

                <span className="text-sm text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-[#101624] p-6 shadow-2xl sm:p-8">
            <div className="flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto text-xs text-gray-500">
                developer.jsx
              </span>
            </div>

            <div className="py-8 font-mono text-sm leading-8 sm:text-base">
              <p className="text-purple-400">const developer = {"{"}</p>
              <p className="pl-5 text-gray-300">
                name: <span className="text-green-300">"Anand Chauhan"</span>,
              </p>
              <p className="pl-5 text-gray-300">
                role: <span className="text-green-300">"Full Stack Dev"</span>,
              </p>
              <p className="pl-5 text-gray-300">
                stack: <span className="text-green-300">"MERN"</span>,
              </p>
              <p className="pl-5 text-gray-300">
                passion: <span className="text-green-300">"Building"</span>,
              </p>
              <p className="pl-5 text-gray-300">
                learning: <span className="text-green-300">"Every day"</span>
              </p>
              <p className="text-purple-400">{"}"}</p>
              <p className="mt-5 text-gray-500">
                // Turning ideas into reality.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
              <p className="text-sm text-gray-400">Current focus</p>
              <p className="mt-1 font-semibold text-cyan-300">
                Building scalable web applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-500">
        Designed & built with React and Tailwind CSS.
      </footer>
    </main>
  );
};

export default Home;
