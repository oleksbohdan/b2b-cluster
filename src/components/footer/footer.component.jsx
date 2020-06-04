import React from "react";
import './footer.style.scss';
import Footprops from "./footerprops";
import {connect} from "react-redux";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, contentRight, contentLeft} = this.props.footer;
        return (
            <div className="generalfooter">
                <div className="titlefooter">
                <Footprops titlefoot={title} />
                </div>
                <div className="ssgeneralinfo">
                    <div className="info1">
                        <div className="footlogo"></div>
                        {
                            contentLeft && contentLeft.length ?
                                contentLeft.map((line, index) => (
                                    <Footprops footer1={line} key={index}/>
                                ))
                                :null
                        }
                    </div>
                    <div className="info2">
                        {
                            contentRight && contentRight.length ?
                                contentRight.map((line, index) => (
                                    <Footprops footer11={line} key={index}/>
                                ))
                                :null
                        }
                    </div>
                </div>
            
            </div>
        )
    }
}

const mapStateToProps = ({schema: {footer}}) => ({
    footer
});

export default connect(mapStateToProps, null)(Footer);