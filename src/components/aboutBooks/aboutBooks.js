import React from "react";
import "./AboutBook.css";

const AboutBooks = ({ photo, bookName, price, Discount }) => {
  return (
    <div>
      <div className="firfirey">
        <img src={photo} className="image" alt="" />
        <h5 className="BookName">{bookName}</h5>
        <p className="price">Rs.{price}</p>
        <del className="discount">Rs.{Discount}</del>
      </div>
    </div>
  );
};
export default AboutBooks;
