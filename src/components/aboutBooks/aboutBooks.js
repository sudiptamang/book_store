import React from "react";
import "./AboutBook.css";

const AboutBooks = ({ image, bookName, price, Discount }) => {
  return (
    <div>
      <div className="aboutBooksContainer">
        <img src={image} className="image" alt="" />
        <h5 className="BookName">{bookName}</h5>
        <p className="price">Rs.{price}</p>
        <del className="discount">Rs.{Discount}</del>
      </div>
    </div>
  );
};
export default AboutBooks;
