import { Accordion } from "react-bootstrap"
import '../components/Scss/LocalJob.scss'
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"
import prices from './helpers/Prices.json'
import { List } from "react-bootstrap-icons"
import PricesList from "./prices"


function LocalJob(){
    console.log(prices)

    return(
        <div className="Local-job" id="localjob">
            <h2 className="Local-job-title">Дополнительные работы</h2>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >Прайс лист работ</Accordion.Header>
        <Accordion.Body>
        
        <div className="work-list">
            <PricesList/>
        </div>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>

        </div>
    )
}

export default LocalJob