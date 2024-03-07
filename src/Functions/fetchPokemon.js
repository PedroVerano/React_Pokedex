const fetchPokemon = (value, selectValue, setPokemons) => {

    switch (selectValue) {
        case "quantidade":
            const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
            if (value == null) {
                value = 152;
            }
            const contador = Number(value) + 1;
        if(contador > 1000 ) {
            alert('Maximo de pokemons são 1000')
            return
        }

        if ( value === "" || value === "0") return alert('Coloque um numero de 1 a 1000')

            const pokemonsPromises = [];

            for(let i=1; i<contador; i++) {
                pokemonsPromises.push(fetch(getPokemonUrl(i)).then(resonse => resonse.json()));
            }

            Promise.all(pokemonsPromises)
                .then(pokemons => {
                    setPokemons(pokemons);
                })
            return ;
        case 'id':
            const getPokemonUrlID = id => `https://pokeapi.co/api/v2/pokemon/${id}`
            const pokemonsPromisesID = [];
            pokemonsPromisesID.push(fetch(getPokemonUrlID(value)).then(response => response.json()));
            Promise.all(pokemonsPromisesID)
                .then(pokemons => {
                    setPokemons(pokemons);
                })
            return ;
        case 'type':
                const getPokemonUrlType = type => `https://pokeapi.co/api/v2/type/${type}`;
                const pokemonsPromises2 = [];
        
                fetch(getPokemonUrlType(value))
                    .then(response => response.json())
                    .then(data => {
                        for(let i=0; i<data.pokemon.length; i++) {
                            pokemonsPromises2.push(fetch(data.pokemon[i].pokemon.url).then(resonse => resonse.json()));          
                        } 
                        Promise.all(pokemonsPromises2)
                        .then(pokemons => {
                        setPokemons(pokemons);
                    })
                })        
            return ;
        default:
            console.log('Erro no Switch');
            return'erro';
    
    }
}

export default fetchPokemon;