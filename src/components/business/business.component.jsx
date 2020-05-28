import React from "react";
import './business.style.scss';
import Registration from "../Button/button.component";

const Business = ({content, content1}) => (
    <div className="sscontent">
        <div className="sscontent1">
            <div className="sstext">
                {content}
            </div>
            <div className="sstext1">
                {content1}
            </div>
            <Registration />
            
        </div>
        <div className="ssexamp"> 
        </div>
    </div>
)
export default Business;