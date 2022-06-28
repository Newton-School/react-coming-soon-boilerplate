import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div className="container">
      <div className="card-box" id="box">
        <div className="info">
          <h4>
            BASE <br /> APPAREL
          </h4>
          <div className="title" id="title">
            WE'RE <br />
            <span id="coming-soon">
              COMING <br />
              SOON
            </span>
          </div>
          <p>
            Hello fellow shoppers! We're currently building our new <br />{" "}
            fashion store. Add your email below to stay up-to-date with
            <br /> announcements and our launch deals.
          </p>
          <div className="d-flex email">
            <input type="text" placeholder="Email Address" id="input" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/dxayftnxb/image/upload/v1579716447/hero-desktop_ce8lgg.jpg"
            id="image"
            alt="girl model"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
