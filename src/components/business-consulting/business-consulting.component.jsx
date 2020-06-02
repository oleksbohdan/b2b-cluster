import React from "react";
import './business-consulting.styles.scss';
import Tile from "../tile/tile.component";
import {connect} from "react-redux";

const BusinessConsulting = ({schema}) =>{
    const {businessConsulting} = schema;
    return(
    <div className="business-consulting">
        <h1 className='business-consulting-title'>{businessConsulting.title}</h1>
        <div className="tiles-container">
            {
                businessConsulting.tiles && businessConsulting.tiles.length
                    ?businessConsulting.tiles.map(({tileTitle}) => (
                        <Tile
                            key={tileTitle}
                            tileTitle={tileTitle}
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