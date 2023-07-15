import MainCalculator from "./Calculator"
import AboutUs from "./FirstSections"
import LocalJob from "./LocalJob"
import OurWorks from "./OurWorks"
import PocketsBox from "./PocketsBox"
import './Scss/homepage.scss'


function Homepage(){
    return(
        <div  className="homepage">
            <AboutUs/>
            <MainCalculator/>
            <PocketsBox/>
            <LocalJob/>
            <OurWorks/>
        </div>
    )
}

export default Homepage