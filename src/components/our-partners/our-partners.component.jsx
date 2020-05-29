import React from "react";
import './our-partners.styles.scss';
import ImageBox from "../image-box/image-box.component";
import images from '../../assets/logos/logos';

const OurPartners = ({partnersTitle}) => (
    <div className="bo-partners-section">
        <h1 className='bo-partners-title'>{partnersTitle}</h1>
        <div className="bo-partners-images-container">
            {
                images.map(pic => (
                    <ImageBox src={pic}/>
                ))
            }
        </div>
    </div>
);

export default OurPartners;