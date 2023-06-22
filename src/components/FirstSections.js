import { Clipboard2Check } from "react-bootstrap-icons";
import './Scss/AboutUs.scss'

function AboutUs(){
    return(
        <div id="aboutus" className="aboutUs">
            <div className="top-aboutUs">
            <div className="left-top-aboutUs">
            <p className="title-aboutUs">
                JarkynUI - Ремонт 
            </p>
            <p className="title-aboutUs">
                квартир под ключ
            </p>
            <p className="description-aboutUs">
                У нас есть 4 пакета услуг и работ по договору
            </p>
            </div>
            <div className="right-top-aboutUs">
                <ul>
                    <li className="specials-aboutUs"><Clipboard2Check color="orange"/> Качественно и быстро</li>
                    <li className="specials-aboutUs"><Clipboard2Check color="orange"/> Упаковка и вынос мусора</li>
                    <li className="specials-aboutUs"><Clipboard2Check color="orange"/> Подбор и закуп материала</li>
                    <li className="specials-aboutUs"><Clipboard2Check color="orange"/> Бесплатный выезд на замеры</li>

                </ul>
            </div>
            </div>
            <hr className="hr-line-aboutUs"/>
            <div className="bot-aboutUS">
            <div className="states-aboutUs">
            <p className="state-number">
                100+
            </p>
            <p className="state-text">
                Довольных покупателей
            </p>
            </div>
            <div className="states-aboutUs">
            <p className="state-number">
                153
            </p>
            <p className="state-text">
                Довольных Клиентов
            </p>
            </div>
            <div className="states-aboutUs">
            <p className="state-number">
                15
            </p>
            <p className="state-text">
                Квартир в работе
            </p>
            </div>
            <div className="states-aboutUs">
            <p className="state-number">
                10
            </p>
            <p className="state-text">
                Рабочих групп
            </p>
            </div>
            </div>
        </div>
    )
}

export default AboutUs