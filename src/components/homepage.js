import MainCalculator from "./Calculator"
import AboutUs from "./FirstSections"
import OurWorks from "./OurWorks"
import PocketsBox from "./PocketsBox"
import './Scss/homepage.scss'


function Homepage(){
    return(
        <div  className="homepage">
            <AboutUs/>
            <MainCalculator/>
            <PocketsBox/>
            <OurWorks/>
        </div>
    )
}

export default Homepage