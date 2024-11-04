import React from "react";

const RanjitBawa = () => {
  return (
    <div
      className="p-20 w-auto flex px-24 justify-center relative"
      id="container"
    >
      <div
        className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative"
        id="container"
      >
        <div className="mr-10">
          <img
            alt="image of myself"
            className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
            src="https://yt3.googleusercontent.com/9riq7offug7BEZazKDAd0DDA7xt3BV-QdZ1_mEFdM5nK0WkphTrUe7KlYA3RFznMhqVR842eq4o=s900-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-white font-bold text-3xl mt-6 mb-8">
            Hey it's me, Aydin Vesali Moghaddam
          </h1>
          <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            I'm Aydin, a 18-year-old high schooler with a passion for web
            development. My tech journey started with HTML, CSS, and JavaScript,
            and I was hooked by the thrill of crafting dynamic, interactive
            websites. As I grew, Node.js and ReactJS became my go-to tools for
            building scalable applications. Feel free to connect if you have
            questions, collaboration ideas, or just want to discuss the latest
            in web development!
          </p>
          <div
            className="flex flex-wrap justify-start items-center gap-4"
            id="social"
          >
            <a
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              href="https://github.com/iam-aydin"
              rel="noopener"
              target="_blank"
            >
              <img
                alt="Github"
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                height="20px"
                src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                width="20px"
              />
              <span>Visit my Github</span>
            </a>
            <a
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
              rel="noopener"
              target="_blank"
            >
              <img
                alt="LinkedIn"
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                height="20px"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                width="20px"
              />
              <span>Follow me on Linkedin</span>
            </a>
            <a
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              href="https://twitter.com/ichbinaydin"
              rel="noopener"
              target="_blank"
            >
              <img
                alt="Twitter"
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                height="20px"
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                width="20px"
              />
              <span>Follow me on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RanjitBawa;
