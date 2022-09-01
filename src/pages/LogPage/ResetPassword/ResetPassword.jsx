import React from "react";
import BackBar from "../../../components/BackBar/BackBar";
import "./ResetPassword.css";
const ResetPassword = () => {
  return (
    <div>
      <BackBar />
      <div class="ForgotPasswordContainer">
        <div>
          <h1>Create a new password</h1>
          <p class="contain">
            Your new password must be different from previous used password.
          </p>
          <div class="newPassword">
            <div className="password">New Password</div>
            <input
              type="password"
              placeholder="New Password"
              required
              className="newPasswordInput"
            />
            <div>Must be at least 8 character</div>
          </div>
          <div class="newPassword">
            <div className="password">Confirm New Password</div>
            <input
              type="password"
              placeholder="Re-New Password"
              required
              className="newPasswordInput"
            />
            <div>Both Password must be match.</div>
          </div>
          <button className="resetButton">Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
