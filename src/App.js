import { Component, useEffect, useState } from 'react';
import Buscador from './componentes/Buscador';
import Categoria from './componentes/Categoria';
import Resultado from './componentes/Resultado';
import ComidasCategoria from './componentes/ComidasCategoria';
import ComidaDetalle from './componentes/ComidaDetalle';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App =()=> {

  /*state ={
    termino:'',
    categorias:[],
    pagina:''
  };*/

  const [estado, guardarEstado] = useState({
    termino:'',
    categorias:[],
    pagina:''
  });

  const [consulto, guardarConsulto]= useState(false);

  useEffect(()=>{
    const consultarApi = ()=>{
      //const pagina = this.state.pagina;
      //const url =`https://pixabay.com/api/?key=20886245-6b8182fd51b896fe1604cfdfd&q=${this.state.termino}&page=${pagina}`;
      const url ="https://www.themealdb.com/api/json/v1/1/categories.php";
      fetch(url).
        //then(respuesta=>respuesta.json()).then(resultado=>guardarCategorias(resultado.categories));
        then(respuesta=>respuesta.json()).then(resultado=>guardarEstado({termino:"",categorias:resultado.categories,pagina:1}));
    }
    consultarApi();
    guardarConsulto(true);
    //console.log(estado.categorias);
  },[]);

  const scroll = ()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  /*const paginaAnterior =()=>{
    let pagina = this.state.pagina;
    if(pagina===1) return null;
    pagina -=1;

    this.setState({pagina:pagina}, ()=>{
      consultarApi()
      this.scroll();
    });
    
  }

  const paginaSiguiente =()=>{
    let pagina = this.state.pagina;

    pagina +=1;
    this.setState({pagina:pagina}, ()=>{
      consultarApi()
      scroll();
    });
  }*/

  /*const consultarApi = ()=>{
    //const pagina = this.state.pagina;
    //const url =`https://pixabay.com/api/?key=20886245-6b8182fd51b896fe1604cfdfd&q=${this.state.termino}&page=${pagina}`;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${estado.termino}`;
    fetch(url).
      then(respuesta=>respuesta.json()).then(resultado=>guardarEstado({comidas:resultado.meals}));
  }

  const datosBusqueda = (termino)=>{
    guardarEstado({
      termino: termino,
      pagina: 1
    }, ()=>{
      consultarApi();
    });
  }*/

  return (
      <div className="app container">
        <header className="App-header">
          <div className="jumbotron">
            <p className="lead text-center">Restaurant</p>
          </div>
          
        </header>
        <Router>
          <Switch>
            <Route path="/" exact>
              <div className="row justify-content-center">
                {consulto?estado.categorias.map(categoria=>(           
                    <Categoria key={categoria.idCategory} 
                    strCategory={categoria.strCategory}
                    strCategoryThumb={categoria.strCategoryThumb}/>)):null}
              </div>
            </Route>
            <Route path="/platos/:categ" exact component={ComidasCategoria}>
                
            </Route>
            <Route path="/plato/:id" exact component={ComidaDetalle}>
                
            </Route>
            
          </Switch>
        </Router>
      </div>
    );

    /*<div className="row justify-content-center">
                    <ComidasCategoria />
                </div>*/
    
    //<Buscador datosBusqueda={datosBusqueda}/>
    /*<div className="row justify-content-center">
            <Resultado resultados={estado.categorias}/>
          </div>
          <div className="row justify-content-center">
                    <ComidaDetalle />
                </div>
          */
  /*render(){
    return (
      <div className="app container">
        <header className="App-header">
          <div className="jumbotron">
            <p className="lead text-center">Searcher</p>
            <Buscador datosBusqueda={this.datosBusqueda}/>
          </div>
          <div className="row justify-content-center">
            <Resultado imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}/>
          </div>
        </header>
      </div>
    );
  }*/
}

export default App;
