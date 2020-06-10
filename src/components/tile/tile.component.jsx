import React from "react";
import './tile.styles.scss';

const Tile = ({tileTitle, tileImg, className, ...rest}) => (
    <div className="bo-tile">
        <img className='background' src={`${tileImg}`}/>
        <div className={`title ${className ? className : ''}`} {...rest}>{tileTitle}</div>
    </div>
);
export default Tile;