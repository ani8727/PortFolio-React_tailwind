import React from "react";
import Typing from './Typing'

function Home() {
  return (
    <section id="home" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16">
      <div className="flex flex-col items-center gap-6">
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden glass-card shadow-lg flex items-center justify-center">
          <img src={'/photo.avif'} alt="hero" className="object-cover w-full h-full" />
        </div>

        <h2 className="hero-title text-3xl md:text-4xl font-extrabold text-center">Hi, I'm Aniket Gupta</h2>

        <p className="text-slate-300 max-w-2xl text-center">I'm a web developer specializing in building delightful digital experiences. I build responsive full-stack apps and enjoy learning new tools and patterns.</p>

        <div className="text-center text-lg text-slate-200">
          <Typing words={["Developer","Programmer","Coder"]} className="text-lg" />
        </div>

        <div className="flex space-x-4">
          <a href="#portfolio" className="btn-primary text-white px-4 py-2 rounded-md shadow-md">View Portfolio</a>
          <a href="#contact" className="text-slate-200 px-4 py-2 rounded-md border border-slate-700 glass-card">Contact Me</a>
        </div>

        <div className="mt-6 text-slate-400 text-sm text-center">
          <span className="font-medium text-slate-200">Skills:</span> React • Node • Tailwind • Java • DSA
        </div>
      </div>
    </section>
  );
}

export default Home;
