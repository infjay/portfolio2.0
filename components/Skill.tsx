import React from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  image: any;
  percentage: string;
};

const Skill = ({ image, percentage }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30}}
        whileInView={{ opacity: 1,rotate:360}}
        src={image?.src}
        className="rounded-full border border-gray-500 object-cover w-24 max-sm:w-16 max-sm:h-16 md:w-28 md:h-28
        h-24  filter group-hover:grayscale transition duration-300 ease-in-out"
        alt="skill"
        width={200}
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white max-sm:w-16 max-sm:h-16 h-24 w-24 md:w-28 md:h-28   rounded-full z-0 "
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
