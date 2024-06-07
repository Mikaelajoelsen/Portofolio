import "./card.css";

function Box() {
  return (
    <div className="container flex flex-row justify-center flex-wrap gap-10">
      <div className="box">
        <span></span>
        <div className="content">
          <a href="/mywork">
            <h2>HOLLIDAZE</h2>
          </a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <a href="/mywork">
            <h2>AUCTION SITE</h2>
          </a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <a href="/mywork">
            <h2>ECOMMERCE</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Box;
