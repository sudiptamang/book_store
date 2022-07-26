import React from "react";
import MyImage from "../../Assets/book.webp";
import "./navBar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="Header">
          <div className="logoAndName">
            <img src={MyImage} height="60px" width="60px" />
            <h3 className="appName">BookStore</h3>
          </div>
          <ul>
            <li>Home </li>
            <li>Contract </li>
            <li>Sells</li>
            <li>Buys </li>
          </ul>
          <div className="Setup">
            <div>
              {" "}
              <li className="log">Log in</li>
            </div>

            <div>
              <li>SignUp</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
