import React, {useState} from "react";
import './switcher.styles.scss';

const Switcher = () => {
    const [position, setPosition] = useState(true);
    console.log(position);
    return(
        <label className="switcher">
            <input type="checkbox" checked={position}  onChange={ e => setPosition(e.target.checked)}/>
                <span className="switch-left">UK</span>
                <span className="switch-right">EN</span>
        </label>
    );
};

export default Switcher;