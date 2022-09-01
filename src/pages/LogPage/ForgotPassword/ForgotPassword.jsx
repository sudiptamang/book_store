import React, { useState } from "react";
import BackBar from "../../../components/BackBar/BackBar";
import "./ForgotPassword.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/user/password/forgot", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/PinCodePage");
        } else if (email == "" || email == undefined) {
          setReqEmail("Please, Enter your email.");
        } else {
          setMessage(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {message.success == false ? (
          <p className="message"> {message.message}</p>
        ) : (
          <p className="message">{reqEmail}</p>
        )}

        <div className="ResetButtonContinue" onClick={handleContinue}>
          <Button buttonLabel={"Continue"} />
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
