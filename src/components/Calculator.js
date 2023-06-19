import { useState } from "react";


function Calculator(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        typeOfArea: 'новостройка',
        range: '',
        tel: '',
        roomCount: '1',
        selfdesign: 'нет',
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
          typeOfArea: 'новостройка',
          range: '',
          tel: '',
          roomCount: '1',
          selfdesign: 'нет',
          pricetophp: '',
        });
      };
    
      return (
        <form onSubmit={handleSubmit}>
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
          <select
            name="typeOfArea"
            value={formData.typeOfArea}
            onChange={handleChange}
            required
          >
            <option value="новостройка">Новостройка</option>
            <option value="вторичное">Вторичное</option>
          </select>
          <input
            type="text"
            name="range"
            placeholder="Квадратура"
            value={formData.range}
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
          <select
            name="roomCount"
            value={formData.roomCount}
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
          <select
            name="selfdesign"
            value={formData.selfdesign}
            onChange={handleChange}
            required
          >
            <option value="нет">Нет</option>
            <option value="да">Да</option>
          </select>
          <input
            type="text"
            name="pricetophp"
            placeholder="Примерная стоимость"
            value={formData.pricetophp}
            onChange={handleChange}
            required
          />
          <button type="submit">Отправить</button>
        </form>
      );
    }
    
    export default Calculator;
