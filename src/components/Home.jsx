import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white md:pt-0 pt-44">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
          That's impressive, Roshan Jaiswal! I am a student at Atal Bihari Vajpayee-Indian Institute of Information Technology and Management (ABV-IIITM), pursuing Btech in Computer Science and Engineering, and proficient in React, Tailwind, MongoDB, Firebase, JavaScript, DSA, and Figma. I specialize in creating dynamic web interfaces, optimizing code efficiency, and designing user-friendly experiences.
          </p>
          <div className="pb-8 md:pb-0">
            <Link to="projects" smooth duration={700} className="group text-white w-fit cursor-pointer px-6 py-3 my-2 flex items-center bg-gradient-to-r from-violet-700 to-purple-500 rounded-md">
              Projects
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="mx-auto w-4/6 md:w-8/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
