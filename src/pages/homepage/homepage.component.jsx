import React from "react";
import './homepage.styles.scss';
import Business from "../../components/business/business.component";
import Aboutus from "../../components/aboutus/aboutus.component";


const Homepage = () => (
    <div className='homepage'>
        <Business 
            content='Шукаєш рішення для покращення бізнесу?' 
            content1='Зареєструйся на безкоштовну консультацію'
        />
        <Aboutus />
    </div>
);

export default Homepage;