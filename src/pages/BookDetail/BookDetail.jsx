import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import photo from "../../Assets/library.jpg";
import "./BookDetail.css";
import { useParams } from "react-router-dom";

function Book() {
  const [bookDetails, setBookDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3030/book/${params.bookId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookDetails(data);
      });
  }, [params]);

  return (
    <div>
      <Navbar />
      <div className="BookTitle">
        <div>
          <img src={photo} height="400px" width="300px" alt="" />
        </div>
        <div className="Rich">
          <p>
            <b>{bookDetails.title}</b>
          </p>
          <p>Description</p>
          <p>Mass Market Paperback: 336 pages</p>
          <p>
            Publisher: Plata Publishing ; Anniversary,Updated edition(April
            11,2017)
          </p>
          <p>{bookDetails.price}</p>
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
