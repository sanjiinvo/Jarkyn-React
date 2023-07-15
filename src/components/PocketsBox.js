import './Scss/PocketBox.scss'
import { Check, Check2, Check2All, XLg } from "react-bootstrap-icons";
import economqv from '../images/econom-qv.jpg'
import standart from '../images/photostandart-qv.jpg'
import comfort from  '../images/comfort-qv.png'
import design from '../images/design-qv.jpg'

function PocketsBox(){

    return(
        <div placeholder="" id="pockets" className="pockets-box">
            <p className="pockets-box-title">
                Пакеты услуг
            </p>
            <div className="pocket-box-econom">
                <div className="pocket-econom-right">
                    <div className="pocket-econom-img-box">
                        <img src={economqv} className="pocket-img pocket-img-econom"/>

                        <div className="not-included-list">
                            <ul>
                                <li><XLg color='red'/>Система "теплый пол"</li>
                                <li><XLg color='red'/>Система "умный дом"</li>
                                <li><XLg color='red'/>Потолок - по дизайн проекту</li>
                                <li><XLg color='red'/>Наливной самовыравнивающийся пол</li>

                            </ul>
                        </div>
                    </div>
                    <div className="included-list">
                    <ul>
                        <li><Check2All color='green'/>Штукатурка стен</li>
                        <li><Check2All color='green'/>Шпатлевка стен</li>
                        <li><Check2All color='green'/>Стяжка полов по маякам</li>
                        <li><Check2All color='green'/>Электромонтажные работы, сложность работ - ""Эконом""</li>
                        <li><Check2All color='green'/>Сантехнические работы, сложность работ - "Эконом"</li>
                        <li><Check2All color='green'/>Поклейка обоев</li>
                        <li><Check2All color='green'/>Покраска стен и потолков</li>
                        <li><Check2All color='green'/>Установка дверей</li>
                        <li><Check2All color='green'/>Монтаж напольных покрытий</li>
                        <li><Check2All color='green'/>Укладка плитки</li>
                        <li><Check2All color='green'/>Устройство оконных и дверных откосов</li>
                        <li><Check2All color='green'/>Уборка и вывоз мусора</li>
                    </ul>
                    </div>

                </div>
                <div className="pocket-econom-left">
                    <p className="pocket-name">
                        "Econom"
                    </p>
                    <p className="pocket-name-description">
                        Пакет от 20.000тг/кв.м
                    </p>
                </div>

            </div>
            <div className="pocket-box-standart">
                <div className="pocket-standart-right">
                    <div className="pocket-standart-img-box">
                        <img src={standart} className="pocket-img"/>

                        <div className="not-included-list">
                            <ul>
                            <li><XLg color='red'/>-Система "теплый пол"</li>
                            <li><XLg color='red'/>-Система "умный дом"</li>
                            <li><XLg color='red'/>-Потолок - по дизайн проекту</li>


                            </ul>
                        </div>
                    </div>
                    <div className="included-list">
                    <ul>
                    <li><Check2All color='green'/>Возведение перегородок</li>
                    <li><Check2All color='green'/>Штукатурка стен по маякам</li>
                    <li><Check2All color='green'/>Шпатлевка стен по маякам</li>
                    <li><Check2All color='green'/>Стяжка полов по маякам</li>
                    <li><Check2All color='green'/>Наливной самовыравнивающийся пол</li>
                    <li><Check2All color='green'/>Электромонтажные работы, сложность работ - "Стандарт"</li>
                    <li><Check2All color='green'/>Сантехнические работы, сложность работ - "Стандарт"</li>
                    <li><Check2All color='green'/>Поклейка обоев</li>
                    <li><Check2All color='green'/>Покраска стен и потолков</li>
                    <li><Check2All color='green'/>Установка дверей</li>
                    <li><Check2All color='green'/>Монтаж напольных покрытий</li>
                    <li><Check2All color='green'/>Укладка плитки</li>
                    <li><Check2All color='green'/>Устройство оконных и дверных откосов</li>
                    <li><Check2All color='green'/>Уборка и вывоз мусора</li>
                    </ul>
                    </div>

                </div>
                <div className="pocket-standart-left">
                    <p className="pocket-name">
                        "Standart"
                    </p>
                    <p className="pocket-name-description">
                        Пакет от 24.000тг/кв.м
                    </p>
                </div>

            </div>
            <div className="pocket-box-comfort">
                <div className="pocket-comfort-right">
                    <div className="pocket-comfort-img-box">
                        <img src={comfort} className="pocket-img"/>

                        <div className="not-included-list">
                            <ul>
                                <li><Check2All color='green'/>Штукатурка стен по маякам</li>
                                <li><Check2All color='green'/>Шпатлевка стен по маякам</li>
                                <li><Check2All color='green'/>Стяжка полов по маякам</li>
                                <li><Check2All color='green'/>Наливной самовыравнивающийся пол</li>

                            </ul>
                        </div>
                    </div>
                    <div className="included-list">
                    <ul>
                    <li><Check2All color='green'/>Возведение перегородок</li>
                    <li><Check2All color='green'/>Электромонтажные работы, сложность работ - "Comfort"</li>
                    <li><Check2All color='green'/>Сантехнические работы, сложность работ - "Comfort"</li>
                    <li><Check2All color='green'/>Поклейка обоев</li>
                    <li><Check2All color='green'/>Покраска стен и потолков</li>
                    <li><Check2All color='green'/>Установка дверей</li>
                    <li><Check2All color='green'/>Монтаж напольных покрытий</li>
                    <li><Check2All color='green'/>Укладка плитки</li>
                    <li><Check2All color='green'/>Устройство оконных и дверных откосов</li>
                    <li><Check2All color='green'/>-Система "теплый пол"</li>
                    <li><Check2All color='green'/>Система "умный дом"</li>
                    <li><Check2All color='green'/>-Потолок - по дизайн проекту</li>
                    <li><Check2All color='green'/>Уборка и вывоз мусора</li>
                    </ul>
                    </div>

                </div>
                <div className="pocket-comfort-left">
                    <p className="pocket-name">
                        "Комфорт"
                    </p>
                    <p className="pocket-name-description">
                        Пакет от 27.000тг/кв.м
                    </p>
                </div>

            </div>
            <div className="pocket-box-design">
                <div className="pocket-design-right">
                    <div className="pocket-design-img-box">
                        <img src={design} className="pocket-img"/>

                        <div className="not-included-list">
                            {/* <ul>
                                <li><XLg color='red'/></li>
                                <li><XLg color='red'/></li>
                                <li><XLg color='red'/></li>
                                <li><XLg color='red'/></li>
                                <li><XLg color='red'/></li>

                            </ul> */}
                        </div>
                    </div>
                    <div className="included-list">
                    <ul>
                    <li><Check2All color='green'/>Обговаривается с дизайнером</li>
                    <li><Check2All color='green'/>Уникальный дизайн вашей квартиры</li>
                    <li><Check2All color='green'/>Услуги дизайнера от 3000тг/за кв м.</li>
                    </ul>
                    </div>

                </div>
                <div className="pocket-design-left">
                    <p className="pocket-name">
                        "Комфорт"
                    </p>
                    <p className="pocket-name-description">
                        Пакет от 37.000тг/кв.м
                    </p>
                </div>

            </div>
        </div>
    )
}

export default PocketsBox