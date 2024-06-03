import Profilecard from "../components/profilecard";
import Header from "../components/header";
import Skills from "../components/Skills";
export default function Homepage() {
  return (
    <>
      <Header />
      <div>
        <Profilecard />
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
}
