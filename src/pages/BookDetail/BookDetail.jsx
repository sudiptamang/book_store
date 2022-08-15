import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";

import "./BookDetail.css";
import { useParams } from "react-router-dom";

function Book() {
  const [bookDetails, setBookDetails] = useState([]);
  const params = useParams();
  const [quantity, setQuantity] = useState(1);

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
          <img src={bookDetails.imageurl} height="400px" width="300px" alt="" />
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
              <button
                className="minus"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity == 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button className="add" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
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
