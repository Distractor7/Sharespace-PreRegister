import React from "react";
import "../App.css";
import logo1 from "../images/box.png";
import logo2 from "../images/no-fee.png";
import logo3 from "../images/money-bag.png";

function Grid() {
  return (
    <div className="container">
      <div className="gridItem">
        <h1 className="item">
          <span className="highlight">Monetise</span> your space
        </h1>
        <p className="paragraphs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img className="boxImg" src={logo1} />
      </div>
      <div className="gridItem">
        <h1 className="item">
          <span className="highlight">Earn</span> money passively
        </h1>
        <p className="paragraphs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img className="boxImg" src={logo3} />
      </div>
      <div className="gridItem">
        <h1 className="item">
          {" "}
          <span className="highlight">Zero </span>start up fees
        </h1>
        <p className="paragraphs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img className="boxImg" src={logo2} />
      </div>
    </div>
  );
}

export default Grid;
