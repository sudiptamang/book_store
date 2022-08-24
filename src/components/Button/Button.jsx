import React from 'react';
import "./Button.css"

const Button = ({buttonLabel}) => {
    return <div>
        <div className="buttonContainer">
              <button className="button" type="submit">
               {buttonLabel}
              </button>
            </div>
    </div>
}
export default Button;