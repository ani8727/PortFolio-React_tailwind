import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: html,
      name: "HTML",
    },
    {
      id: 5,
      logo: oracle,
      name: "MySQL / PostgreSQL",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring Framework",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];

  return (
    <div
      id="experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-slate-200"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-slate-100">Experience</h1>
        <p className="text-slate-300">
          I have hands-on experience in modern technologies used for building
          scalable, high-performance applications. Below are the tools and
          technologies I work with:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-6">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center rounded-xl 
              md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer 
              hover:scale-110 duration-300 glass-card"
              key={id}
            >
              <img src={logo} className="w-20 h-20 rounded-full object-cover" alt={name} />
              <div className="mt-3 text-lg font-semibold text-slate-100">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
