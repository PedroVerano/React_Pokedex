import Pokelist from "../../Components/Pokelist";
import Header from "../../Components/Header";

import { useState, useEffect } from "react";
function Home () {

    const [pokemons, setPokemons ] = useState([]);
    const [quatidade, setQuantidade] = useState([]);

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = () => {
        const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

        const pokemonsPromises = [];
        for(let i=1; i<152; i++) {
            pokemonsPromises.push(fetch(getPokemonUrl(i)).then(resonse => resonse.json()));
        }

        Promise.all(pokemonsPromises)
            .then(pokemons => {
                console.log(pokemons)
                setPokemons(pokemons);
            })
    }
    return (
        <div className={StyleSheet.container}>
            <Header setQuantidade={setQuantidade}/>
            <Pokelist pokemons={pokemons}/>


        </div>
    )
}

export default Home;