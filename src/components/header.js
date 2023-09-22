import React from "react";
import { Link } from "react-router-dom"; // Make sure this is correctly imported

function Header() {
  return (
    <div className="header">
      <h1 className="heading">
        share<span className="x">space</span>
      </h1>
      <nav>
        <Link to="/" className="howItWorks">
          How it works
        </Link>
        <Link to="/another" className="separator">
          Register
        </Link>{" "}
        {/* Replace with your actual path */}
        {/* Add other Links as needed */}
      </nav>
    </div>
  );
}

export default Header;
