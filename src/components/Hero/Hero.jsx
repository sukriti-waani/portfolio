"use client";
import React from "react";
import Image from "../../../assets/photo.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // Hero Section Wrapper with background gradient and vertical padding
    <section className="lg:py-24 bg-gradient-to-tr from-[#030014] via-[#0a0a22] to-[#1f1f3a]">
      {/* Grid container for content layout */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 px-8 sm:px-16">
        {/* TEXT CONTENT SECTION */}
        <motion.div
          // Initial animation state (opacity and scale)
          initial={{ opacity: 0, scale: 0.6 }}
          // Animation on mount
          animate={{ opacity: 1, scale: 1 }}
          // Animation settings
          transition={{ duration: 0.7, ease: "easeOut" }}
          // Grid positioning and alignment for different screen sizes
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* Heading with gradient text and responsive font sizes */}
          <h3 className="text-[var(--color-text)] mb-8 text-5xl sm:text-6xl lg:text-5xl font-extrabold leading-[1.3] sm:leading-[1.2] lg:leading-[1.15] drop-shadow-lg">
            Greetings, I’m Sukriti Waani <br />
            <span className="text-[var(--color-primary)] font-semibold">
              I'm a
            </span>
            <br />
            {/* Typewriter animation for roles */}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-seconday)] bg-clip-text text-transparent font-bold"
            />
          </h3>

          <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed drop-shadow-md font-semibold">
            I’m a Frontend Developer and UI/UX Designer who builds responsive
            websites with smooth, user-friendly experiences. I blend creative
            design and clean code to deliver digital products that are both
            functional and visually appealing. Hardworking, detail-focused, and
            always eager to learn.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            {/* Button to contact section */}
            <a
              id="contact"
              href="/#contact"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-[var(--color-seconday)] to-[var(--color-primary)] text-white font-semibold shadow-xl transition-transform transform hover:scale-105"
            >
              Contact Me
            </a>

            {/* Button to open resume in new tab */}
            <a
              href="https://drive.google.com/file/d/1QCMvSTj-dK38rDcxU8FP7vLOCgaF3qw8/view?usp=sharing"
              className="px-10 py-3 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-shadow shadow-md font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Resume
            </a>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          // Initial animation state for image
          initial={{ opacity: 0, scale: 0.6 }}
          // Final state after animation
          animate={{ opacity: 1, scale: 1 }}
          // Animation settings
          transition={{ duration: 0.7, ease: "easeOut" }}
          // Grid and alignment settings
          className="col-span-4 place-self-center mt-10 lg:mt-0 flex justify-center"
        >
          {/* Image container with white glow shadow */}
          <div className=" relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-[0_0_20px_8px_rgba(255,255,255,0.3)] before:content-[''] before:absolute before:left-[50px] before:bottom-0 before:w-[80px] before:h-[4px] before:bg-white before:rounded before:shadow-white before:shadow-lg transition-shadow duration-300 hover:shadow-[0_0_25px_12px_rgba(255,255,255,0.5)]">
            <img
              src={Image}
              alt="hero"
              className="
      absolute top-1/2 left-1/2 
      w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] 
      rounded-full object-cover 
      -translate-x-1/2 -translate-y-1/2
    "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
