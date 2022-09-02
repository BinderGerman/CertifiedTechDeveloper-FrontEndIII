import React from 'react'; 

class Fruta extends React.Component {

    render() {
        return (
            <li style={{ backgroundColor: 'blue', border: 'solid 2px'}}>
                <span>{this.props.fruta}</span> - cantidad: <span>{this.props.cantidad}</span>
            </li>
        );
    }
}

export default Fruta; 