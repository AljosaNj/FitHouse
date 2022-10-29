import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Plans from './components/Plans';
import Coach from './components/Coach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {useContext} from 'react';
import {themeContext} from './Context'


function App() {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    
    
    >
         <Hero/>
         <Programs/>
         <Reasons/>
        <Plans/>
        <Coach/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
