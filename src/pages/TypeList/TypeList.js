import Pokelist from "../../Components/Pokelist";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TypeList() {
    const { type } = useParams();
    const [pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        fetchPokemons(type);
    }, [type]);

    const fetchPokemons = (type) => {
        const getPokemonUrl = type => `https://pokeapi.co/api/v2/type/${type}`;
        const pokemonsPromises = [];

        fetch(getPokemonUrl(type))
            .then(response => response.json())
            .then(data => {
                for(let i=0; i<data.pokemon.length; i++) {
                    pokemonsPromises.push(fetch(data.pokemon[i].pokemon.url).then(resonse => resonse.json()));          
                } 
                Promise.all(pokemonsPromises)
                .then(pokemons => {
                setPokemons(pokemons);
            })
        })        
    }

    return(
        <div>
            <Header />
            <Pokelist pokemons={pokemons}/>
        </div>
    )
}

export default TypeList