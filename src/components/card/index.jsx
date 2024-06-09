import "./card.css";

function Box() {
  return (
    <div className="container flex flex-row justify-center flex-wrap gap-10">
      <div className="box">
        <span></span>
        <div className="content flex flex-col justify-center">
          <a href="/mywork">
            <h2>HOLLIDAZE</h2>
          </a>
          <p className="flex justify-center m-5 w-40 font-thin">
            Book your next dream location
          </p>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content flex flex-col justify-center">
          <a href="/mywork">
            <h2>AUCTION SITE</h2>
          </a>
          <p className="flex justify-center m-5 w-36 font-thin">
            Place a bid and find your next treasure
          </p>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content flex flex-col justify-center">
          <a href="/mywork">
            <h2>ECOMMERCE</h2>
          </a>
          <p className="flex justify-center m-5 w-36 font-thin">
            Shop Your Favourite products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
