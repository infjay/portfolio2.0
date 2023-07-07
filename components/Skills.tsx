"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import logos from "../assets/skills";
const skillset = [
  {
    name: "JS",
    image: logos.js,
    percentage: "80%",
  },
  {
    name: "React",
    image: logos.react,
    percentage: "85%",
  },
  {
    name: "HTML",
    image: logos.html,
    percentage: "85%",
  },
  {
    name: "TS",
    image: logos.ts,
    percentage: "60%",
  },
  {
    name: "CSS",
    image: logos.css,
    percentage: "85%",
  },
  {
    name: "Node.js",
    image: logos.node,
    percentage: "55%",
  },
  {
    name: "Next",
    image: logos.next,
    percentage: "70%",
  },
  {
    name: "NGINX",
    image: logos.nginx,
    percentage: "75%",
  },
  {
    name: "AWS",
    image: logos.aws,
    percentage: "75%",
  },
  {
    name: "Bootstrap",
    image: logos.bootstrap,
    percentage: "85%",
  },
  {
    name: "Docker",
    image: logos.docker,
    percentage: "45%",
  },
  {
    name: "Figma",
    image: logos.figma,
    percentage: "85%",
  },
  {
    name: "Firebase",
    image: logos.firebase,
    percentage: "75%",
  },
  {
    name: "Git",
    image: logos.git,
    percentage: "85%",
  },
  {
    name: "Github",
    image: logos.github,
    percentage: "90%",
  },
  {
    name: "Linux",
    image: logos.linux,
    percentage: "80%",
  },
  {
    name: "Material",
    image: logos.material,
    percentage: "70%",
  },
  {
    name: "TailwindCSS",
    image: logos.tailwind,
    percentage: "85%",
  },
  {
    name: "VSCODE",
    image: logos.vs,
    percentage: "90%",
  },
];
type Props = {};

const Skills = (props: Props) => {



  return (
    <motion.div
    initial={{ opacity: 0  }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative flex-col text-center md:text-left
     xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
     mx-auto items-center overflow-x-hidden"
  >
      <h3 className="absolute top-24 max-sm:text-sm uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase max-sm:text-xs tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profiecieny
      </h3>
      <div className="grid grid-cols-4 gap-5 pt-14">
        {skillset.map((skill, idx) => (
          <Skill
            key={idx}
            name={skill.name}
            image={skill.image}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
