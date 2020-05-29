import React from "react";
import './navbar.styles.scss';
import Logo from "../logo/logo.component";
import NavButton from "../nav-button/nav-button.component";
import Social from "../social/social.component";
import Instagram from '../../assets/instagram.svg'
import Facebook from '../../assets/facebook.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Switcher from "../switcher/switcher.component";

const NavBar = () => (
    <div className='bo-navbar-container'>
        <div className="bo-navbar">
            <Logo/>
            <div className="bo-buttons">
                <NavButton label="Головна" href='#'/>
                <NavButton label="Про Нас" href='#'/>
                <NavButton label="Рішення для бізнесу" href='#'/>
                <NavButton label="Реєстрація" href='#'/>
                <NavButton label="Курси програмування" href='#'/>
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

export default NavBar;