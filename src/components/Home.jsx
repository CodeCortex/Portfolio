import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a student at Atal Bihari Vajpayee-Indian Institute of
            Information Technology and Management (ABV-IIITM), proficient in
            React, Tailwind, MongoDB, Firebase, JavaScript, DSA, and Figma. I
            specialize in creating dynamic web interfaces, optimizing code
            efficiency, and designing user-friendly experiences.
          </p>
          <div>
            <button className="group text-white w-fit cursor-pointer px-6 py-3 my-2 flex items-center bg-gradient-to-r from-violet-700 to-purple-500 rounded-md">
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
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
