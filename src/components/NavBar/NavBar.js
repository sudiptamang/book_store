import React, { useState } from "react";
import MyImage from "../../Assets/book.webp";
import "./navBar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const DropDownMenu = () => {
    setDropDown(!dropDown);
  };

  const userDetail = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <ul
        className="infoNav"
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
        }}
      ></ul>
      <div className="navBarContainer">
        <nav className="Header">
          <Link to={"/"} className="link">
            <div className="logoAndName">
              <img src={MyImage} height="60px" width="60px" alt="" />
              <h3 className="appName">BOOK STORE</h3>
            </div>
          </Link>
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
              <NavLink to="/cartPage">
                <li className="navBarList">Cart </li>
              </NavLink>
              <NavLink to="/BuyPage">
                <li className="navBarList">Buy </li>
              </NavLink>
            </ul>
            <div>
              <ul style={{ listStyle: "none", display: "flex" }}>
                {userDetail ? (
                  <div className="dropDown">
                    <li className="userName" onClick={DropDownMenu}>
                      {userDetail.name}
                    </li>
                    {dropDown ? (
                      <div id="myDropDown" class="dropDown-content">
                        <div className="myBookStore">
                          <h1 className="containerName">General</h1>
                          <ul className="containers">
                            <li>Manage Account </li>
                            <li>Payments</li>
                            <li>Settings </li>
                            <li>Invite friends</li>
                            <li>Support</li>
                          </ul>
                          <h1 className="containerName">Buying</h1>
                          <ul className="containers">
                            <li>Post of request</li>
                            <li>Manage request</li>
                          </ul>
                          <h1 className="containerName">Selling</h1>
                          <ul className="containers">
                            <li>Post of Selling</li>
                            <li>Manage Selling</li>
                          </ul>
                          <h1 className="containerName">Login</h1>
                          <ul className="containers">
                            <li>Switch Account</li>
                            <li>Log Out</li>
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <NavLink to="/LogPage">
                      <li className="navBarList">Log in</li>
                    </NavLink>
                    <NavLink to="/Signupage">
                      <li className="navBarList">SignUp</li>
                    </NavLink>
                  </>
                )}
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
