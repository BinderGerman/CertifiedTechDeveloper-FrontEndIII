import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  colorsArray = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */

  state = {
    colors: this.colorsArray
  }
  /* Creamos el objeto con un atributo llamado colors el cual tiene un valor de inicio igual al array colorsArray*/


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */

  shuffle = () => {
    this.setState(prevState => {
      return {
        colors: prevState.colors.sort((a, b) => 0.5 - Math.random())
        /* Con el método sort() los que hacemos es reordenar los elementos del array. En este caso, debido a que lo convinamos con el método Math.random() el reordenamineto se da de manera aleatoria.*/
      }
    })
  }
  /* Se crea la función shuffle. El return lleva llaves "{}" porque estamos retornando un objeto, o más bien el nuevo valor que va a adquirir el atributo colors.   */

  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colorsArray.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>
    )
    /* Al pasar el map, la palabra color (que es referencia a cada uno de los String del Array) se transforma tanto en nombre de clase como de nombre que va llevar el DIV. Esto es interesante, porque optimiza el código!! */
    /* Le pasamos al componente Button una props que dentro lleva la función shuffle */
  }
}
