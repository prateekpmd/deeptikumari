import React, { useState } from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import coconut from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredg, setIsHoveredg] = useState(false);
  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-22 h-7 object-contain "
          src={coconut}
          alt=""
          srcset=""
        />
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="m-8 flex flex-shrink-0 items-center justify-center gap-4 py-6 text-2xl"
      >
        <div className="relative inline-block">
          <a
            href="https://linkedin.com/in/deeptikri"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaLinkedin className="hover:text-blue-500 text-3xl" />
          </a>
          {isHovered && (
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 text-gray-700 bg-white border rounded px-2 py-1 shadow text-sm">
              LinkedIn
            </span>
          )}
        </div>
        <div className="relative inline-block">
        <a
          href="https://github.com/d4deepti"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHoveredg(true)}
          onMouseLeave={() => setIsHoveredg(false)}
        >
          <FaGithub className="hover:text-purple-500 text-3xl" />
        </a>
        {isHoveredg && (
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 text-gray-700 bg-white border rounded px-2 py-1 shadow text-sm">
            Github
          </span>
        )}
      </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
