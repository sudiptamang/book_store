import React from "react";
import Navbar from "../../components/NavBar/NavBar";
// import AboutBooks from "../../components/AboutBooks/AboutBooks";
import photo from "../../Assets/library.jpg";
import "./BookDetail.css";
function Book() {
  return (
    <div>
      <Navbar />
      <div className="BookTitle">
        <div>
          <img src={photo} height="400px" width="300px" alt="" />
        </div>
        <div className="Rich">
          <p>
            <b>Rich Dad Poor Dad - Robert Kiyosakib</b>
          </p>
          <p>Description</p>
          <p>Mass Market Paperback: 336 pages</p>
          <p>
            Publisher: Plata Publishing ; Anniversary,Updated edition(April
            11,2017)
          </p>
          <p>Rs.397</p>
          <p>Rs.800-50%</p>
          <div className="sells">
            <div>
              <p>Quantity</p>
            </div>
            <div className="rate">
              <button className="minus">-</button>
              <span>0</span>
              <button className="add">+</button>
            </div>
          </div>
          <div>
            <button className="Buy">Buy Now</button>
            <button className="cart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
