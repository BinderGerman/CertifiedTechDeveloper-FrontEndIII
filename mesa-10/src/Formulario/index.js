function Formulario(props) {
    return (
        <form onSubmit={props.onCrearTurno}>
        <p>Ingrese el nombre: <input type="text" name="nombre" /></p>
        <p>Ingrese el apellido: <input type="text" name="apellido" /></p>
        <input type="submit" value="Crear Turno"/>
        </form>
    )
}

export default Formulario;