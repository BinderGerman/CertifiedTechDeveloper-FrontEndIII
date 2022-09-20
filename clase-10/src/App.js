import ListadoResultados from "./ListadoResultados";
import FormularioNumeros from "./FormularioNumeros";
import { useState } from "react";
import Swal from 'sweetalert2';

function App() {

  const [operaciones, setOperacion] = useState([]);

  function sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value);
    const v2 = parseInt(event.target.valor2.value);
    const suma = v1+ v2;
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }
    setOperacion([...operaciones, nuevo])
    event.target.valor1.value="";
    event.target.valor2.value="";

    Swal.fire (
      'Gracias', 
      'Gracias por completar el formulario', 
      'success'
    )
  }

  return (
      <div>
        <FormularioNumeros onSumar={sumar}/>
        <ListadoResultados resultados={operaciones}/>
      </div>
  );

}

export default App;

