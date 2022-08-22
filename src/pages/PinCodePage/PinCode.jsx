import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import "./PinCode.css";
import { Link } from "react-router-dom";
const PinCode = () => {
  return (
    <div>
      <Navbar />
      <p> Please enter your PIN code</p>
      <div>
        <input type="text" className="pincode" />
      </div>
      <p>Reset</p>
      <Link to={"/Forgotpassword"}>
        <button>Submit</button>
      </Link>
    </div>
  );
};
export default PinCode;
