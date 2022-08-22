import React from "react";
import MyImage from "../../Assets/book.webp";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul
        className="infoNav"
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Link to="/">
          <li className="navBarList">Save more on App</li>
        </Link>

        <Link to="/">
          <li className="navBarList">Book Store Affilicate program</li>
        </Link>

        <Link to="/">
          <li className="navBarList">Sells on book store</li>
        </Link>
        <Link to="/">
          <li className="navBarList">Customer Care</li>
        </Link>
        <Link to="/">
          <li className="navBarList">Track my order</li>
        </Link> */}
      </ul>
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
                color: "black",
              }}
            >
              <NavLink to="/">
                <li className="navBarList">Home </li>
              </NavLink>
              <NavLink to="/contactpage">
                <li className="navBarList">Contact </li>
              </NavLink>

              <NavLink to="/sellspage">
                <li className="navBarList">Sells</li>
              </NavLink>
              <NavLink to="/BuyPage">
                <li className="navBarList">Buy </li>
              </NavLink>
            </ul>
            <div>
              <ul style={{ listStyle: "none", display: "flex" }}>
                {/* <li>Sanam Login</li> */}
                <NavLink to="/LogPage">
                  <li className="navBarList">Log in</li>
                </NavLink>
                <NavLink to="/Signupage">
                  <li className="navBarList">SignUp</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr className="navBarLine" />
    </div>
  );
};

export default Navbar;
