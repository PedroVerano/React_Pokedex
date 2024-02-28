import styles from './Header.module.css'
function Header({setQuantidade}) {

    return(
        <div className={styles.header}>
            <h1>Pokedex</h1>
            <div className={styles.busca}>
            <input type='text' 
                placeholder='Qual a quantntidade que deseja pesquisar ?' 
                onChange={(e) => setQuantidade(e.target.value)}/>
            <button>Pesquisar</button>
            </div>
            {/* Logo ou contatos */}
        </div>
    )
}

export default Header;