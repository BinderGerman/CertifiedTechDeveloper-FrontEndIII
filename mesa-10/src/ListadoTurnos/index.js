function Listado(props) {
    return (
        <ul>
            {
                props.listado.map((turno, index) => 
                    <li key={index}>Turno número {index}, {turno.nombre} {turno.apellido}</li>
                )
            }
        </ul>

    )
}

export default Listado; 