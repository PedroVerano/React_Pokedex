import Pokecard from "./Pokecard";
import styles from './Pokelist.module.css'

function Pokelist({pokemons}) {
    return(
        <ul className={styles.pokelist}>
            {pokemons.map(pokemon => {
                return(
                    <Pokecard key={pokemon.id} pokemon={pokemon}/>
                )
            })
              
            }
        </ul>
    )
}

export default Pokelist;