import { Instagram, Telephone, Whatsapp } from "react-bootstrap-icons"



function Footer(){

    return(
        <div className="Footer">
            <div className="Footer-left">
            <a href="#" className="Footer-left-item">
                <Instagram/> @JarkynUI.astana
            </a>
            <a href="#" className="Footer-left-item">
                <Telephone/> +7 701 089 2022
            </a>
            <a href="#" className="Footer-left-item">
                <Whatsapp/> "JarkynUI"
            </a>
            </div>
        </div>
    )

}

export default Footer