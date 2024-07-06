import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div id="main">
      <img
        src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg"
        alt=""
        className="w-full h-screen object-cover object-left scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-gray-400 opacity-20"></div>
      <div className="absolute w-full h-screen top-0 left-0 m-auto flex flex-col justify-center items-center text-white">
        <div className="max-w-[700px]">
          <h1 className="text-4xl font-bold text-center">
            Hi! I'm Micah Stalberg
          </h1>
          <h2 className="text-2xl">
            <TypeAnimation
              sequence={[
                "I am a software developer",
                1000,
                "I am a Oregon State graduate",
                1000,
                "I am a problem solver",
                1000,
                "I am a passionate learner",
                1000,
                "I am a fitness enthusiast",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                color: "white",
                opacity: 100,
              }}
            />
          </h2>
          <div className="flex pt-6 justify-center space-x-16">
            <a
              href={"https://github.com/stalberm"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
