import React from "react";
import "./navBar.css"
const TopBar = ()=>{
    return(
        <div className="navBar">
        <Link to="/" className="BackToHome">
          <HiArrowNarrowLeft className="backArrow" />
          <span className="returnHome">Back</span>
        </Link>
      </div>
    );
}
export default TopBar;