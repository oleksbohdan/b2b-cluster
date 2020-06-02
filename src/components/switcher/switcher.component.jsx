import React, {useState} from "react";
import './switcher.styles.scss';
import changeSchema from "../../redux/actions/changeSchema";
import {connect} from "react-redux";

const Switcher = ({changeSchema}) => {
    const [position, setPosition] = useState(true);
    const handleChange = e => {
        const {checked} = e.target;
        setPosition(checked);
        changeSchema();
    };
    return(
        <label className="switcher">
            <input type="checkbox" checked={position}  onChange={handleChange}/>
                <span className="switch-left">UK</span>
                <span className="switch-right">EN</span>
        </label>
    );
};

const mapDispatchToProps = dispatch => ({
   changeSchema: () => dispatch(changeSchema())
});

export default connect(null, mapDispatchToProps)(Switcher);