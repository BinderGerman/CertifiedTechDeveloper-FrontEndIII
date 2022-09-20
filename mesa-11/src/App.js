import './App.css';
import Rejuvenecedor from './components/Rejuvenecedor/index';
import Swal from 'sweetalert2';


function App() {

  function validar(event) {
    event.preventDefault(); 

    const nombre = event.target.nombre.value;
    const edad = parseInt(event.target.edad.value);

    if(nombre.length <= 1) {
      Swal.fire (
        'Lo sentimos', 
        'El nombre no puede contener un solo caracter o menos', 
        'error'
      )

      event.target.edad.value = '';
      event.target.nombre.value = '';
      
    } else {
      if(edad <= 0) {
        Swal.fire (
          'Lo sentimos', 
          'No puedes ingresar un valor menor a 0', 
          'error'
        )
      } else {
        const edadModificada = edad - 10;
        Swal.fire (
          'Excelente', 
          'rejuveneciste 10 años, ahora tu edad es: ' + edadModificada, 
          'success'
        )
    }

    event.target.edad.value = '';
    event.target.nombre.value = '';

    }


  }

  return (
    <div className="App">
      <header className="App-header">
        <Rejuvenecedor onValidador={validar}/>
      </header>
    </div>
  );
}

export default App;
