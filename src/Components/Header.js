import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import placeholderValue from '../Functions/placeholderValue';
import fetchPokemon from '../Functions/fetchPokemon';

function Header({setPokemons, ativo}) {

    const [value, setQuantidade] = useState([]);
    const [valueSelect, setValueSelect] = useState('quantidade');

    return(
        
        <div className={styles.header}>
             <Link className='link' to={`/`}><h1>Pokedex</h1></Link>
            <div className={ativo ? styles.busca : styles.busca+ ' ' + styles.hides } >
            <input type='text' 
                placeholder={placeholderValue(valueSelect)}
                onChange={(e) => setQuantidade(e.target.value)}/>
                <select value={valueSelect}    onChange={(event)=> setValueSelect(event.target.value)}>
                    <option value='quantidade'>Quantidade</option>
                    <option value='id'>ID ou Nome</option>
                    <option value='type'>Type</option>

                </select>
            <button onClick={()=> fetchPokemon(value, valueSelect, setPokemons)}>Pesquisar</button>
            </div>
            {/* Logo ou contatos */}
        </div>
    )
}

export default Header;