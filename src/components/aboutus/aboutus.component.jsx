import React from "react";
import './aboutus.style.scss';
import Uscontent from "./aboutuscontent";
import Titless from "./titleaboutus";
class Aboutus extends React.Component {
    render() {
        return(
            <div className="sscontentabout">
                <div className="ssaboutus">
                </div>
                <div className="sstext3">
                    <div className="ssaboutIT">
                        <div className="ssspan"><Titless sstitle='Про Нас'/> </div>
                    <Uscontent text3='ІТ Cluster Academy — один з найуспішніших проектів створених 
                    Івано-Франківським ІТ кластером в 2016 році. Головною метою академії є забезпечення 
                    українських компаній компетентними спеціалістами та розвиток ІТ- індустрії України. 
                    Наразі Айті Кластер бере активну участь у допомозі працевлаштування для ветеранів АТО / ООС, 
                    влаштуванні спортивних марафонів та підтримці лікарень під час Пандемії COVID-19.'
                    />
                    </div>
                </div>
            </div>
        )
    }
}
export default Aboutus;