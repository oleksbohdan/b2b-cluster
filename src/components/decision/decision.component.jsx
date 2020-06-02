import React from "react";
import './decision.style.scss';
import Textdec from "./decision.props";
import Ssexit from "../secondbtn/secondbtn";
import Registration from "../Button/button.component";
import {connect} from "react-redux";
class Decision extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {content, title} = this.props.businessDecisions;
        return (
            <div>
                <div>
                    <Textdec titledec={title} />
                    <Textdec titledec1={content}
                    />
                </div>
                <div className="sstop">
                    <div className="ssblock1" tabindex="1"><Ssexit /> </div>
                    <div className="ssblock2" tabindex="1"></div>
                    <div className="ssblock3" tabindex="1"></div>
                </div>
                <div className="sscenter">
                    <div className="ssblock4" tabindex="1"></div>
                    <div className="ssblock5" tabindex="1"></div>
                    <div className="ssblock6" tabindex="1"></div>
                </div>
                <div className="ssbottom">
                    <div className="ssblock7" tabindex="1"></div>
                    <div className="ssblock8" tabindex="1"></div>
                    <div className="ssblock9" tabindex="1"><Registration /> </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({schema: {businessDecisions}}) => ({
    businessDecisions
});
export default connect(mapStateToProps, null)(Decision);