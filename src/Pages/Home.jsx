import Profilecard from "../components/profilecard";
import Header from "../components/header";
import Skills from "../components/Skills";
import Cards from "../components/cards";
export default function Homepage() {
  return (
    <>
      <Header />
      <div>
        <Profilecard />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <h1 className="flex justify-center text-white font-bold m-20">
          VIEW MY WORK
        </h1>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
}
