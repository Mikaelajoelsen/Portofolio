import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <h1 className="flex justify-center text-white text-3xl mb-3 font-thin">
        Tools and skills
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-row flex-wrap gap-5 justify-center w-2/3">
          <div className="flex flex-row text-white gap-1 text-xl">
            <SiJavascript className="text-2xl" />
            JavaScript
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <RiTailwindCssFill className="text-2xl" />
            TailwindCSS
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <FaHtml5 className="text-2xl" />
            HTML
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <FaCss3Alt className="text-2xl" />
            CSS
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <RiNextjsLine className="text-2xl" />
            NextJS
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <FaReact className="text-2xl" />
            ReactJS
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <FaFigma className="text-2xl" />
            Figma
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <FaGitAlt className="text-2xl" />
            Git
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <FaWordpress className="text-2xl" />
            Wordpress
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <RiSupabaseFill className="text-2xl" />
            Supabase
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <FaGithub className="text-2xl" />
            GitHub
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <SiVite className="text-2xl" />
            Vite
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <SiFramer className="text-2xl" />
            Framer Motion
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <DiPhotoshop className="text-2xl" />
            Photoshop
          </div>
          <div className="flex flex-row text-white gap-1 text-xl">
            <SiTypescript className="text-2xl" />
            Typescript
          </div>
        </div>
      </div>
    </>
  );
}
