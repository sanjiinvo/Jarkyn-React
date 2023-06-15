import './App.css';
import Calculator from './components/Calculator';
import AboutUs from './components/FirstSections';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <AboutUs/> */}
      <Calculator/>
    </div>
  );
}

export default App;
