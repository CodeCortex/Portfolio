import React from "react";
import tingdog from "../assets/projects/Tingdog.png";
import filmexpress from "../assets/projects/FilmExpress.png";
import drumkit from "../assets/projects/Drumkit.png"
import recordkeeping from "../assets/projects/RecordKeeping.png"
import findCa from "../assets/projects/findCa.png"
import chatApp from "../assets/projects/chatApp.png"
const Projects = () => {
  const handleDemoClick= (demoUrl)=>{
    window.open(demoUrl,"_blank");
  };
  const handleCodeClick= (codeUrl)=>{
    window.open(codeUrl,"_blank");
  };
  const projects = [
    {
      id: 1,
      src: chatApp,
      demo:'https://chatapp-kzi3.onrender.com/',
      code:"https://github.com/CodeCortex/chatApp"
    },
    {
      id: 2,
      src: filmexpress,
      demo:"https://film-express.vercel.app/",
      code:"https://github.com/CodeCortex/FilmExpress"

    },
    {
      id: 3,
      src: findCa,
      demo:"https://find-c-as.vercel.app/",
      code:"https://github.com/CodeCortex/findCAs"
    },
    {
      id: 4,
      src: tingdog,
      demo:"https://tingdog-ten.vercel.app/",
      code:"https://github.com/CodeCortex/Tingdog"
    },
    {
      id: 5,
      src: drumkit,
      demo:"https://drum-kit-nu-seven.vercel.app/",
      code:"https://github.com/CodeCortex/Drum-Kit"
    },
    {
      id: 6,
      src: recordkeeping,
      demo:"https://record-keeping-phi.vercel.app/",
      code:"https://github.com/CodeCortex/Record-Keeping"
    }
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-2">Projects</p>
          <p className="py-6 text-center text-bold">
            Check out some of my works right here{" "}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 md:px-0">
          {projects.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:border-b-4 duration-300 hover:border-violet-500">
              <img
                src={src}
                alt=""
                onClick={()=>handleDemoClick(demo)}
                className="rounded-t-md"
              />
              <div className="flex items-center justify-center">
                <button onClick={()=>handleDemoClick(demo)} className="w-1/2 px-6 py-3 duration-200 hover:scale-105 hover:text-green-500">
                  Demo
                </button>
                <button onClick={()=>handleCodeClick(code)} className="w-1/2 px-6 py-3 duration-200 hover:scale-105 hover:text-blue-500">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
