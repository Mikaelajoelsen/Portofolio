import Holidaze from "../components/holidaze";
import Auction from "../components/Auction";
import Ecommerce from "../components/ecommerce";
import Artportofolio from "../components/artportofolio";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { useEffect } from "react";
import Arrow from "../components/arrow";
import Text from "../components/textblue";
import Text2 from "../components/text2";
import Text3 from "../components/text3";
import Text4 from "../components/text4 ";

export default function Myworkpage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animation");
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("scroll-animation-start");
        }
      });
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <h1 className="flex justify-center mt-16 text-5xl font-thin text-white scroll-animation">
        MY WORK
      </h1>
      <div className="mt-16 scroll-animation">
        <Arrow />
      </div>
      <Text4 />
      <div>
        <Artportofolio />
      </div>
      <div className="flex justify-center scroll-animation">
        <div className="flex flex-col items-center justify-center w-1/2 mt-4 scroll-animation">
          <p className="font-thin text-white text-start scroll-animation">
            I made this website/application for a client that is an
            artist/painter. He wanted a very simple and minimalistic look. This
            project was both Front end and backend. I got some help and guidence
            on the backend. We created an external api, that runs on its own
            server that handles admin only authentication all the operations the
            artist has present on the website. The artist is the only user, usin
            jwt tokens and google oauth2 login. When user logs in, he can upload
            images that gets uploaded to cloudinary, the url from cloudinary
            gets stored in a database amoung all other informations that he
            adds.
          </p>

          <h1 className="mt-10 mb-3 font-extrabold text-white scroll-animation">
            Technologies I used for this project:
          </h1>
          <a
            href="https://react.dev/"
            className="flex flex-row justify-center w-48 gap-2 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <FaReact className="mt-1 text-xl scroll-animation" />
            React JS
          </a>
          <a
            href="https://tailwindcss.com/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <RiTailwindCssLine className="mt-1 text-xl scroll-animation" />
            Tailwind Css
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-1 scroll-animation">
        <h1 className="flex justify-center text-3xl font-thin text-white underline scroll-animation underline-offset-1 ">
          Check This website
        </h1>
        <div className="flex justify-center gap-10 m-10 mb-36 scroll-animation">
          <a
            href="https://jon-list.onrender.com/"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/ArnorBrekiEinarsson/john-art-gallery"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Github
          </a>
        </div>
      </div>
      <div className="scroll-animation">
        <Text />
      </div>
      <div className="scroll-animation">
        <Holidaze />
      </div>
      <div className="flex justify-center scroll-animation">
        <div className="flex flex-col items-center justify-center w-1/2 mt-4 scroll-animation">
          <p className="font-thin text-white text-start scroll-animation">
            Holidaze is a venue booking platform inspired by Airbnb. I allows
            travelers to explore different venues around the world, from cozy
            cabin in the woods, to a fancy hotel by the beach. If you become a
            member, you can also create your own venue for others to checkout.
            Having this as my project for my Final Exam gave me the chance to be
            creative in different ways and it was a great learning experince.
          </p>
          <h1 className="mt-10 font-extrabold text-white scroll-animation">
            Frontend and UX/DESIGN
          </h1>
          <p className="font-thin text-white text-start scroll-animation">
            For this project, my main role was bringing the design and interface
            to life. I focused on making the website interactive and
            user-friendly. To achieve this, I utilized HTML5, CSS3, and the
            React Framework. Additionally, I leveraged Tailwind CSS to expedite
            the website development process. Initially, I crafted the design
            using Figma, which facilitated the creation of a responsive and
            user-friendly layout.
          </p>
          <h1 className="mt-10 mb-3 font-extrabold text-white scroll-animation">
            Technologies I used for this project:
          </h1>
          <a
            href="https://react.dev/"
            className="flex flex-row justify-center w-48 gap-2 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <FaReact className="mt-1 text-xl scroll-animation" />
            React JS
          </a>
          <a
            href="https://tailwindcss.com/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <RiTailwindCssLine className="mt-1 text-xl scroll-animation" />
            Tailwind Css
          </a>
          <a
            href="https://developers.google.com/maps"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <SiGooglemaps className="mt-1 text-xl scroll-animation" />
            Google Maps Api
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-5 scroll-animation ">
        <h1 className="flex justify-center text-3xl font-thin text-white underline scroll-animation underline-offset-1">
          Check Out Holidaze
        </h1>
        <div className="flex justify-center gap-10 mt-2 scroll-animation">
          <a
            href="https://lively-pika-94d797.netlify.app/"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/Mikaelajoelsen/FinalExam2-mikaelajoelsen.git"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Github
          </a>
        </div>
      </div>
      <div className="mt-24 scroll-animation">
        <Arrow />
      </div>
      <div className="scroll-animation">
        <Text2 />
      </div>

      <div className="scroll-animation">
        <Auction />
      </div>
      <div className="flex justify-center scroll-animation">
        <div className="flex flex-col items-center justify-center w-1/2 mt-4 scroll-animation">
          <p className="font-thin text-white text-start scroll-animation">
            This website functions as an online auction platform, enabling users
            to explore a diverse array of captivating items and place bids on
            their favorites. Users also have the option to list their own items
            for auction, making them visible to others who can then place bids
            as well. The site is powered by the API provided by Noroff School of
            Technology and Digital Media and is built using a combination of
            Tailwind CSS, JavaScript, and HTML, compiled efficiently with Vite.
          </p>
          <h1 className="mt-10 font-extrabold text-white scroll-animation">
            Frontend and UX/DESIGN
          </h1>
          <p className="font-thin text-white text-start scroll-animation">
            In this project, I employed HTML, CSS, and JavaScript, with
            compilation handled by Vite. My aim was to create a website that
            strikes a balance between simplicity and elegance. I incorporated
            subtle details to enhance the visual appeal while ensuring smooth
            functionality with the API integration.I aimed to create a website
            that not only functions effectively but also captivates the user´s
            attention and is easy to navigate. To achieve this, I utilized Figma
            to design the layout, ensuring a user-friendly experience with
            intuitive navigation.
          </p>
          <h1 className="mt-10 mb-3 font-extrabold text-white scroll-animation">
            Technologies I used for this project:
          </h1>
          <a
            href="https://javascript.info/"
            className="flex flex-row justify-center w-48 gap-2 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <SiJavascript className="mt-1 text-xl scroll-animation" />
            JavaScript
          </a>
          <a
            href="https://react.dev/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <FaReact className="mt-1 text-xl scroll-animation" />
            React JS
          </a>
          <a
            href="https://tailwindcss.com/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <RiTailwindCssLine className="mt-1 text-xl scroll-animation" />
            Tailwind Css
          </a>
          <a
            href="https://vitejs.dev/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white rounded-sm h-7 scroll-animation"
          >
            <SiVite className="mt-1 text-xl scroll-animation" />
            Vite
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-5 scroll-animation">
        <h1 className="flex justify-center text-3xl font-thin text-white underline scroll-animation underline-offset-1 ">
          Check Out Auction Site
        </h1>
        <div className="flex justify-center gap-10 mt-2 scroll-animation">
          <a
            href="https://incomparable-monstera-af2aaa.netlify.app/"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/Mikaelajoelsen/Agnesmikaelajoelsen-semesterproject2.git"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Github
          </a>
        </div>
      </div>
      <div className="mt-24 scroll-animation">
        <Arrow />
      </div>
      <div className="scroll-animation">
        <Text3 />
      </div>
      <div className="scroll-animation">
        <Ecommerce />
      </div>
      <div className="flex justify-center scroll-animation">
        <div className="flex flex-col items-center justify-center w-1/2 mt-4 scroll-animation">
          <p className="font-thin text-white text-start scroll-animation">
            Ecommerce is an online shopping platform where users can purchase
            various items. In this project, I employed HTML, Tailwind CSS, React
            JS, and Vite to develop the website. The API provided by Noroff
            School of Technology and Digital Media facilitated seamless
            integration of dynamic content and functionalities.
          </p>
          <h1 className="mt-10 font-extrabold text-white scroll-animation">
            Frontend and UX/DESIGN
          </h1>
          <p className="font-thin text-white text-start scroll-animation">
            For this project, my primary role was to develop a fully functional
            website where users could browse and purchase various items. Drawing
            inspiration from existing shopping platforms, I aimed to create a
            design that closely resembled a real shopping website. The focus was
            on simplicity and user appeal, ensuring a seamless shopping
            experience for users.
          </p>
          <h1 className="mt-10 mb-1 font-extrabold text-white scroll-animation">
            Technologies I used for this project:
          </h1>
          <a
            href="https://javascript.info/"
            className="flex flex-row justify-center w-48 gap-2 font-thin text-black bg-white h-7 scroll-animation"
          >
            <FaReact className="mt-1 text-xl" />
            JavaScript
          </a>
          <a
            href="https://react.dev/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white h-7 scroll-animation"
          >
            <FaReact className="mt-1 text-xl scroll-animation" />
            React JS
          </a>
          <a
            href="https://tailwindcss.com/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 font-thin text-black bg-white h-7 scroll-animation"
          >
            <RiTailwindCssLine className="mt-1 text-xl scroll-animation" />
            Tailwind Css
          </a>
          <a
            href="https://vitejs.dev/"
            className="flex flex-row justify-center w-48 gap-2 mt-4 mb-5 font-thin text-black bg-white h-7 scroll-animation"
          >
            <SiVite className="mt-1 text-xl scroll-animation" />
            Vite
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-1 scroll-animation">
        <h1 className="flex justify-center text-3xl font-thin text-white underline scroll-animation underline-offset-1 ">
          Check Out Ecommerce
        </h1>
        <div className="flex justify-center gap-10 m-10 mb-36 scroll-animation">
          <a
            href="https://ca-ecommerce.netlify.app/"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/Mikaelajoelsen/CA-ecommerce.git"
            className="flex justify-center w-24 font-thin text-black bg-white rounded-sm shadow-md drop-shadow-xl scroll-animation"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}
