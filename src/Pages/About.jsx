import Skills from "../components/Skills";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function DeveloperProfile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" text-center mb-8">
        <img
          src="profilbilde.jpg"
          alt="Profile"
          className="w-72 h-72 mx-auto mb-4 rounded-full drop-shadow-md"
        />
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Mikaela Joelsen.
        </h1>
      </div>
      <div className="flex flex-row text-white justify-center gap-7 m-10 text-2xl">
        <a href="https://www.linkedin.com/in/mikaela-joelsen-181766278/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Mikaelajoelsen">
          <FaGithub />
        </a>
        <a href="mailto:agnesmik@hotmail.com">
          <MdEmail />
        </a>
      </div>
      <div className="flex justify-center">
        <p className="mb-3  text-white dark:text-white text-xl font-thin w-3/4">
          Hi! My name is Mikaela Joelsen, I am a Front-End developer from
          Norway. I have 2 years of experince in HTML, CSS and Javascript. I use
          these tools to bring my webpages to life. However, my interests extend
          beyond coding. I am equally passionate about design and prototyping,
          having honed my skills in tools like Photoshop and Figma. By combining
          these skills, I am able to create websites that stand out and deliver
          fantastic user experiences. The expertise I`ve developed in
          JavaScript, CSS, and HTML allows me to build functional and visually
          appealing sites, while my proficiency in design tools like Photoshop,
          Figma, and Adobe XD adds an extra layer of creativity. This holistic
          approach ensures that the websites I create not only look great but
          also provide users with a seamless and enjoyable browsing experience.
        </p>
      </div>
      <section className="mb-8">
        <Skills />
      </section>
    </div>
  );
}

export default DeveloperProfile;
