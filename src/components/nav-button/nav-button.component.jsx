import React from "react";
import './nav-button.styles.scss'

const NavButton = ({label, href}) => (
    <a className='bo-nav-button' href={href}>
        {label}
    </a>
);

export default NavButton;