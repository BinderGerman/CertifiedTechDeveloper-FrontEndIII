import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import styles from "../styles/detail.module.css"
import estilos from "../styles/container.module.css";

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const {id} = useParams(); //objeto

  useEffect( () => {
    getCharacterById(id).then( (response) => {
        setCharacter(response.data)
    })
  }, [id])


  return (
    <div>
      <h2 className={styles.name}>{character.name}</h2>
      <h3 className={styles.name}>{character.location.name}</h3>
      
    </div>
  )
}
export default CharacterDetail;