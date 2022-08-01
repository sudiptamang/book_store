import React from "react";
import MyImage from "../../Assets/book.webp";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navBarContainer">
        <nav className="Header">
          <div className="logoAndName">
            <img src={MyImage} height="60px" width="60px" alt="" />
            <h3 className="appName">BOOK STORE</h3>
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
                <li className="navBarList">Contact </li>
              </Link>

              <Link to="/sellspage">
                <li className="navBarList">Sells</li>
              </Link>
              <Link to="/BuyPage">
                <li className="navBarList">Buy </li>
              </Link>
            </ul>
            <div>
              <ul style={{ listStyle: "none", display: "flex" }}>
                <Link to="/LogPage">
                  <li className="navBarList">Log in</li>
                </Link>
                <Link to="/Signupage">
                  <li className="navBarList">SignUp</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
