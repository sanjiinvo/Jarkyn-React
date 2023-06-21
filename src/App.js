import './components/app.scss'

import Calculator from './components/Calculator';
import AboutUs from './components/FirstSections';
import Header from './components/Header';
import RouterLayout from './components/MainRouter';
import OurWorks from './components/OurWorks';
import PocketsBox from './components/PocketsBox';

function App() {
  return (
    <div className="App">
      <RouterLayout/>
    </div>
  );
}

export default App;
