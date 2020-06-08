import React, {createRef, useEffect, useRef, useState} from "react";
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
    const menu = useRef(null);

    const handle = (current) => {
        current.style.transition = '300ms ease all';
    };

    const handleOpen = () => {
      const {current} = menu;
      handle(current);
      current.className = 'bo-navbar-container mobile-opened';
    };

    const handleClose = () => {
        const {current} = menu;
        handle(current);
        current.className = 'bo-navbar-container mobile-closed';
    };

    useEffect(() => {
        const {current} = menu;
        current.addEventListener('transitionend', () => {
            current.style.transition = 'none';
        })
    });

    return(
    <>
        <div className="open-menu" onClick={handleOpen} >
            <span/>
            <span/>
            <span/>
        </div>
    <div className='bo-navbar-container mobile-closed' ref={menu}>
        <div className="bo-navbar">
            <Logo/>
            <button className='close' onClick={handleClose}>❌</button>
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
                <Social url={Instagram} href='https://www.instagram.com/itcluster_academy/?hl=ru'/>
                <Social url={Facebook} href='https://www.facebook.com/itclusteracademy/'/>
                <Social url={LinkedIn} href='https://ua.linkedin.com/company/it-cluster-academy'/>
            </div>
            <Switcher/>
        </div>
    </div>
    </>
);
};

const mapStateToProps = ({schema})=>({
    schema
});

export default connect(mapStateToProps, null)(NavBar);