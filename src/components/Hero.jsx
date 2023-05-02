import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  headerVariants,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../motion";

const Hero = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex text-[#4F4F4F]"
      >
        <div className="w-1/2 flex-1">
          {/* Navbar div below */}
          <motion.div
            variants={headerVariants}
            className="flex justify-between font-oswald text-xl px-10 pt-10 ml-5 mr-64 tracking-tight"
          >
            <Link to="/portfolio">
              <h1 className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
                PORTFOLIO
              </h1>
            </Link>
            <Link to="/aboutme">
              <h1 className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
                ABOUT ME
              </h1>
            </Link>
            <Link to="/contact">
              <h1 className="cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
                CONTACT US
              </h1>
            </Link>
          </motion.div>
          {/* Title div below */}
          <motion.div
            variants={textVariant(0.5)}
            className="absolute left-28 top-72"
          >
            <h2 className="font-oswald text-4xl font-light tracking-widest pb-5">
              SHAHID KHAN
            </h2>
            <h1 className="font-figtree text-7xl">PHOTOGRAPHER</h1>
          </motion.div>
        </div>
        <div className="w-1/2 flex-1">
          {/* Hero image carousel will come here */}
          <Carousel />
        </div>
      </motion.div>
      <div className="w-1/2 flex-1 text-[#4F4F4F]">
        <h1 className="font-oswald text-2xl text-center -mt-32 cursor-pointer hover:text-cyan-950 hover:scale-105 transition-all ease-out duration-500">
          <a
            href="https://www.instagram.com/shahidphotography_/"
            target="_blank"
          >
            INSTAGRAM
          </a>
        </h1>
        <div className="h-20 mt-2 border-r-4 border-gray-500 mr-[380px]"></div>
      </div>
    </>
  );
};

export default Hero;
