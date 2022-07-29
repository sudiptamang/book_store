import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import AboutBooks from "../../components/AboutBooks/AboutBooks";
import BookImg from "../../Assets/library.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="searchInputCard">
        <input className="searchInput" placeholder="Search here....." />
      </div>

      <div className="homeContainer">
        <div className="topSales">
          <h2>Top Sales</h2>
          <hr className="hr" />
        </div>

        <div className="Booklist">
          <Link to="/bookdetails">
            <div>
              <AboutBooks
                photo={BookImg}
                bookName="Rich dad poor dad"
                price="350"
                Discount="400"
              />
            </div>
          </Link>
          <Link to={"/bookdetails"}>
            <AboutBooks
              photo={BookImg}
              bookName="Muna madan"
              price="550"
              Discount="800"
            />
          </Link>
          <Link to={"/bookdetails"}>
            <AboutBooks
              photo={BookImg}
              bookName="Muna madan"
              price="550"
              Discount="800"
            />
          </Link>
          <Link to={"/bookdetails"}>
            <AboutBooks
              photo={BookImg}
              bookName="Muna madan"
              price="550"
              Discount="800"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
