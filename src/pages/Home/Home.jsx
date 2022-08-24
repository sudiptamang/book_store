import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import AboutBooks from "../../components/AboutBooks/AboutBooks";
import { BsCart } from "react-icons/bs";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/book/list")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="searchInputCard">
         <input className="searchInput" placeholder="Search here....." />
        <BsCart size={"35px"} />
      </div>

      <div className="homeContainer">
        <div className="topSales">
          <h2>Top Sales</h2>
          <hr className="hr" />
        </div>

        <div className="Booklist">
          {books.map((book) => (
            <Link to={`/bookdetails/${book.id}`}>
              <AboutBooks
                
                image={book?.imageUrl}
                bookName={book?.title}
                price={book?.description?.price}
                Discount={book.description?.discount + book.description?.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
