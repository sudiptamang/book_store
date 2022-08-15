import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div>
      <div className="contactcontainer">
        <h2>Contact Us</h2>
        <h5>Any question or remarks? Just write us a message!</h5>
      </div>
      <div className="contactnavbar">
        <div className="ContactDetails">
          <div>
            <div className="ContactInformation">
              <p className="information">Contact Information</p>
              <p className="paragaph">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="Details">
                <div className="Contactnumber">
                  <BsTelephoneFill />
                  <span className="number">+0123 4567 8910</span>
                </div>
                <div className="Contactemail">
                  <AiTwotoneMail />
                  <span className="email">BookStore@123gmail.com</span>
                </div>
                <div>
                  <GrLocation />
                  <span className="location">Suryabinayak,Pandubazar</span>
                </div>
              </div>
              <div className="icon">
                <GrFacebookOption className="facebook" />
                <BsTwitter className="twiter" />
                <BsInstagram />
              </div>
            </div>
          </div>
          <div>
            <div className="contactBorder">
              <div className="ContactInput">
                <input className="FullName" placeholder="FullName" />
                <input className="PhoneNumber" placeholder="PhoneNumber" />
                <input className="EmailAdress" placeholder="EmailAdress" />
                <input type="text" placeholder="Subject" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
