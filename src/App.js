import React from "react";
import "./App.css";
<<<<<<< Updated upstream
import { Routes, Route } from "react-router-dom";
import BookDetail from "./pages/BookDetail/BookDetail";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/ContactPage";
import SellsPage from "./pages/Sells/SellsPage";
import BuyPage from "./pages/Buy/BuyPages";
import LogPage from "./pages/Log/LogPages";
import SignPage from "./pages/Sign/SignPages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookdetails" element={<BookDetail />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/sellspage" element={<SellsPage />} />
        <Route path="/buypage" element={<BuyPage />} />
        <Route path="/logpage" element={<LogPage />} />
        <Route path="/Signpage" element={<SignPage />} />
      </Routes>
=======
import SignUpPage from "./pages/SignUpPage/SignUpPage";
// import NewPassword from "./pages/CreateNewPassword/CreateNewPassword";
function App() {
  return (
    <div>
     
      {/* <BookDetail /> */}
      {/* <Home /> */}
      <SignUpPage/>
      {/* {<NewPassword/>} */}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
