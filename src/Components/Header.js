import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import placeholderValue from '../Functions/placeholderValue';
import fetchPokemon from '../Functions/fetchPokemon';

function Header({setPokemons, ativo}) {

    const [value, setQuantidade] = useState([]);
    const [valueSelect, setValueSelect] = useState('quantidade');

    // const fetchPokemon = (quantidade, setPokemons) => {
    //     const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    //     if (quantidade === null || quantidade == 0) {
    //         quantidade = 151;
    //     }

    //     const contador = Number(quantidade) + 1;
    //     if(contador > 1000 ) {
    //         alert('Maximo de pokemons são 1000')
    //         return
    //     }
    //     if ( quantidade === "" || quantidade === "0") return alert('Coloque um numero de 1 a 1000')

    //     console.log(contador);
    //     const pokemonsPromises = [];
    //     for(let i=1; i<contador; i++) {
    //         pokemonsPromises.push(fetch(getPokemonUrl(i)).then(resonse => resonse.json()));
    //     }

    //     Promise.all(pokemonsPromises)
    //         .then(pokemons => {
    //             setPokemons(pokemons);
    //         })
    // }

    return(
        
        <div className={styles.header}>
             <Link className='link' to={`/`}><h1>Pokedex</h1></Link>
            <div className={ativo ? styles.busca : styles.busca+ ' ' + styles.hides } >
            <input type='text' 
                placeholder={placeholderValue(valueSelect)}
                onChange={(e) => setQuantidade(e.target.value)}/>
                <select value={valueSelect}    onChange={(event)=> setValueSelect(event.target.value)}>
                    <option value='quantidade'>Quantidade</option>
                    <option value='id'>ID</option>
                    <option value='type'>Type</option>
                    <option value='name'>Name</option>

                </select>
            <button onClick={()=> fetchPokemon(value, valueSelect, setPokemons)}>Pesquisar</button>
            </div>
            {/* Logo ou contatos */}
        </div>
    )
}

export default Header;