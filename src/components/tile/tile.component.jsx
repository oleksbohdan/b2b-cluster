import React from "react";
import './tile.styles.scss';

const Tile = ({tileTitle, tileImg}) => (
    <div className="tile">
        <span className="title">{tileTitle}</span>
    </div>
);
export default Tile;