import { Link } from 'react-router-dom';
import style from './CssComponentes/types.css'
function Types({type1, type2}) {

    const class1 = `cor${type1}`
    return(
        <div className="typesDiv">
            <Link className='link' to={`/search/${type1}`}><h3 className={`cor${type1}`}>{type1}</h3></Link>
            <Link className='link' to={`/search/${type2}`}><h3 className={`cor${type2}`}>{type2}</h3></Link>
        </div>
    )
}

export default Types;