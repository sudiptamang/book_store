import React from "react";
import BackBar from "../../../components/BackBar/BackBar";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div>
      <BackBar />
      <h1 className="ForgotPassword">FORGOT LOGIN PASSWORD?</h1>
      <div className="resetpassword">
        <h3 className="ForgotEmail">
          Please enter the Email that you want to reset the password.
        </h3>
        <input
          className="ForgotInput"
          type="email"
          placeholder="Enter your Email...."
          required
        />
        <Link to={"/PinCodePage"}>
          <div>
            <button className="verify">Continue</button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ResetPassword;
