import React from "react";
import "./aboutBook.css";

const AboutBooks = ({ photo, bookName, price, Discount }) => {
  return (
    <div>
      <div>
        <img src={photo} className="image" />
        <h5 className="BookName">{bookName}</h5>
        <p className="price">Rs.{price}</p>
        <del className="delete">Rs.{Discount}</del>
      </div>
    </div>
  );
};
export default AboutBooks;
