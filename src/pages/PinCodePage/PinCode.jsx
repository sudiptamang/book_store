import React, { useState } from "react";
// import React from "react";
import BackBar from "../../components/BackBar/BackBar";
import "./PinCode.css";
import { useNavigate } from "react-router-dom";
import photo from "../../Assets/book.webp";

const PinCode = () => {
  const [reqPinCode, setReqPinCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePinCode = (event) => {
    console.log("happy");
    event.preventDefault();
    fetch("http://localhost:3030/user/code/verify", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/ResetPassword");
          console.log("success", data.success);
        } else if (PinCode == "" || PinCode == undefined) {
          setReqPinCode("Enter a code", data.reqPinCode);
        } else {
          setMessage(data.message);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <BackBar />
      <div className="PinCodeDesign">
        <div>
          <h2> Verification Code</h2>
          <p className="PinVerification">
            Please type a 6 - digit verification code has been sent to your
            email.
          </p>
          <div>
            <input
              type="text"
              className="pincode"
              placeholder="code"
              onChange={(e) => setReqPinCode(e.target.value)}
            />
          </div>
          <p className="message">
            {reqPinCode}
            {message}
          </p>

          <button onClick={handlePinCode} className="PinCodeContinue">
            Continue
          </button>
        </div>
        <div className="PinCodeHamroKitab">
          <div className="Ernest">
            <div>
              <img src={photo} className="PinCodeBookImage" />
            </div>
            <div>
              <h3 className="Book">HamroKitab</h3>
            </div>
          </div>
          <h3 className="PincodeFriend">
            There is no friend as loyal as a book.
          </h3>
          <p className="Authorname">-ERNEST HEMINGWAY</p>
        </div>
      </div>
    </div>
  );
};
export default PinCode;
