import React, { useState } from "react";
import BackBar from "../../../components/BackBar/BackBar";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  console.log("happy");

  const handleReset = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/user/password/forgot", {
      method: "POST",
      body: JSON.stringify({
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <BackBar />
      <div className="containerNewPassword">
        <h1 className="NamePassword">Create a new password</h1>
        <p className="contain">
          Your new password must be different from previous used password.
        </p>
        <div className="newPassword">
          <div>New Password</div>
          <input
            type="password"
            placeholder="New Password"
            required
            className="inputNewPassword"
          />
          <div>Must be at least 8 character</div>
        </div>
        <br />
        <div className="newPassword">
          <div>Confirm New Password</div>
          <input
            type="password"
            placeholder="New Password"
            required
            className="inputNewPassword"
          />
          <div>Both Password must be match.</div>
        </div>
        <br />
        <button onClick={handleReset} className="newPasswordBtn">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
