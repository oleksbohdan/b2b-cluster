import React from "react";
import './footer.style.scss';
import Footprops from "./footerprops";

class Footer extends React.Component {
    render() {
        return (
            <div className="generalfooter">
                <div className="titlefooter">
                <Footprops titlefoot='Зв’‎‎‎язок з нами' />
                </div>
                <div className="ssgeneralinfo">
                    <div className="info1">
                        <Footprops footer1='IT Cluster Academy online' />
                        <Footprops footer2='Телефон: +38 (063) 674 12 19' />
                        <Footprops footer3='Пошта: recruitacademyit@gmail.com' />
                    </div>
                    <div className="info2">
                        <Footprops footer11='IT Cluster Academy' />
                        <Footprops footer12='Телефон: +38 (098) 655 45 29' /> 
                        <Footprops footer13='Пошта: itcaedu.online@gmail.com' />
                    </div>
                </div>
            
            </div>
        )
    }
}
export default Footer;