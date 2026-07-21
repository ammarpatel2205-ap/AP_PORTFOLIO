import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import profileImg from "../assets/profile.avif";

function Hero() {
  return (
    <div id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
              <span className="text-cyan-700">FrontEnd</span>
              <br />
              <span className="text-zinc-700">Developer</span>
            </h1>
            <p className="text-xl text-zinc-900 mb-6">
              I am a passionate Frontend Developer dedicated to building
              responsive, user-friendly, and visually appealing web
              applications. I enjoy solving problems, learning new technologies,
              and creating seamless digital experiences through clean and
              efficient code. I am always looking for opportunities to improve
              my skills and contribute to meaningful projects.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="#projects"
                className="inline-flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer"
              >
                View my work
                <FaArrowRight />
              </a>
              <button className="flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer">
                Contact Me
                <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </div>
          {/*Image section */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <img
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  src={profileImg}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
