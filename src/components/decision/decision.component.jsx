import React from "react";
import './decision.style.scss';
import Textdec from "./decision.props";
import Registration from "../Button/button.component";
import {connect} from "react-redux";
class Decision extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const {content, title, block, block1, block2, block3, block4, block5, block6 ,block7, block8, } = this.props.businessDecisions;
        return (
            <div>
                <a name="decesion" />
                <div className="ssdecision">
                    <Textdec titledec={title} />
                    <Textdec titledec1={content}
                    />
                </div>
                <div className="sstop">
                    <div className="ssblock1" tabindex="1"><span className="text"><Textdec ssprops1={block} /> </span></div>
                    <div className="ssblock2" tabindex="1"><span className="text"><Textdec ssprops1={block1} /></span></div>
                    <div className="ssblock3" tabindex="1"><span className="text"><Textdec ssprops1={block2} /></span></div>
                </div>
                <div className="sscenter">
                    <div className="ssblock4" tabindex="1"><span className="text"><Textdec ssprops1={block3} /></span></div>
                    <div className="ssblock5" tabindex="1"><span className="text"><Textdec ssprops1={block4} /></span></div>
                    <div className="ssblock6" tabindex="1"><span className="text"><Textdec ssprops1={block5} /></span></div>
                </div>
                <div className="ssbottom">
                    <div className="ssblock7" tabindex="1"><span className="text"><Textdec ssprops1={block6} /></span></div>
                    <div className="ssblock8" tabindex="1"><span className="text"><Textdec ssprops1={block7} /> </span></div>
                    <div className="ssblock9" tabindex="1" > <span className="text"><Textdec ssprops1={block8} /></span></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({schema: {businessDecisions}}) => ({
    businessDecisions
});
export default connect(mapStateToProps, null)(Decision);