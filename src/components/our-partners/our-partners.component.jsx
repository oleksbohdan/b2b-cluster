import React from "react";
import './our-partners.styles.scss';
import images from '../../assets/logos/logos';
import {connect} from "react-redux";
import Carousel from "../carousel/carousel.component";
import SlickSlider from "../slick-slider/slick-slider.component";

const OurPartners = ({schema}) =>{
    const {ourPartners} = schema;
    return(
    <div className="bo-partners-section">
        <h1 className='bo-partners-title'>{ourPartners.title}</h1>
        <Carousel images={images}/>
        <SlickSlider images={images}/>
    </div>
)
};

const mapStateToProps = ({schema}) => ({
    schema
});

export default connect(mapStateToProps, null)(OurPartners);