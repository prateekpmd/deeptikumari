import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaDigitalOcean } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { SiSap } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import c from "../assets/c.png";
import uni from "../assets/uni.jpg";
import meta from "../assets/meta.png";
import erp from "../assets/erp.jpg";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
   
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFileExcel2Fill className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaShopify className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGoogleanalytics className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
           <img width="72px" height='72px' src={erp} alt="" className="rounded-2xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandOffice className="text-7xl text-orange-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          
          <img width="72px" height='72px' src={c} alt="" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSap className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAmazon className="text-7xl text-white" />
        </motion.div>
      
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img width="72px" height='72px' src={uni} alt="" className="rounded-2xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img width="72px" height='72px' src={meta} alt="" className="rounded-2xl" />
        </motion.div>
       
      </div>
    </div>
  );
};

export default Technologies;
