import React from "react";
import './aboutus.style.scss';
import Uscontent from "./aboutuscontent";
import Titless from "./titleaboutus";
import {connect} from "react-redux";

class Aboutus extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {aboutUs} = this.props.schema;
        return(
            <div className="sscontentabout">
                <a name="aboutus" />
                <div className="ssaboutus">
                </div>
                <div className="sstext3">
                    <div className="ssaboutIT">
                        <div className="ssspan"><Titless sstitle={aboutUs.title}/> </div>
                    <Uscontent text3={aboutUs.content}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({schema}) => ({
    schema
});

export default connect(mapStateToProps, null)(Aboutus);