import React from "react";
import MyImage from "../../Assets/book.webp";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <nav className="Header">
        <div className="logoAndName">
          <img src={MyImage} height="60px" width="60px" alt="" />
          <h3 className="appName">BookStore</h3>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
            }}
          >
            <Link to="/">
              <li className="navBarList">Home </li>
            </Link>
            <Link to="/contactpage">
              <li className="navBarList">Contract </li>
            </Link>

            <li className="navBarList">Sells</li>
            <li className="navBarList">Buys </li>
          </ul>
          <div>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <li className="navBarList">Log in</li>
              <li className="navBarList">SignUp</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
