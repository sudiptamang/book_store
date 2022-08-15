import React from "react";
import MyImage from "../../Assets/library.jpg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
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
      <div className="loginPageContainer">
        <div>
          <img src={MyImage} height="500px" width="400px" alt="" />
        </div>

        <div className="LogPages">
          <div>
            <h2 className="LogIn">Login to Book Store</h2>
            <Link to={"/Signupage"}>
              <p className="createAccount">or create account</p>
            </Link>
          <div className="LoginInputs">
            <AiOutlineMail  />
            <input className="loginInput" placeholder="Email" />
          </div>
          <div className="LoginInputs">
            <RiLockPasswordLine />
            <input className="loginInput" placeholder="Password" />
          </div>
            <button className="Loginbutton">Login</button> 
            <p className="FOOTER">FORGOT LOGIN PASSWORD?</p>
          </div>
        </div>
          </div>
    </div>
  );
};
export default LogPage;
