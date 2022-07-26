import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import picture from "../../Assets/cart.png";
import AboutBooks from "../../components/aboutBooks/aboutBooks";
import photo from "../../Assets/library.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <input className="search" placeholder="Search here....."></input>
      <img src={picture} className="cart" />

      <div className="container">
        <div className="break">
          <h2 className="title">Top Sales</h2>
          {/* <hr></hr> */}
        </div>

        <div className="Booklist">
          <AboutBooks
            photo={photo}
            bookName="Rich dad poor dad"
            price="350"
            Discount="400"
          />
          <AboutBooks
            photo={photo}
            bookName="Muna madan"
            price="550"
            Discount="800"
          />
          <AboutBooks
            photo={photo}
            bookName="Muna madan"
            price="550"
            Discount="800"
          />
          <AboutBooks
            photo={photo}
            bookName="Muna madan"
            price="550"
            Discount="800"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
