import Profilecard from "../components/profilecard";
import Cards from "../components/cards";
import Infocard from "../components/infocard";
import Skills from "../components/Skills";
import Card from "../components/card";
import Social from "../components/socialmedia";

export default function Homepage() {
  return (
    <>
      <div>
        <Profilecard />
      </div>
      <div>
        <Cards />
      </div>
      <Infocard />
      <h1 className="flex justify-center text-white font-thin mt-24 text-3xl">
        My Projects
      </h1>
      <div className="m-36">
        <Card />
      </div>
      <div className="mb-10">
        <Skills />
      </div>
      <Social />
    </>
  );
}
