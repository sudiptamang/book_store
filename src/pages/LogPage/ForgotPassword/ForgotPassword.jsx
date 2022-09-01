import React from "react";
import BackBar from "../../../components/BackBar/BackBar";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
const ForgotPassword = () => {
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
          <div className="ResetButtonContinue">
            <Button buttonLabel={"Continue"} />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ForgotPassword;
