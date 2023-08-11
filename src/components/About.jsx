import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-2">About</p>
        </div>
        <p className="md:text-xl mt-5">
          I am a student at{" "}
          <a
            href="https://www.iiitm.ac.in/index.php/en/"
            className="text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            Atal Bihari Vajpayee-Indian Institute of Information Technology and
            Management (ABV-IIITM)
          </a>
          , pursuing my studies since 2021 and set to graduate in 2025. My
          educational journey involves a dynamic exploration of various
          technologies. My expertise encompasses front-end development using
          React and Tailwind CSS, along with a solid grasp of JavaScript, C++,
          and data structures and algorithms. I'm also well-versed in working
          with databases, including MongoDB and SQL, as well as utilizing
          Firebase for various projects.
        </p>
        <br />
        <p className="md:text-xl">
          My creative side extends to design, where I proficiently use tools
          like Figma and Canva to craft visually appealing concepts.
          Additionally, I possess video editing skills, allowing me to enhance
          the multimedia elements of my projects. With a keen understanding of
          version control, I effectively manage my codebase using Git and
          GitHub, ensuring collaborative and efficient development processes.
        </p>
        <br />
        <p className="md:text-xl">
          In a nutshell, I am a tech-savvy individual with a strong foundation
          in programming, design, and project management, striving to integrate
          these skills to create innovative and impactful solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
