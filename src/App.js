import './components/app.scss'

import Calculator from './components/Calculator';
import AboutUs from './components/FirstSections';
import Header from './components/Header';
import OurWorks from './components/OurWorks';
import PocketsBox from './components/PocketsBox';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <AboutUs/> */}
      {/* <Calculator/> */}
      {/* <PocketsBox/> */}
      <OurWorks/>
    </div>
  );
}

export default App;
