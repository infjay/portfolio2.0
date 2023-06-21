"use client";
import React from "react";
import { motion } from "framer-motion";

//
type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left lg:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase max-sm:text-lg tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="https://i.seadn.io/gcs/files/ab8500681ef3049af50ffafcc4954b2b.png?auto=format&dpr=1&w=1920"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover max-sm:w-32 max-sm:h-32 md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-10 max-sm:space-y-2 px-0 md:px-10  max-sm:pt-6">
        <h4 className="text-4xl font-semibold max-sm:text-lg">
          Here is a{" "}
          <span className="underline  decoration-[#F7AB0A]">little</span> {""} Background
        </h4>
        <p className="text-base sm:text-lg max-sm:text-sm">
          Hi there, I'm a web developer &. I specialize in developing beautiful
          and functional websites that help businesses achieve their goals. My
          expertise includes JS/TS/React/Node.js/Express.js, and I am passionate
          about staying up-to-date with the latest trends and best practices in
          the industry. I am always seeking to learn new skills and tackle new
          challenges.
          I am a team player and love
          collaborating with other professionals to achieve the best possible
          results. I am also a problem solver and enjoy working on complex
          projects that require innovative solutions. If you're interested in
          learning more about my work or would like to discuss a potential
          project, please don't hesitate to reach out. I'd be happy to chat with
          you.
        </p>
      </div>
    </div>
  );
};

export default About;
