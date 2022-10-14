import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Plans from './components/Plans';
import Coach from './components/Coach'
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
        <Plans/>
        <Coach/>
    </div>
  );
}

export default App;
