import React, { useState } from "react";
import MyImage from "../../Assets/library.jpg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/users/login", {
      method: "POST",
      body: JSON.stringify({
        password: password,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        if (data.success) {
          navigate("/");
        } else {
          console.log("data", data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
              <AiOutlineMail />
              <input
                className="loginInput"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="LoginInputs">
              <RiLockPasswordLine />
              <input
                className="loginInput"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>

            <button className="Loginbutton" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/ResetPassword"}>
              <p className="FOOTER">FORGOT LOGIN PASSWORD?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
