"use client";
import React from "react";
import { motion } from "framer-motion";
import mock1 from "../assets/1.png";
import mock2 from "../assets/3.png";
import mock3 from "../assets/4.png";
import mock4 from "../assets/5.png";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      id: 1,
      name: "MoriElement",
      summary:
        "Morielement.com has successfully positioned Mori as a talented artist, showcasing their unique style and creative abilities. The visually captivating design and intuitive user experience captivate visitors and leave a lasting impression. The website has garnered positive feedback from visitors, potential clients, and collaborators, leading to opportunities for commissioned work, collaborations, and recognition within the creative community.",
      image: mock1,
      stack: {
        1: "https://s3-symbol-logo.tradingview.com/roche--600.png",
        2: "https://s3-symbol-logo.tradingview.com/roche--600.png",
        3: "https://s3-symbol-logo.tradingview.com/roche--600.png",
        4: "https://s3-symbol-logo.tradingview.com/roche--600.png",
      },
      url: "https://www.morielement.com",
    },
    {
      id: 2,
      name: "Sumex",
      summary:
        "Sumex is an AI-powered article summarizer that aims to revolutionize the way we consume and process information. With its advanced natural language processing algorithms, Sumex can analyze and condense lengthy articles into concise and coherent summaries, saving users valuable time and effort.",
      image: mock2,
      url: "https://infjay.github.io/Sumex/",
    },
    {
      id: 3,
      name: "GPT-3",
      summary:
        "The GPT-3 project is a frontend design showcase that highlights the skills and creativity in designing and implementing user interfaces.The project's emphasis is on presenting visually appealing and user-friendly interfaces. It demonstrates the developer's proficiency in frontend technologies, such as HTML, CSS, JavaScript and React.js for enhanced functionality and styling.",
      image: mock3,
      url: "https://infjay.github.io/gp3-AI/",
    },
    {
      id: 4,
      name: "Hospify",
      summary: `The Hospify project has successfully addressed the apointment and patient management challenges faced by healthcare professionals by delivering a secure and compliant patient management platform.
            Through its user-friendly interface, robust security measures, and seamless integration with existing systems, Hospify has improved healthcare patient management, enabling healthcare professionals to collaborate effectively and deliver high-quality patient care.`,
      image: mock4,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 max-sm:text-xs uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-orange-400"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 max-sm:p-5 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:pb-0 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image?.src}
              alt="mockup"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl max-sm:text-xs text-center font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length} :
                </span>{" "}
                <a
                  href={project.url}
                  className="hover:text-gray-500 transition duration-300"
                  target="_blank"
                >
                  {project.name}
                </a>
              </h4>

              <p className="text-lg text-center md:text-left max-sm:text-sm">
                {project.summary}
              </p>
              <div className="flex space-x-2 justify-center mt-2">
                <p className="flex justify-center text-center mt-2">
                  Tech Stack :
                </p>
                <img
                  className="h-10 w-10 rounded-full"
                  src={project.stack?.[1]}
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src={project.stack?.[2]}
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://s3-symbol-logo.tradingview.com/roche--600.png"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://s3-symbol-logo.tradingview.com/roche--600.png"
                  alt=""
                />
                {/* Tech Stack */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-gradient-to-r from-yellow-700 to-black left-0 
        h-[500px] -skew-y-12 "
      ></div>
    </motion.div>
  );
};

export default Projects;
