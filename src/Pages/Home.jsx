import Profilecard from "../components/profilecard";
import Cards from "../components/cards";
import Infocard from "../components/infocard";
import Skills from "../components/Skills";

export default function Homepage() {
  return (
    <>
      <div className="mb-36">
        <Profilecard />
      </div>
      <div>
        <Cards />
      </div>
      <Infocard />
      <div className="m-10">
        <Skills />
      </div>
    </>
  );
}
