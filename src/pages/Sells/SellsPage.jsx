import React from "react";
import NavBar from "../../components/NavBar/NavBar";

import "./SellsPage.css";

const SellsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="SellsContainers">
        <h1 className="SellsPageWelCome">
          Welcome to the <span className="WelCome">Book Store</span> family!
        </h1>
        <p className="SellInfo">
          Once you and the our book store come to an agreement, you should
          discuss the transition with the rest of your account.
        </p>
        <div className="SellsContainer">
          <h2 className="ImportImg">Upload Your Book's Image</h2>
          <input type="file" id="file-input" width="40px" />

          <div className="BookName">Name </div>
          <input type="text" className=" BookInfo" placeholder=" Book's Name" />
          <div className="BookName">Title </div>
          <input
            type="text"
            className=" BookInfo"
            placeholder=" Book's Title"
          />
          <div className="BookName"> Authors </div>
          <input
            type="text"
            className=" BookInfo"
            placeholder=" Author's Name"
          />
          <div className="BookName">Price </div>
          <input type="number" className=" BookInfo" placeholder="Price" />
          <div className="BookName">Quantity </div>
          <input type="number" className=" BookInfo" placeholder="Quantity" />
          <button className="SellsBtn">Sell</button>
        </div>
      </div>
    </div>
  );
};
export default SellsPage;
