import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const SocialMediaProfiles = () => {
  return (
    <div className="flex flex-col items-center justify-center m-24">
      <h1 className="text-3xl font-extrabold text-white">
        Let´s talk about your next project!
      </h1>
      <p className="text-center text-gray-400">
        If you are interested in working with me, send me a message!
      </p>
      <div className="flex flex-col justify-center gap-5 mt-5 w-96">
        <div className="flex justify-center gap-2">
          <MdOutlineMail className="mt-1 text-white" />
          <a href="mailto:agnesmik@hotmail.com" className="text-white">
            Send me an email
          </a>
        </div>
        <div className="flex justify-center gap-2 text-white">
          <a
            href="https://github.com/Mikaelajoelsen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mt-1 text-white" />
          </a>
          Check out my Github profile
        </div>
        <div className="flex justify-center gap-2 text-white">
          <a
            href="https://www.linkedin.com/in/mikaela-joelsen-181766278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mt-1 text-white mb-36" />
          </a>
          Check out my Linkedin Profile
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProfiles;
