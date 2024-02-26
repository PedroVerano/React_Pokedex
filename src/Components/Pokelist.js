import Pokecard from "./Pokecard";

function Pokelist(props) {
    return(
        <ul>
            {
                <Pokecard></Pokecard>
            }
        </ul>
    )
}

export default Pokelist;