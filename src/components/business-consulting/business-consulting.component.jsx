import React from "react";
import './business-consulting.styles.scss';
import Tile from "../tile/tile.component";

const BusinessConsulting = ({title, tiles}) => (
    <div className="business-consulting">
        <h1 className='business-consulting-title'>{title}</h1>
        <div className="tiles-container">
            {
                tiles && tiles.length
                    ?tiles.map((options) => (
                        <Tile
                            key={options.tileTitle}
                            {...options}
                        />
                    ))
                    :null
            }
        </div>
    </div>
);
export default BusinessConsulting;