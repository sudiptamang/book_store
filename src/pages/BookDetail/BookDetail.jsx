import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import AboutBooks from "../../components/AboutBooks/AboutBooks";
import photo from "../../Assets/library.jpg";

function Book() {
  return (
    <div>
      <Navbar />
      book detail
      <AboutBooks
        photo={photo}
        bookName="Rich dad poor dad"
        price="350"
        Discount="400"
      />
    </div>
  );
}

export default Book;
