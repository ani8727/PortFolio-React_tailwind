import React from "react";
import fittrack from "../../public/springBoot.jpg"; 
import metro from "../../public/java.png";
import portfolio from "../../public/reactjs.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: fittrack,
      name: "FitTrack Pro",
      description:
        "A full-stack fitness tracking web app built using Java Spring Boot, React.js, Redux, RabbitMQ, and Keycloak authentication.",
      video: "#",
      source: "https://github.com/aniketgupta/FitTrack-Pro", // replace with your actual link
    },
    {
      id: 2,
      logo: metro,
      name: "Metro Route Finder",
      description:
        "A C++ based metro navigation system using Dijkstra’s Algorithm, STL, OOP, and file handling for shortest path calculations.",
      video: "#",
      source: "https://github.com/aniketgupta/Metro-Route-Finder", // replace with your actual link
    },
    {
      id: 3,
      logo: portfolio,
      name: "Portfolio Website",
      description:
        "A responsive personal portfolio developed using React.js, Bootstrap, and modern UI/UX components. Deployed via GitHub Pages.",
      video: "#",
      source: "https://github.com/aniketgupta/portfolio", // replace with your actual link
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-lg">
          Featured Projects
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {cardItem.map(({ id, logo, name, description, source }) => (
            <div
              className="md:w-[300px] md:h-[350px] border rounded-lg shadow-lg p-4 
              cursor-pointer hover:scale-105 duration-300 bg-white"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] mx-auto rounded-full"
                alt={name}
              />

              <div className="text-center mt-4">
                <div className="font-bold text-xl">{name}</div>
                <p className="text-gray-700 text-sm mt-2 px-2">{description}</p>
              </div>

              <div className="flex items-center justify-center mt-4 space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Demo
                </button>

                <a href={source} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
