import React from "react";
import MyImage from "../../Assets/library.jpg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "./LogPages.css";

const LogPage = () => {
  return (
    <div>
      <div className="header">
        <div className="backSection">
          <HiArrowNarrowLeft className="backArrow" />
          <span className="returnHome">Back</span>
        </div>
      </div>
      <div className="parent">
        <div>
          <img src={MyImage} height="500px" width="400px" alt="" />
        </div>

        <div className="LogPages">
          <div className="LoginPage">
            <h4 className="LogIn">Login to Book Store</h4>
            <p className="account">or create account</p>
          </div>

          <div className="LoginInput">
            <AiOutlineMail className="GmailIcon" />
            <input className="gmailInput" placeholder="Mobile or Email" />
          </div>
          <div>
            <RiLockPasswordLine className="PasswordIcon" />
            <input className="passInput" placeholder="Password" />
          </div>

          <div className="forgot">
            <button className="Loginbutton">Login</button>
            <p className="FOOTER">FORGOT LOGIN PASSWORD?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogPage;
