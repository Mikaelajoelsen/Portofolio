import "./card.css";

function Box() {
  return (
    <div className="container flex flex-row flex-wrap justify-center gap-10">
      <div className="box">
        <span></span>
        <div className="flex flex-col justify-center content">
          <a href="/mywork">
            <h2>ART PORTOFOLIO</h2>
          </a>
          <p className="flex justify-center w-40 m-5 font-thin">
            Art portofolio for a recent client
          </p>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="flex flex-col justify-center content">
          <a href="/mywork">
            <h2>HOLLIDAZE</h2>
          </a>
          <p className="flex justify-center w-40 m-5 font-thin">
            Book your next dream location
          </p>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="flex flex-col justify-center content">
          <a href="/mywork">
            <h2>AUCTION SITE</h2>
          </a>
          <p className="flex justify-center m-5 font-thin w-36">
            Place a bid and find your next treasure
          </p>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="flex flex-col justify-center content">
          <a href="/mywork">
            <h2>ECOMMERCE</h2>
          </a>
          <p className="flex justify-center m-5 font-thin w-36">
            Shop Your Favourite products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
