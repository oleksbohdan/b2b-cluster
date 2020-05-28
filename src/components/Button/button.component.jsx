import React from "react";
import './button.style.scss';

class Registration extends React.Component {
    render() {
        return (
            <form className="ssbtn">
                <button
                    className="ssfirstbtn"
                >
                <span className="sstextbtn">Зареєструватися</span>
                </button>
            </form>
        )
    }
}
export default Registration;
