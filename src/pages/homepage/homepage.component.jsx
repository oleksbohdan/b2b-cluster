import React from "react";
import './homepage.styles.scss';
import NavBar from "../../components/navbar/navbar.component";
import OurPartners from "../../components/our-partners/our-partners.component";

const Homepage = () => (
    <>
    <NavBar/>
    <div className='homepage'>

        <OurPartners partnersTitle='Наші партнери'/>
    </div>
    </>
);

export default Homepage;