import React from "react";
import './our-partners.styles.scss';
import ImageBox from "../image-box/image-box.component";
import images from '../../assets/logos/logos';
import {connect} from "react-redux";

const OurPartners = ({schema}) =>{
    const {ourPartners} = schema;
    return(
    <div className="bo-partners-section">
        <h1 className='bo-partners-title'>{ourPartners.title}</h1>
        <div className="bo-partners-images-container">
            {
                images.map(pic => (
                    <ImageBox src={pic}/>
                ))
            }
        </div>
    </div>
)
};

const mapStateToProps = ({schema}) => ({
    schema
});

export default connect(mapStateToProps, null)(OurPartners);