import React from "react";
import Navbar from "../../../components/NavBar/NavBar";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div>
      <Navbar />
      <h1>FORGOT LOGIN PASSWORD?</h1>
      <div className="resetpassword">
        <h3>Please enter the account that you want to reset the password.</h3>
        <h4> Enter your email </h4>
        <input type="email" placeholder="Please enter your email" required />
        <Link to={"/ForgotPassword"}>
          <button className="verify">Continue</button>
        </Link>
      </div>
    </div>
  );
};
export default ResetPassword;
