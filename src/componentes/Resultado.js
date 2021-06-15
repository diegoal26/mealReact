import React, {Component} from 'react';
import Categoria from './Categoria';

import Imagen from './Imagen';
import Paginacion from './Paginacion';

const Resultado =({categorias})=> {
    console.log(categorias);
    //const categorias = categories;
        //const imagenes = this.props.imagenes;
        const estado = this.props.estado;
        if(estado.categorias.length ===0) return null;

        /*return(<>
                <div className="col-12 p-5 row">
                    {categorias.map(resultado=>(
                        <Categoria key={resultado.idCategory} 
                        categoria={resultado}/>
                    ))}
                </div>
            </>);*/
    
    return(
        <><div className="col-12 p-5 row">
        {categorias.map(resultado=>(
            <Categoria key={resultado.idCategory} 
            categoria={resultado}/>
        ))}
    </div></>
    );
    
}

/*<Paginacion
                 paginaAnterior={this.props.paginaAnterior}
                 paginaSiguiente={this.props.paginaSiguiente}/>*/
export default Resultado;