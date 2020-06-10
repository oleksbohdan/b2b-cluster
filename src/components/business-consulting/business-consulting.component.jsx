import React from "react";
import './business-consulting.styles.scss';
import Tile from "../tile/tile.component";
import {connect} from "react-redux";
import illustrations from "../../assets/illustrations/illustrations.js";

const handleClick = () => {
    window.location.href='#form'
};

const BusinessConsulting = ({schema}) =>{
    const {businessConsulting} = schema;
    return(
    <div className="business-consulting">
        <h1 className='business-consulting-title'>{businessConsulting.title}</h1>
        <div className="tiles-container">
            {
                businessConsulting.tiles && businessConsulting.tiles.length
                    ?businessConsulting.tiles.map(({tileTitle}, index) => (
                        <Tile
                            key={tileTitle}
                            tileTitle={tileTitle}
                            tileImg={illustrations[index]}
                            onClick={index === 8 ? handleClick : null}
                            className={index === 8 ? 'clickable' : null}
                        />
                    ))
                    :null
            }
        </div>
    </div>
)};

const mapStateToProps = ({schema}) => ({
   schema
});
export default connect(mapStateToProps, null)(BusinessConsulting);