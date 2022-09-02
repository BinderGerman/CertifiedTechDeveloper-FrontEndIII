import { useState } from 'react'; 
import Formulario from './Formulario';
import Listado from './ListadoTurnos';

function App() {
    const [listadoTurnos, setListado] = useState([]); 

    const crearTurno = function(event) {
      event.preventDefault();

      const nuevoTurno = {
        nombre: event.target.nombre.value,
        apellido: event.target.apellido.value
      }

      setListado([nuevoTurno, ...listadoTurnos])
      event.target.nombre.value = '';
      event.target.apellido.value = '';
    }


  return (
    <div className='App'>
      <Formulario onCrearTurno= {crearTurno} />
      <Listado listado={listadoTurnos} />
    </div>
  );
}

export default App;
