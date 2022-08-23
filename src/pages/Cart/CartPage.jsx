import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import MyImage from "../../Assets/library.jpg";
import photo from "../../Assets/BookStoreSignUp.jpg";

import "./CartPage.css";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="cartheader">
          <div>
            <img src={MyImage} className="Cartimage" />
          </div>
          <div>
            <p className="Bookparagaph">
              <b>
                Get brave. School teaches you to work for money. Make money work
                for you.Teach yourself financial literacy. Mind your own
                business.Power of corporations.
              </b>
            </p>
            <span>Only 2 item(s) in stock</span>
          </div>
          <div>
            <p className="BookPrice">Rs.749</p>
            <del>Rs.2000</del>
            <p>
              <b>-63%</b>
            </p>
          </div>
        </div>
        <div className="cartheader">
          <div>
            <img src={photo} className="Cartimage" />
          </div>
          <div>
            <p className="Bookparagaph">
              <b>
                Get brave. School teaches you to work for money. Make money work
                for you.Teach yourself financial literacy. Mind your own
                business.Power of corporations.
              </b>
            </p>
            <span>Limited item(s) in stock</span>
          </div>
          <div>
            <p className="BookPrice">Rs.1000</p>
            <del>Rs.1000</del>
            <p>
              <b>-60%</b>
            </p>
          </div>
        </div>
      </div>
      <div className="Summary">
        <div className="totalprice">
          <div className="Subtotal">
            <p>SubTotal (0 items)</p>
          </div>
          <div>
            <p>Rs.0</p>
          </div>
        </div>
        <div>
          <input className="text" placeholder="Enter Voucher Code" />
          <button className="Applyprice">Apply</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
