import React from 'react';
import { useHistory } from "react-router-dom";

const Comida = (props)=>{
    const history = useHistory();
    //<img src={props.strMealThumb} className="card-img-top"/>
    const handleClick=()=> {
        console.log('Se hizo click');
        history.push(`/plato/${props.idMeal}`);
    }
    return(<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card">
        <img src={props.strMealThumb} className="card-img-top"/>

            <div className="card-body">
                <p className="card-text">{props.strMeal}</p>
                <button onClick={handleClick}>Ver Detalles</button>
            </div>
        </div>
    </div>);
}

export default Comida;