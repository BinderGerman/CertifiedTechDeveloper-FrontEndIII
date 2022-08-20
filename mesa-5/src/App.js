import './App.css';
import Perro from './components/Perro';

const perros = [
  {
    nombre: "Huesos", 
    edad: '5 años', 
    sexo : 'macho', 
    raza : 'callejero',
    tamaño : 'cusquito'
  },

  {
    nombre: "Fiona", 
    edad: '5 años', 
    sexo : 'hembra', 
    raza : 'callejera',
    tamaño : 'cusquita'
  }
]

function App() {
  return (
    <div className="App">
      <ul>
        {
          perros.map((perro) => {
            return <Perro nombre = {perro.nombre} edad= {perro.edad} sexo = {perro.sexo} raza = {perro.raza} tamaño = {perro.tamaño} />    
          })
        }
      </ul>
    </div>
  );
}

export default App;
