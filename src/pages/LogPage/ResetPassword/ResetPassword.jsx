import React from "react";
import BackBar from "../../../components/BackBar/BackBar";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const navigate = useNavigate();

  const handleJoin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/user/password/forgot", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/PinCodePage");
        } else if (email == "" || email == undefined) {
          setReqEmail("Please, Enter your email.");
        } else {
          setMessage(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <BackBar />
      <h1 className="ForgotPassword">FORGOT LOGIN PASSWORD?</h1>
      <div className="resetpassword">
        <h3 className="ForgotEmail">
          Please enter the Email that you want to reset the password.
        </h3>
        <input
          className="ForgotInput"
          type="email"
          placeholder="Enter your Email...."
          required
        />
        <Link to={"/PinCodePage"}>
          <div>
            <button className="verify">Continue</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
