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
      <div class="containers">
        <img src={SignUpImg} alt="" class="SignUpPageImg" />
        <div class="container">
          <div class="navBar">
            <HiArrowNarrowLeft class="backArrow" />
            <span class="returnHome">Back</span>
          </div>
          <div class="inputItems">
            <div class="input">
              <BsPersonFill />
              <input
                type="text"
                placeholder="Full Name"
                class="inputBox"
                required
              />
            </div>
            <div class="input">
              <AiFillMobile />
              <input
                type="number"
                placeholder="Mobile Number"
                class="inputBox"
                required
              />
            </div>
            <div class="input">
              <MdEmail />
              <input
                type="email"
                placeholder="Email"
                class="inputBox"
                required
              />
            </div>
            <div class="input">
              <FaRegCalendarAlt />
              <input type="date" class="inputBox" />
            </div>
            <div class="input radioBtn">
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
            <div class="input">
              <FaLock />
              <input
                type="password"
                placeholder="New Password"
                required
                class="inputBox"
              />
            </div>
            <div class="input">
              <FaLock />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                class="inputBox"
              />
            </div>
            <p class="SignUpDefined">
              By sigining up you agree to <a href="#">terms & condations</a>{" "}
            </p>
            <div class="input personInfos">
              <button class="personInfo">Join</button>
            </div>
            <div class="input SignUpWiths">
              <button class="SignUpWith SignUpWithFb">
                <TbBrandFacebook class="Icon" />
                <span class="icon">Facebook</span>
              </button>

              <button class="SignUpWith SignUpWithGgl">
                <AiOutlineGooglePlus class="Icon" />
                <span class="icon">Google</span>
              </button>
            </div>
            <p class="siginUp">
              Already Members? <a href="#">Login Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
