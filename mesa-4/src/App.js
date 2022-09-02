import hombre from './hombreFeliz.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Soy un hombre feliz corriendo mi primera aplicación en React</h1>
      <img src={hombre} className="Hombre" alt="Hombre Feliz" /> 
      </header>
    </div>
  );
}

export default App;
