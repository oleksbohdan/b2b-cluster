import React from "react";
import './homepage.styles.scss';
import Business from "../../components/business/business.component";
import Aboutus from "../../components/aboutus/aboutus.component";
import NavBar from "../../components/navbar/navbar.component";
import OurPartners from "../../components/our-partners/our-partners.component";
import BusinessConsulting from "../../components/business-consulting/business-consulting.component";
import Form from "../../components/form/form.component";

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
        <BusinessConsulting
            title='Бізнес консультування для'
            tiles={
                [
                    {tileTitle: 'Власників бізнесу'},
                    {tileTitle: 'ТОП-менеджерів та управлінців'},
                    {tileTitle: 'Людей, які на початку кар\'єрного шляху'},
                    {tileTitle: 'Тренерів'},
                    {tileTitle: 'Коучерів'},
                    {tileTitle: 'Менторів'},
                    {tileTitle: 'Бажаючих відкрити власну справу'},
                    {tileTitle: 'Приватних підприємців'},
                    {tileTitle: 'Залишити заявку'},
                ]
            }
        />
        <Form/>
    </div>
    </>
);

export default Homepage;