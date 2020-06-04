import React from "react";
import './business.style.scss';
import Registration from "../Button/button.component";
import {connect} from "react-redux";


const Business = ({schema}) => {
    const {improveBusiness} = schema;
    return(
    <div className="sscontent">
        
        <div className="sscontent1">
            <div className="sstext">
                {improveBusiness.contentHeader}
            </div>
            <div className="sstext1">
                {improveBusiness.content}
            </div>
            <Registration innerText={improveBusiness.register} />
             </div>
        <div className="ssexamp"> 
        </div>
    </div>
);
};

const mapStateToProps = ({schema}) => ({
    schema
});
export default connect(mapStateToProps,null)(Business);