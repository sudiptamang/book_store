import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./pages/BookDetail/BookDetail";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/ContactPage";
import SellsPage from "./pages/Sells/SellsPage";
import BuyPage from "./pages/Buy/BuyPages";
import LogPage from "./pages/LogPage/LogPages";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookdetails/:bookId" element={<BookDetail />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/sellspage" element={<SellsPage />} />
        <Route path="/buypage" element={<BuyPage />} />
        <Route path="/logpage" element={<LogPage />} />
        <Route path="/Signupage" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
