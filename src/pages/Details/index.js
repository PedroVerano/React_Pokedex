import Header from "../../Components/Header";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Types from "../../Components/Types";
import styles from './Details.module.css'

function Details() {
    const { name } = useParams();
    const [pokemon, setPokemon ] = useState([]);

    const fetchPokemon = () => { 
         fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            const { id, name, height, sprites, types, weight, abilities } = data;
            const typesNames = [];

            for(let i=0; i<types.length; i++) {
                typesNames.push(types[i].type.name);
            }
            const pokemon= {
                    id,
                    name,
                    height,
                    image: sprites.front_default,
                    type1: typesNames[0],
                    type2: typesNames[1],
                    weight,
                    abilities

            }
            console.log(pokemon)
            setPokemon(pokemon);
        })
    }
    
    useEffect(() => {
        fetchPokemon();
    }, [name]);

    return(
        <div className={styles.body}>
            <Header/>
            <Types type1={pokemon.type1} type2={pokemon.type2}></Types>
        </div>
    )
}

export default Details;