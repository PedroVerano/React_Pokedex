import styles from './Pokecard.module.css'

function Pokecard({pokemon}) {
    return(
        <div className={styles.card}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            <h3>{}</h3>
        </div>
    )
}

export default Pokecard;