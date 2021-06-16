import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

const ComidaDetalle = (props)=>{
    const history = useHistory();

    const [detalle, guardarDetalle] = useState({
        termino:'',
        detalles:[]
      });

    useEffect(()=>{
        const consultarApi = ()=>{
                const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`;
          fetch(url).
            then(respuesta=>respuesta.json()).then(resultado=>guardarDetalle({termino:"",detalles:resultado.meals}));
            
          
        }
        consultarApi();
    },[]);

    

    return(<>
        <button className="mb-3 btn-warning btn-lg" onClick={()=>history.goBack()}>Back</button>
        <h2>Details</h2>
        {detalle.detalles.length>0?<div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4">
            <div className="card">
            <img src={detalle.detalles[0].strMealThumb} className="card-img-top"/>
            <div className="card-body">
                <p className="card-text">Name: {detalle.detalles[0].strMeal}</p>
                <h4>Ingredients:</h4>
                <p className="card-text">* {detalle.detalles[0].strIngredient1}</p>
                <p className="card-text">* {detalle.detalles[0].strIngredient2}</p>
                <p className="card-text">* {detalle.detalles[0].strIngredient3}</p>
                </div>
            </div>
        </div>:null}
    </>);

}
export default ComidaDetalle;

