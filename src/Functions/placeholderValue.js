const placeholderValue = (selectValue) => {
    switch (selectValue) {
        case "quantidade":
            return 'Qual a quantidade de pokemons ?';
        case 'id':
            return 'Qual o Id do pokemon ?';
        case 'name':
            return 'Qual o nome do pokemon ?';
        case 'type':
            return 'Qual o tipo dos pokemons ?';
        default:
            return'erro';
    }
}

export default placeholderValue;