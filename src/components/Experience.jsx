import React from "react";
import bootstrap from "../assets/experience/bootstrap.png";
import canva from "../assets/experience/canva.png";
import clang from "../assets/experience/clang.png";
import cpp from "../assets/experience/cpp.png";
import css from "../assets/experience/css.png";
import figma from "../assets/experience/figma.png";
import firebase from "../assets/experience/firebase.png";
import github from "../assets/experience/github.png";
import html from "../assets/experience/html.png";
import imovie from "../assets/experience/imovie.png";
import javascript from "../assets/experience/javascript.png";
import mongodb from "../assets/experience/mongodb.png";
import mui from "../assets/experience/mui.png";
import nodejs from "../assets/experience/nodejs.png";
import pythonlang from "../assets/experience/pythonlang.png";
import react from "../assets/experience/react.png";
import sql from "../assets/experience/sql.png";
import tailwind from "../assets/experience/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-violet-500",
    },
    {
      id: 2,
      src: canva,
      title: "CANVA",
      style: "shadow-cyan-500",
    },
    {
      id: 3,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-indigo-500",
    },
    {
      id: 5,
      src: figma,
      title: "FIGMA",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: clang,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: firebase,
      title: "FIREBASE",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: imovie,
      title: "IMOVIE",
      style: "shadow-indigo-500",
    },
    {
      id: 11,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: mongodb,
      title: "mongoDB",
      style: "shadow-green-500",
    },
    {
      id: 13,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-500",
    },
    {
      id: 14,
      src: nodejs,
      title: "NODE JS",
      style: "shadow-lime-500",
    },
    {
      id: 15,
      src: pythonlang,
      title: "PYTHON",
      style: "shadow-amber-500",
    },
    {
      id: 16,
      src: react,
      title: "REACT JS",
      style: "shadow-cyan-500",
    },
    {
      id: 17,
      src: sql,
      title: "SQL",
      style: "shadow-blue-500",
    },
    {
      id: 18,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-emerald-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from bg-gray-800 to to-black w-full md:pt-8 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-2 md:pt-0 pt-10">Experience</p>
          <p className="py-6 text-center text-bold">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center  px-12 md:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md py-2 rounded-lg hover:border-4 hover:border-violet-500" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className=" mt-4 md:text-xl text-xs">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
