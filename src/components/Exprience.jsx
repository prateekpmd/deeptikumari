import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Exprience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-30 lg:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-4xl lg:mt-20 sm:mt-16 xxs:mt-10 xxxs:mt-16"
      >
        Experience
      </motion.h1>
      {EXPERIENCES.map((experience, index) => (
        <div
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center xxxs:mt-10 xxs:mt-10"
        >
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4 lg:p-8 mb-4 flex items-center md:justify-center xxs:justify-center xxxs:justify-center"
          >
            <img
              className="rounded-2xl border-4 border-neutral-900 object-fill"
              width={250}
              height={150}
              src={experience.link}
              alt={experience.title}
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:h-3/4 lg:p-8"
          >
            <h6 className="mb-2 font-semibold">
              {experience.role} -{" "}
              <span className="text-sm text-purple-100">
                {experience.company}
              </span>
            </h6>
            <p className="mb-2 text-sm text-neutral-500">{experience.year}</p>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Exprience;

