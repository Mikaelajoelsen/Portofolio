import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const SocialMediaProfiles = () => {
  return (
    <div className="flex flex-col justify-center items-center m-24">
      <h1 className="text-white font-extrabold text-3xl">
        Let´s talk about your next project!
      </h1>
      <p className="text-gray-400 text-center">
        If you are interested in working with me, send me a message!
      </p>
      <div className="flex flex-col gap-3 w-96 justify-center mt-5">
        <div className="flex justify-center gap-2">
          <MdOutlineMail className="text-white mt-1" />
          <a href="mailto:agnesmik@hotmail.com" className="text-white">
            Send me an email
          </a>
        </div>
        <div className="flex justify-center text-white gap-2">
          <a
            href="https://github.com/Mikaelajoelsen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white mt-1" />
          </a>
          Check out my Github profile
        </div>
        <div className="flex justify-center text-white gap-1">
          <a
            href="https://www.linkedin.com/in/mikaela-joelsen-181766278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white mt-1" />
          </a>
          Check out my Linkedin Profile
        </div>
      </div>
      <div className="flex justify-center border border-2-solid-white mt-6 rounded-md w-36 h-7">
        <a
          href="/public/Agnes Mikaela  Joelsen CV FrontEnd Utvikler.pdf"
          download
          className="text-white"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default SocialMediaProfiles;
