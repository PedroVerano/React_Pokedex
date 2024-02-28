import Pokelist from "../../Components/Pokelist";
import Header from "../../Components/Header";

import { useState, useEffect } from "react";
function Home () {

    const [pokemons, setPokemons ] = useState([]);
    const [quantidade, setQuantidade] = useState([]);

    useEffect(() => {
        fetchPokemon(152,setPokemons);
    }, []);

    const fetchPokemon = (quantidade, setPokemons) => {
        const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
        if (quantidade == null) {
            quantidade = 152;
        }
        const pokemonsPromises = [];
        for(let i=1; i<quantidade; i++) {
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
            <Header setPokemons={setPokemons} />
            <Pokelist pokemons={pokemons}/>


        </div>
    )
}

export default Home;