import React from "react";
import "../App.css";
import logo1 from "../images/box.png";
import logo2 from "../images/no-fee.png";
import logo3 from "../images/money-bag.png";
import logo4 from "../images/lock.png";

function Grid() {
  return (
    <div className="container">
      <div className="gridItem">
        <h1 className="item">
          <span className="highlight">Monetise</span> your space
        </h1>
        <p className="paragraphs">
          Put your empty space to use with Spaceshare. Spaceshare allows you to
          connect with people in need of short to medium term storage space. Do
          you have a secure garage, attic or spare room that isn't being put to
          use? Spaceshare allows you to register your space and connect with
          people who will leave their belongings in your care for a specified
          amount of time in return for a direct payment to you. The cost is
          calculated by the square meters that you are are offering to be used
          and then charged either at a weekly or monthly basis.
        </p>
        <img className="boxImg" src={logo1} />
      </div>
      <div className="gridItem">
        <h1 className="item">
          <span className="highlight">Earn</span> money passively
        </h1>
        <p className="paragraphs">
          This can generate a source of passive income for you and you need to
          invest very little time and energy in getting set up with our service.
          You need only register with our service listing the size of your space
          and the amount of time you're willing to rent it out for.
        </p>
        <img className="boxImg" src={logo3} />
      </div>
      <div className="gridItem">
        <h1 className="item">
          {" "}
          <span className="highlight">Zero </span>start up fees
        </h1>
        <p className="paragraphs">
          There are zero start up fees involved for you. Simply register an
          account with us and allow us to put you in touch with people for
          storage rental needs. We take a small commission off the transactions
          for providing the platform and service.
        </p>
        <img className="boxImg" src={logo2} />
      </div>

      <div className="gridItem">
        <h1 className="item">
          {" "}
          <span className="highlight">Secure</span> and{" "}
          <span className="highlight">trusted services</span>
        </h1>
        <p className="paragraphs">
          There are zero start up fees involved for you. Simply register an
          account with us and allow us to put you in touch with people for
          storage rental needs. We take a small commission off the transactions
          for providing the platform and service.
        </p>
        <img className="boxImg" src={logo4} />
      </div>
    </div>
  );
}

export default Grid;
