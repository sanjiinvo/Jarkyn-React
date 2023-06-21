import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Homepage from "./homepage";
import MainCalculator from "./Calculator";
import OurWorks from "./OurWorks";
import PocketsBox from "./PocketsBox";
import AboutUs from "./FirstSections";

function RouterLayout() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="/maincalculator" element={<MainCalculator />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/pockets" element={<PocketsBox />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default RouterLayout;