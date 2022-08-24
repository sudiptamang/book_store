import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import "./SellsPage.css"

const SellsPage = () => {
  return <div>
    <NavBar/>
    <div className="SellsContainers">
      <h1 className="SellsPageWelCome">Welcome to the <span className="WelCome">Book Store</span>  family!</h1>
      <p className="SellInfo">Once you and the our book store come to an agreement, you should discuss the transition with the rest of your account.</p>
     <div className="SellsContainer">
      <h2 className="ImportImg">Upload Your Book's Image</h2>
        <input type="file" id="file-input" width="40px" />
        <div className="sellsInputs">

      <div >
        <div className="BookName">Name </div><input type="text" className=" BookInfo" placeholder=" Book's Name"/>
      </div>      
      <div>
      <div className="BookName">Title </div>  <input type="text" className=" BookInfo" placeholder=" Book's Title"/>
      </div>     
 
       <div>
       <div className="BookName"> Authors </div> <input type="text" className=" BookInfo" placeholder=" Author's Name"/>
        </div> 
            
        <div>
      <div className="BookName">Price </div> <input type="number" className=" BookInfo" placeholder="Price"/>
      </div>  
       <div>
      <div className="BookName">Quantity </div> <input type="number" className=" BookInfo" placeholder="Quantity"/>
      </div> 
      </div>
        <div className="sellButton"><Button buttonName={ "Sell"} /></div>
     </div>
    </div>
  </div>;
};
export default SellsPage;
