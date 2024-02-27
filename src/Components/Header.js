import styles from './Header.module.css'
function Header({setQuantidade}) {

    
    return(
        <div className={styles.header}>
            <h1>Pokedex</h1>
            <div className={styles.busca}>
            {/* imput de busca e botão */}
            </div>
            {/* Logo ou contatos */}
        </div>
    )
}

export default Header;