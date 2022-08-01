import React from "react";
import "./SignUpPage.css";
import SignUpImg from "../../Assets/BookStoreSignUp.jpg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { AiFillMobile } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { AiOutlineGooglePlus } from "react-icons/ai";

const SignUpPage = () => {
  return (
    <div>
          <div className="navBar">
            <HiArrowNarrowLeft className="backArrow" />
            <span className="returnHome">Back</span>
          </div>
      <div className="containers"> 
        <img src={SignUpImg} alt="" className="SignUpPageImg" />
        <div className="container">
          <form action="_blank" className="inputItems">
            <div className="input">
              <BsPersonFill />
              <input
                type="text"
                placeholder="Full Name"
                className="inputBox"
                required
              />
            </div>
            <div className="input">
              <AiFillMobile />
              <input
                type="number"
                placeholder="Mobile Number"
                className="inputBox"
                required
              />
            </div>
            <div className="input">
              <MdEmail />
              <input
                type="email"
                placeholder="Email"
                className="inputBox"
                required
              />
            </div>
            <div className="input">
              <FaRegCalendarAlt />
              <input type="date" className="inputBox dateIcon" />
            </div>
            <div className="input radioBtn">
              <div>
                <input type="radio" id="male" name="sex" value="male" />
                <label for="male">Male</label>
              </div>
              <div>
                <input type="radio" id="female" name="sex" value="female" />
                <label for="female">Female</label>
              </div>
              <div>
                <input type="radio" id="other" name="sex" value="other" />
                <label for="other">Other</label>
              </div>
            </div>
            <div className="input">
              <FaLock />
              <input
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
            <div className="input personInfos">
              <button className="personInfo">Join</button>
            </div>
          </form>
          <div class="inputItems1 ">

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
            <p className="siginUp">
              Already Members? <a href="#">Login Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
