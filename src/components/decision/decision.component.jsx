import React from "react";
import './decision.style.scss';
import Textdec from "./decision.props";
import Ssexit from "../secondbtn/secondbtn";
import Registration from "../Button/button.component";
class Decision extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Textdec titledec="Рішення для бізнесу" />
                    <Textdec titledec1="ІТ Кластер Академія - чудовий приклад командної роботи керівників та засновників Івано-Франківських ІТ компаній! 
                        Це багаторічний досвід який приносить результат. Ми готові поділитися ним та допомогти українському бізнесу зростати.
                        Виберіть для себе програму та реєстр" 
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
export default Decision;