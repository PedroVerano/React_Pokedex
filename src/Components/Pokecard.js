import styles from './Pokecard.module.css'

function Pokecard() {
    return(
        <div className={styles.card}>
            <h2>{}</h2>
            <h3>{}</h3>
        </div>
    )
}

export default Pokecard;