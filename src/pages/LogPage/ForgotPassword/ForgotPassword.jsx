import React from "react";
import "./CreateNewPassword.css";
const ForgotPassword = () => {
  return (
    <div>
      <div class="navBar">
        <nav class="back">Back</nav>
      </div>
      <div class="container">
        <h1>Create a new password</h1>
        <p class="contain">
          Your new password must be different from previous used password.
        </p>
        <div class="newPassword">
          <div>New Password</div>
          <input type="password" placeholder="New Password" required />
          <div>Must be at least 8 character</div>
        </div>
        <div class="reNewPassword">
          <div>Confirm New Password</div>
          <input type="password" placeholder="Re-New Password" required />
          <div>Both Password must be match.</div>
        </div>
        <button>Reset Password</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
