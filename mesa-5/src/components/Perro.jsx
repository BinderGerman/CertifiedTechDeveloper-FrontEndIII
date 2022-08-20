import React from 'react';


class Perro extends React.Component {



    render() {
        return(
            <li>
                <span>
                    <b>{this.props.nombre}</b> {this.props.edad} {this.props.sexo} {this.props.raza} {this.props.tamaño}    
                </span>
            </li>
                

        )
    }
}

export default Perro;