function FormularioNumeros(props){
  return (
      <form className="animate__animated animate__bounce" onSubmit={props.onSumar}>
        <p>Ingrese el primer valor: <input type="text" name="valor1" /></p>
        <p>Ingrese el segundo valor: <input type="text" name="valor2" /></p>
        <input type="submit" value="sumar"/>
      </form>
  )
}

export default FormularioNumeros;