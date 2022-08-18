import React from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";
import "./BackBar.css"
import { Link } from "react-router-dom";



const BackBar = () => {
  
    return <div className="header">
        <Link to={"/"}>
        <div className="backSection">
          <HiArrowNarrowLeft size={"40px"} />
          <span  className='BackButton'>Back</span>
        </div>
        </Link>
      </div>
}
export default BackBar;