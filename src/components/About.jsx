import React from "react";

function About() {
  return (
    <div
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text-slate-200"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-slate-100">About</h1>
        <p className="text-slate-300">
          Hello, I'm Aniket Gupta — a final-year Software Engineering student and
          a passionate Full Stack Developer with strong expertise in Java,
          Spring Boot, React.js, and Data Structures & Algorithms. I enjoy
          building scalable backend systems, clean user interfaces, and
          real-world applications that solve meaningful problems.
        </p>

        <br />

        {/* EDUCATION */}
        <h1 className="text-violet-300 font-semibold text-xl">
          Education & Training
        </h1>
        <span className="text-slate-300">
          <ul className="list-disc ml-5">
            <li>
              <strong>B.E. Software Engineering</strong>, Chandigarh University
              (2022 - Present) — CGPA: 7.17
            </li>
            <li>
              <strong>Senior Secondary (XII)</strong>, T.S.S.M. Sr. Sec. Public
              School, Ludhiana (87%)
            </li>
            <li>
              <strong>High School (X)</strong>, A.V.M Public High School,
              Ludhiana (79%)
            </li>
            <li>
              AWS Cloud Practitioner Essentials — AWS Academy
            </li>
            <li>
              Multi-Core Computer Architecture — Coursera
            </li>
            <li>
              Introduction to Databases — Udemy
            </li>
            <li>
              Programming for Data Science — Meta
            </li>
          </ul>
        </span>

        <br />
        <br />

        {/* SKILLS */}
        <h1 className="text-violet-300 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span className="text-slate-300">
          <ul className="list-disc ml-5">
            <li>
              <strong>Languages:</strong> C++, Java, JavaScript
            </li>
            <li>
              <strong>Frontend:</strong> HTML, CSS, React.js, Redux, Bootstrap
            </li>
            <li>
              <strong>Backend:</strong> Spring Boot, RESTful APIs, Microservices
            </li>
            <li>
              <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL
            </li>
            <li>
              <strong>DevOps & Cloud:</strong> AWS (EC2, S3), Docker, Kubernetes
            </li>
            <li>
              <strong>Tools:</strong> Git & GitHub, IntelliJ, VS Code, Postman,
              SQL Workbench
            </li>
            <li>
              <strong>Other:</strong> DSA (Data Structures & Algorithms),
              Axios, Keycloak (OAuth2), RabbitMQ
            </li>
          </ul>
        </span>

        <br />
        <br />

        {/* EXPERIENCE / PROJECTS */}
        <h1 className="text-violet-300 font-semibold text-xl">
          Professional Experience / Projects
        </h1>
        <span className="text-slate-300">
          <ul className="list-disc ml-5">
            <li>
              <strong>FitTrack Pro</strong> (Java, Spring Boot, React, Redux,
              RabbitMQ, Keycloak) — Built a full-stack fitness tracking web app
              with secure authentication, microservices communication, and
              performance-focused backend architecture.
            </li>
            <li>
              <strong>Metro Route Finder</strong> (C++, STL, Dijkstra) —
              Developed a CLI-based metro navigation system using graph
              algorithms for shortest path detection.
            </li>
            <li>
              <strong>Portfolio Website</strong> (React, Bootstrap) — Created a
              responsive portfolio with reusable UI components, animations, and
              GitHub Pages deployment.
            </li>
          </ul>
        </span>

        <br />
        <br />

        {/* ACHIEVEMENTS */}
        <h1 className="text-violet-300 font-semibold text-xl">
          Achievements & Activities
        </h1>
        <span className="text-slate-300">
          <ul className="list-disc ml-5">
            <li>Led a hackathon team to build an AI-powered chatbot</li>
            <li>Participated in multiple hackathons & coding competitions</li>
            <li>Volunteered in CU-FEST and university tech events</li>
            <li>Solved 250+ DSA problems across platforms</li>
          </ul>
        </span>

        <br />
        <br />

        {/* MISSION */}
        <h1 className="text-violet-300 font-semibold text-xl">Mission Statement</h1>
        <p className="text-slate-300">
          My mission is to build impactful and scalable software that improves
          user experiences and drives meaningful change. I aim to continuously
          learn modern technologies, contribute to real-world projects, and
          grow as a software engineer who values clean architecture, performance
          optimization, and innovation.
        </p>
      </div>
    </div>
  );
}

export default About;
