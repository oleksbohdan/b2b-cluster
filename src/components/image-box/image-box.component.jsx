import React from "react";
import './image-box.component.scss';

const ImageBox = ({src}) => (
    <div className='bo-image-box'>
        <img className='bo-box-inner-image' src={src} alt="partner-image"/>
    </div>
);

export default ImageBox;