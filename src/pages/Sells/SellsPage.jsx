import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import "./SellsPage.css";
import { useNavigate } from "react-router-dom";

const SellsPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [Writer, setWriter] = useState("");
  const [Money, setMoney] = useState("");
  const [Howmany, setHowmany] = useState("");

  // console.log(Writer);

  const navigate = useNavigate();

  const handleSells = (event) => {
    event.preventDefault();
    if (title === "" || title === undefined) {
      setMessage("Please Enter title");
    }
    if (author === "" || author === undefined) {
      setWriter("Please Enter author");
    }
    if (price === "" || price === undefined) {
      setMoney("Please Enter price");
    }
    if (quantity === "" || quantity === undefined) {
      setHowmany("Please Enter quantity");
    }
    fetch("http://localhost:3030/sells/book", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        author: author,
        price: price,
        quantity: quantity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/");
          console.log("home", data.success);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="SellsContainers">
        <h1 className="SellsPageWelCome">
          Welcome to the <span className="WelCome">Book Store</span> family!
        </h1>
        <p className="SellInfo">
          Once you and the our book store come to an agreement, you should
          discuss the transition with the rest of your account.
        </p>
        <div className="SellsContainer">
          <h2 className="ImportImg">Upload Your Book's Image</h2>
          <input type="file" id="file-input" width="40px" />

          <div className="BookName">Title </div>
          <input
            type="text"
            className=" BookInfo"
            placeholder=" Book's Title"
            onChange={(e) => setTitle(e.target.value)}
            // required
          />
          <p style={{ color: "red" }}>{message}</p>
          <div className="BookName"> Authors </div>
          <input
            type="text"
            className=" BookInfo"
            placeholder=" Author's Name"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <p style={{ color: "red" }}>{Writer}</p>
          <div className="BookName">Price </div>
          <input
            type="number"
            className=" BookInfo"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <p style={{ color: "red" }}>{Money}</p>
          <div className="BookName">Quantity </div>
          <input
            type="number"
            className=" BookInfo"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <p style={{ color: "red" }}>{Howmany}</p>

          <div className="sellsButton" onClick={handleSells}>
            <Button buttonLabel="Sells " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellsPage;
