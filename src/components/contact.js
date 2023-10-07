import React from "react";
import "../App.css";

function HowItWorks() {
  return (
    <div className="registration-container contactDiv flex-container">
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
      <div className="info-container">
        <h1 className="register">Pre-Register for the launch</h1>
        <p className="register-description">
          Sign up with us to be a part of the launch of this service.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
