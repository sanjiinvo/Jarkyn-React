import '../components/Scss/prices.scss';
import React, { useState, useEffect } from "react";
import jsonData from "./helpers/Prices.json";
import { Search} from 'react-bootstrap-icons'

const PricesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Фильтрация данных при изменении поискового запроса
    const filteredResults = jsonData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
  
    setFilteredData(filteredResults);
  }, [searchTerm]);

  return (
    <div className='price-list'>
        <div className='search-box'>
      <input
        type="text"
        placeholder="Утепление / Стяжки / Укладка"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className='search-input'
      />
      <Search className='search-icon'/>
        </div>

      <div className="list-container">
        <div className="column">
        {filteredData.slice(0, Math.ceil(filteredData.length / 2)).map((item, index) => (
            <div className='price-item' key={index}>
                <div className='price-name'>{item.name}</div>
                <div className='price-price'>{item.price} {item.amount}</div>
               
                
            </div>
))}

        </div>

      </div>
    </div>
  );
};

export default PricesList;
