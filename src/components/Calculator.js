import { useEffect, useState } from "react";
import './Scss/Calculator.scss'
import axios from "axios";
import { response } from "har-validator";
import economSelect from '../images/newpocket/neweconomphoto.jpg'
import standartSelect from '../images/newpocket/newstandartphoto.jpg'
import comfortSelect from '../images/newpocket/newocomfortphoto.jpg'
import designSelect from '../images/newpocket/Newdesignphoto.jpg'



function MainCalculator(){

  let TotalPrice = 0

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        typeOfArea: 'новостройка',
        range: '',
        tel: '',
        roomCount: '',
        selfdesign: 'да',
        pricetophp: TotalPrice,
        remontType: 'econom'
      });

      const [selectRemont, setSelectRemont] = useState(1)

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      
      const TestMail = (e) =>{
        console.log(formData);
        e.preventDefault()
      }

      const ToSendMail = (e) => {

        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("typeOfArea", formData.typeOfArea);
        formDataToSend.append("range", formData.range);
        formDataToSend.append("tel", formData.tel);
        formDataToSend.append("roomCount", formData.roomCount);
        formDataToSend.append("selfdesign", formData.selfdesign);
        formDataToSend.append("pricetophp", formData.pricetophp);
        formDataToSend.append("remontType", formData.remontType)

        axios.post('./helpers/mail.php', formDataToSend)
        .then((response)=>{
          console.log(response.data);
        console.log(`lastdaata`, formDataToSend);
        console.log( `just data`,formData);

        })
        .catch((error)=>{
          console.log(error);
        console.log(`lastdaata`, formDataToSend);

        })

        


    
        // Ваш код для отправки данных формы
    
        // Сброс формы после отправки
        setFormData({
          name: '',
          email: '',
          typeOfArea: 'Тип помещения',
          range: '',
          tel: '',
          roomCount: '',
          selfdesign: 'да',
          pricetophp: '',
          remontType: 'econom'
        });
      };

      const SelectPocket = (num) => {
        if(num===1){
          setFormData({
            ...formData,
            remontType: 'econom',
          });
          setSelectRemont(1)


        } if (num === 2){
          setFormData({
            ...formData,
            remontType: 'standart',
          });
          setSelectRemont(2)

        } if(num === 3){
          setFormData({
            ...formData,
            remontType: 'comfort',
          });
          setSelectRemont(3)

        } if (num === 4){
          setFormData({
            ...formData,
            remontType: 'design',
          });
          setSelectRemont(4)

        }

        }
      // action="./helpers/mail.php"
      
      useEffect(()=>{
        calculateCost()
        console.log(formData);
        console.log(`price`, TotalPrice);
      },[formData, selectRemont])
    
      const calculateCost = () => {
        console.log(111);
        TotalPrice = (formData.range * (CurrentDesign() + CurrentPocketPrice() + CurrentTypeOfArea()))
        // console.log(formData.range, CurrentDesign, CurrentPocketPrice, CurrentTypeOfArea);
      };

      const CurrentDesign = () => {
        // if(formData.selfdesign == 'да'){
        //   return 0
        // } if (formData.selfdesign == 'нет'){
        //   return 0
        // } else {
        //   console.log(`no design`);
        // }
        return 0
      }
      const CurrentPocketPrice = () => {
        if(formData.remontType === 'econom'){
          return 16000
        }
        if(formData.remontType === 'standart'){
          return 20000
        }
        if(formData.remontType === 'comfort'){
          return 26000
        }
        if(formData.remontType === 'design'){
          return 32000
        } else{
          console.log(` no pocket`);
        }
      }
      const CurrentTypeOfArea = () => {
        if(formData.typeOfArea === 'новостройка'){
        return 4000
        }if(formData.typeOfArea === 'вторичное'){
          return 0
        } else {
          console.log(`no type`);
        }
      } 

      return (
        <form name="form" className="Main-Calc" id="Main-Calculator"onSubmit={TestMail} >

          <p className="Calc-title"> Калькулятор </p>
                <div className="Calc-Part">
                  <div className="RoomsAndType">
                  <select
                          className="TypeOfArea"
                          name="typeOfArea"
                          value={formData.typeOfArea}
                          onChange={handleChange}
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
                         >         
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
                                    
                                  />

                  </div>
                  <div className="Design-Quest">
            <p className="Design-Question">Есть ли у вас дизайн проекта?</p>
            <select
            className="Pers-Design"
            name="selfdesign"
            value={formData.selfdesign}
            onChange={handleChange}
             >
            <option value="да">Да</option>
            <option value="нет">Нет</option>
            </select>
              </div>
              <div className="select-pocket">
                <div className="pocket-item econom-pocket" onClick={()=>{SelectPocket(1)}}> 
                <img className={`econom-image-select pocket-image ${selectRemont ===1 ? 'orange-outline' : ''}`}
                src={economSelect}
                alt="first pocket"/>
                
                <p className={`pocket-econom-desctiption pocket-description-select ${selectRemont === 1 ? 'orange-color' : ''} `}>Пакет Econom</p>
                </div>
                <div className="pocket-item standart-pocket" onClick={()=>{SelectPocket(2)}}> 
                <img className={`standart-image-select pocket-image ${selectRemont === 2 ? 'orange-outline' : ''}`}
                src={standartSelect}
                alt="second pocket"/>
                <p className={`pocket-standart-desctiption pocket-description-select ${selectRemont === 2 ? 'orange-color' : ''}`}>Пакет Standart</p>
                </div>
                <div className="pocket-item comfort-pocket" onClick={()=>{SelectPocket(3)}}> 
                <img className={`comfort-image-select pocket-image ${selectRemont ===3 ? 'orange-outline' : ''}`}
                src={comfortSelect}
                alt="third pocket"/>
                <p className={`pocket-comfort-desctiption pocket-description-select ${selectRemont === 3 ? 'orange-color' : ''}`}>Пакет Comfort</p>
                </div>
                <div className="pocket-item design-pocket" onClick={()=>{SelectPocket(4)}}> 
                <img className={`design-image-select pocket-image ${selectRemont === 4 ? 'orange-outline' : ''}`}
                src={designSelect}
                alt="fourth pocket"/>
                <p className={`pocket-design-desctiption pocket-description-select${selectRemont === 4 ? 'orange-color' : ''} `}>Пакет Design</p>
                </div>

              </div>
                </div>
                            <div className="PersInfo-Part">
                                              <input
                                                type="text"
                                                name="name"
                                                placeholder="Имя"
                                                value={formData.name}
                                                onChange={handleChange}
                                                
                                              />
                                              <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                
                                              />
                                              
                                              <input
                                                type="tel"
                                                name="tel"
                                                placeholder="Телефон"
                                                value={formData.tel}
                                                onChange={handleChange}
                                                
                                              />
                            </div>

          <div className="TotalPrce-Box">
            <p className="TotalPrice-title">Примерная стоимость ремонта (без материалов):</p>
          <p className="TotalPrice">{TotalPrice}</p>
          
          </div>
          

          
          <button type="submit">Отправить</button>
        </form>
      );
    }
    
    export default MainCalculator;
