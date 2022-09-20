import React from "react";
import { useEffect } from "react";

const url=  'https://pokeapi.co/api/v2/ditto';

const VerTodos = () => {
    //const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            
        }) 

    })


   
    return (
        <>
            
            <h1>Listado de Pokemones</h1>
        </>
        
    );
};

export default VerTodos;