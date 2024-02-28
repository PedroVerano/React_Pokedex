import { type } from '@testing-library/user-event/dist/type';
import styles from './Pokecard.module.css'

function Pokecard({pokemon}) {
    console.log(pokemon)
    const { id, name, height, sprites, types, weight, abilities } = pokemon;
            const typesNames = [];

            for(let i=0; i<types.length; i++) {
                typesNames.push(types[i].type.name);
            }
            const pokemon2= {
                    id,
                    name,
                    height,
                    image: sprites.front_default,
                    type1: typesNames[0],
                    type2: typesNames[1],
                    weight,
                    abilities

            }
    return(
        <div className={styles.card}>
            <img src={pokemon2.image} alt={pokemon.name}></img>
            <p>#{id}</p>
            <h2>{pokemon2.name}</h2>
            <h3>{pokemon2.type2 ? pokemon2.type1 + ' | ' + pokemon2.type2: pokemon2.type1}</h3>
        </div>
    )
}

export default Pokecard;