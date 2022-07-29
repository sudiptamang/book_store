import React from "react";
import MyImage from "../../Assets/library.jpg";
import Navbar from "../../components/NavBar/NavBar";
import "./LogPages.css";

const LogPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="parent">
          <div>
            {" "}
            <img src={MyImage} height="400px" width="300px" alt="" />
          </div>

          <div className="LogPages">
            <p className="backing"> Back to home</p>
            <div className="border">
              <h4 className="LogIn">Login to Book Store</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogPage;
