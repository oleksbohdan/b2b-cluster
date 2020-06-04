import React from "react";
import './button.style.scss';
import Textbtn from "./btntext";

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form className="ssbtn" method="get" action="#form">
                <button
                    className="ssfirstbtn"
                >
                <span className="sstextbtn"><Textbtn text={this.props.innerText} /> </span>
                </button>
            </form>
        )
    }
}
export default Registration;
