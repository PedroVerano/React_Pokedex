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

export default fetchPokemon();