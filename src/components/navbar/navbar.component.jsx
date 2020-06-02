import React from "react";
import './navbar.styles.scss';
import Logo from "../logo/logo.component";
import NavButton from "../nav-button/nav-button.component";
import Social from "../social/social.component";
import Instagram from '../../assets/instagram.svg'
import Facebook from '../../assets/facebook.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Switcher from "../switcher/switcher.component";
import {connect} from 'react-redux';

const NavBar = ({schema}) => {
    const {navBar} = schema;
    return(
    <div className='bo-navbar-container'>
        <div className="bo-navbar">
            <Logo/>
            <div className="bo-buttons">
                {
                    navBar.options && navBar.options.length ?
                        navBar.options.map(({text, link}, index) => (
                            <NavButton
                                label={text}
                                href={link}
                                key={index}
                            />
                        ))
                        : null
                }

            </div>
            <div className="bo-socials-container">
                <Social url={Instagram} href='#'/>
                <Social url={Facebook} href='#'/>
                <Social url={LinkedIn} href='#'/>
            </div>
            <Switcher/>
        </div>
    </div>
);
};

const mapStateToProps = ({schema})=>({
    schema
});

export default connect(mapStateToProps, null)(NavBar);