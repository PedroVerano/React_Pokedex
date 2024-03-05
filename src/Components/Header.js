import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
function Header({setPokemons}) {

    const [quantidade, setQuantidade] = useState([]);

    const fetchPokemon = (quantidade, setPokemons) => {
        const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
        if (quantidade == null) {
            quantidade = 152;
        }

        const contador = Number(quantidade) + 1;
        if(contador > 1000 ) {
            alert('Maximo de pokemons são 1000')
            return
        }
        if ( quantidade === "" || quantidade === "0") return alert('Coloque um numero de 1 a 1000')

        console.log(contador);
        const pokemonsPromises = [];
        for(let i=1; i<contador; i++) {
            pokemonsPromises.push(fetch(getPokemonUrl(i)).then(resonse => resonse.json()));
        }

        Promise.all(pokemonsPromises)
            .then(pokemons => {
                setPokemons(pokemons);
            })
    }

    return(
        
        <div className={styles.header}>
             <Link className='link' to={`/`}><h1>Pokedex</h1></Link>
            <div className={styles.busca} >
            <input type='text' 
                placeholder='Qual a quantntidade que deseja pesquisar ?' 
                onChange={(e) => setQuantidade(e.target.value)}/>
            <button onClick={()=> fetchPokemon(quantidade, setPokemons)}>Pesquisar</button>
            </div>
            {/* Logo ou contatos */}
        </div>
    )
}

export default Header;