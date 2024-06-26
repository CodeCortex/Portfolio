import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {SiLeetcode} from "react-icons/si"

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/codecortex/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/CodeCortex",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "https://mailto:rosjaiswal9@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          LeetCode
          <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/CodeCortex/",
    },
    {
      id: 5,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    }
    
  ];

  return (
    <div className="lg:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-8 md:h-14 md:px-4 ml-[-130px] md:ml-[-105px]  md:hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
