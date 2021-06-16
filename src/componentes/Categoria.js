import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const Categoria = (props)=>{
    const history = useHistory();

    //const [categoria, guardarCategoria] = useState(null);
    //const {largeImageURL, likes, previewURL, tags, views} = props.imagen;
    //<a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver Imagen</a>
    const handleClick=()=> {
        console.log(props.strCategory);
       //guardarCategoria(props.strCategory);
        history.push(`/platos/${props.strCategory}`);
    }
    return(<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card">
            <img src={props.strCategoryThumb} className="card-img-top"/>

            <div className="card-body">
                <p className="card-text">{props.strCategory}</p>
                <button className="btn-warning" onClick={handleClick}>Options</button>
            </div>
        </div>
    </div>);
}

export default Categoria;