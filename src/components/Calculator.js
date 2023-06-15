import { useState } from "react";


function Calculator(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [typeOfArea, setTypeOfArea] = useState('');
    const [range, setRange] = useState('');
    const [tel, setTel] = useState('');
    const [roomCount, setRoomCount] = useState('');
    const [selfDesign, setSelfDesign] = useState('');
    const [priceToPhp, setPriceToPhp] = useState('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('typeOfArea', typeOfArea);
    formData.append('range', range);
    formData.append('tel', tel);
    formData.append('roomCount', roomCount);
    formData.append('selfdesign', selfDesign);
    formData.append('pricetophp', priceToPhp);

    return(
        <form>
                    <div className="Calculator-main">
            <div className="part-1">
                <p className="Calculator-title">
                    Калькулятор
                </p>

                <div className="calc-params">
                    <select className="rooms" >
                        <option value={'Кол-во Комнат'}>Кол-во Комнат</option>
                        <option value={'1'}>1 комната</option>
                        <option value={'2'}>2 комната</option>
                        <option value={'3'}>3 комната</option>
                        <option value={'4+'}>4+ комната</option>
                    </select>
                    <select>
                        <option>Тип помещения</option>
                        <option >Новостройка</option>
                        <option>Всторичное</option>

                    </select>
                </div>

            </div>

        </div>
        </form>

    )
}

export default Calculator