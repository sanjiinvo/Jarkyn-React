import { useState } from "react";
import './Scss/Calculator.scss'

function MainCalculator(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        typeOfArea: 'Тип Помещения',
        range: '',
        tel: '',
        roomCount: '',
        selfdesign: 'да',
        pricetophp: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Ваш код для отправки данных формы
    
        // Сброс формы после отправки
        setFormData({
          name: '',
          email: '',
          typeOfArea: 'тип помещения',
          range: '',
          tel: '',
          roomCount: '',
          selfdesign: 'да',
          pricetophp: '',
        });
      };
    
      return (
        <form className="Main-Calc" id="Main-Calculator" onSubmit={handleSubmit}>

          <p className="Calc-title"> Калькулятор </p>
                <div className="Calc-Part">
                  <div className="RoomsAndType">
                  <select
                          className="TypeOfArea"
                          name="typeOfArea"
                          value={formData.typeOfArea}
                          onChange={handleChange}
                          required
                        >
                          <option value="Тип Помещения">Тип Помещения</option>
                          <option value="новостройка">Новостройка</option>
                          <option value="вторичное">Вторичное</option>
                        </select>
                        <select
                         className="Room-Count"
                         name="roomCount"
                         value={formData.roomCount}
                         onChange={handleChange}
                         required>         
                                  <option value="">Количество комнат</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4+">4+</option>
                                </select>
                                <input
                                    className="Room-Range"
                                    type="text"
                                    name="range"
                                    placeholder="Квадратура"
                                    value={formData.range}
                                    onChange={handleChange}
                                    required
                                  />

                  </div>
                  <div className="Design-Quest">
            <p className="Design-Question">Есть ли у вас дизайн проекта?</p>
            <select
            className="Pers-Design"
            name="selfdesign"
            value={formData.selfdesign}
            onChange={handleChange}
            required >
            <option value="нет">Нет</option>
            <option value="да">Да</option>
            </select>
              </div>
                </div>
                            <div className="PersInfo-Part">
                                              <input
                                                type="text"
                                                name="name"
                                                placeholder="Имя"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                              />
                                              <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                              />
                                              
                                              <input
                                                type="tel"
                                                name="tel"
                                                placeholder="Телефон"
                                                value={formData.tel}
                                                onChange={handleChange}
                                                required
                                              />
                            </div>

          <div className="TotalPrce-Box">
            <p className="TotalPrice-title">Примерная стоимость ремонта (без материалов):</p>
          <p className="TotalPrice">{formData.pricetophp} тг</p>
          </div>
          
          <input
            type="text"
            name="pricetophp"
            placeholder="Примерная стоимость"
            value={formData.pricetophp}
            onChange={handleChange}
            required
            hidden
          />
          
          <button type="submit">Отправить</button>
        </form>
      );
    }
    
    export default MainCalculator;
