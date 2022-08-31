import React, { useState } from "react";
import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import BackBar from "../../../components/BackBar/BackBar";
import { AiFillAlert } from "react-icons/ai";

const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const navigate = useNavigate();

  const handleJoin = (event) => {
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
          console.log("success", data.success);
        } else if (email == "" || email == undefined) {
          setReqEmail("Please, Enter your email.", data.reqEmail);
        } else {
          setMessage(data.message);
          console.log(data);
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
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="message">
          {reqEmail} {message}
        </p>
        {/* <p className="message">{message}</p> */}
        <div>
          <button className="verify" onClick={handleJoin}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
