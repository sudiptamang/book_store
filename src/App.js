import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BookDetail from "./pages/BookDetail/BookDetail";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookdetails" element={<BookDetail />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
