import Hijo from './Hijo';
//Importando el css de esta manera, lo que hacemos es "guardar" la hoja de estilo en un objeto
import styles from './css/Padre.module.css';

function Padre() {
  return (
    //En vez de poner el nombre de la clase como haciamos antes, usando comillas, ahora lo hacemos con llaves y "reocrremos" el objeto, por decirlo de alguna manera. Ahora nuestra manera de usar esos estilos es haciendo referncia a ese Objeto
    <div className={styles.container}>
      <Hijo nombre="Jorge" />
      <Hijo nombre="Ana" />
      <Hijo nombre="Luz" />
    </div>
  );
}

export default Padre;
