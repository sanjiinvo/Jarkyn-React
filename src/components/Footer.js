import React, { useEffect, useRef } from "react";
import './Scss/Footer.scss'
import { Instagram, Telephone, Whatsapp } from "react-bootstrap-icons";
import { load } from "@2gis/mapgl";
import GismapIMG from '../images/gismap.PNG'

function Footer() {

    // load().then((mapglAPI) => {
    //     const map = new mapglAPI.Map('GisMap', {
    //         center: [55.31878, 25.23584],
    //         zoom: 13,
    //         key: 'Your API access key',
    //     });
    // });


  return (
    <div className="Footer">
           <div className="Footer-left">
        <a href="#" className="Footer-left-item">
          <Instagram /> JarkynUI.astana
        </a>
        <a href="#" className="Footer-left-item">
          <Telephone /> +7 701 089 2022
        </a>
        <a href="https://wa.me/77010892022?text=Меня%20интересует%20ремонт%20квартиры" className="Footer-left-item">
          <Whatsapp /> "JarkynUI"
        </a>
      </div>
      <div className="Footer-right">
            <img src={GismapIMG}/>
      </div>
    </div>
  );
}

export default Footer;
