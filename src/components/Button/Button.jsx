import React from 'react';
import "./Button.css"

const Button = ({buttonName}) => {
    return <div>
        <div className="buttonContainer">
              <button className="button" type="submit">
               {buttonName}
              </button>
            </div>
    </div>
}
export default Button;