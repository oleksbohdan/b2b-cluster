import React from "react";
import './button.style.scss';
import Textbtn from "./btntext";

class Registration extends React.Component {
    render() {
        return (
            <form className="ssbtn">
                <button
                    className="ssfirstbtn"
                >
                <span className="sstextbtn"><Textbtn text2='Зареєструватися' /> </span>
                </button>
            </form>
        )
    }
}
export default Registration;
