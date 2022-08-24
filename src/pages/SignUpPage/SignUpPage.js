import React, { useState } from "react";
import "./SignUpPage.css";
import SignUpImg from "../../Assets/BookStoreSignUp.jpg";
import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import BackBar from "../../components/BackBar/BackBar";
import Button from "../../components/Button/Button";

const SignUpPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleJoin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/users/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/logpage");
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
      <BackBar />
      <div className="container">
        <img src={SignUpImg} alt="" height={"550px"} width={"550px"} />
        <div className="inputSection">
          <div>
            <form className="inputItems">
              <div className="input">
                <BsPersonFill />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  className="inputBox"
                  required
                />
              </div>

              <div className="input">
                <MdEmail />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="inputBox"
                  required
                />
              </div>

              <div className="input">
                <FaLock />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="New Password"
                  required
                  className="inputBox"
                />
              </div>
              <div className="input">
                <FaLock />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="inputBox"
                />
              </div>
              <p className="SignUpDefined">
                By sigining up you agree to <a href="#">terms & condations</a>{" "}
              </p>
              <div onClick={handleJoin}>
                <Button buttonLabel={"Submit"} />
              </div>
            </form>
            <div className="inputItems1 ">
              <div className="input SignUpWiths">
                <button className="SignUpWith SignUpWithFb">
                  <TbBrandFacebook className="Icon" />
                  <span className="icon">Facebook</span>
                </button>

                <button className="SignUpWith SignUpWithGgl">
                  <AiOutlineGooglePlus className="Icon" />
                  <span className="icon">Google</span>
                </button>
              </div>
              <p>
                Already Members? <Link to={"/logpage"}>Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
