import React from "react";
import "../App.css";

function HowItWorks() {
  return (
    <div className="registration-container contactDiv">
      <form className="registration-form">
        <label htmlFor="username">Full Name</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mobNumber">Mobile</label>
        <input type="number" id="number" name="mobNumber" required />

        <label htmlFor="mobNumber">City</label>
        <input type="number" id="number" name="mobNumber" required />

        <label htmlFor="mobNumber">Post code</label>
        <input type="number" id="number" name="mobNumber" required />

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default HowItWorks;
