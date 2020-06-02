import React from "react";
import './homepage.styles.scss';
import Business from "../../components/business/business.component";
import Aboutus from "../../components/aboutus/aboutus.component";
import NavBar from "../../components/navbar/navbar.component";
import OurPartners from "../../components/our-partners/our-partners.component";

import BusinessConsulting from "../../components/business-consulting/business-consulting.component";
import Form from "../../components/form/form.component";
import Decision from "../../components/decision/decision.component";
import Footer from "../../components/footer/footer.component";

const Homepage = () => (
    <>
    <NavBar/>
    <div className='homepage'>
        <Business
        />
        <OurPartners/>
        <Aboutus />
        <BusinessConsulting/>
        <Decision />
        <Form/>
        <Footer />
    </div>
    </>
);

export default Homepage;