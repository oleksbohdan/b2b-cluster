import React from "react";
import './homepage.styles.scss';
import Business from "../../components/business/business.component";
import Aboutus from "../../components/aboutus/aboutus.component";
import NavBar from "../../components/navbar/navbar.component";
import OurPartners from "../../components/our-partners/our-partners.component";

const Homepage = () => (
    <>
    <NavBar/>
    <div className='homepage'>
        <Business 
            content='Шукаєш рішення для покращення бізнесу?' 
            content1='Зареєструйся на безкоштовну консультацію'
        />
        <OurPartners partnersTitle='Наші партнери'/>
        <Aboutus />
    </div>
    </>
);

export default Homepage;