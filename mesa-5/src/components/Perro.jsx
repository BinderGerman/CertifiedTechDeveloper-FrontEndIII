import React from 'react';


class Perro extends React.Component {
    render() {
        return(
            <li>
                <h3>Nombre: {this.props.nombre}</h3>
                <br/>
                <b>Edad:</b> {this.props.edad} 
                <br/>
                <b>Sexo:</b> {this.props.sexo}
                <br/>
                <b>Raza:</b> {this.props.raza}
                <br/> 
                <b>Tamaño:</b> {this.props.tamaño}    
            </li>
        )
    }
}

export default Perro;