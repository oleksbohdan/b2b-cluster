import React from "react";
import './tile.styles.scss';

const Tile = ({tileTitle, tileImg}) => (
    <div className="bo-tile">
        <img className='background' src={`${tileImg}`}/>
        <div className="title">{tileTitle}</div>
    </div>
);
export default Tile;