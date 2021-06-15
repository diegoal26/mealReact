import { Component, useEffect, useState } from 'react';
//import Buscador from './Buscador';
import Comida from './Comida';
import Resultado from './Resultado';

import { useHistory } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const ComidasCategoria =(props)=> {
  console.log(props.match);
  const history = useHistory();
  const [estado, guardarEstado] = useState({
    termino:'',
    comidas:[],
    pagina:''
  });

  const [consulto, guardarConsulto]= useState(false);

  const [busqueda, guardarBusqueda] = useState("");

  useEffect(()=>{
    
    const consultarApi = ()=>{
      const category= props.match.params.categ;
      //const pagina = this.state.pagina;
      //const url =`https://pixabay.com/api/?key=20886245-6b8182fd51b896fe1604cfdfd&q=${this.state.termino}&page=${pagina}`;
      const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.match.params.categ}`;
      fetch(url).
        //then(respuesta=>respuesta.json()).then(resultado=>guardarCategorias(resultado.categories));
        then(respuesta=>respuesta.json()).then(resultado=>guardarEstado({termino:"",comidas:resultado.meals,pagina:1}));
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

  function consultarApiBuscar(){
    console.log("busco");
    //const pagina = this.state.pagina;
    //const url =`https://pixabay.com/api/?key=20886245-6b8182fd51b896fe1604cfdfd&q=${this.state.termino}&page=${pagina}`;
    if(busqueda != ""){
      /*const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`;
      fetch(url).then(respuesta=>respuesta.json()).then(resultado=>guardarEstado({termino:"",comidas:resultado.meals,pagina:1}));*/
        let comidasFiltradas = estado.comidas.filter(comida => comida.strMeal.toLowerCase().includes(busqueda.toLowerCase()));
        guardarEstado({termino:"",comidas:comidasFiltradas,pagina:1})
        
    }else{
      const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.match.params.categ}`;
      fetch(url).
        //then(respuesta=>respuesta.json()).then(resultado=>guardarCategorias(resultado.categories));
        then(respuesta=>respuesta.json()).then(resultado=>guardarEstado({termino:"",comidas:resultado.meals,pagina:1}));
    }
  }

  /*const datosBusqueda = (termino)=>{
    guardarEstado({
      termino: termino,
      pagina: 1
    }, ()=>{
      consultarApiBuscar();
    });
  } */

  return (
      <>
        <div className="row">
              <div className="form-group col-md-8">
                  <input type="text" className="form-control form-control-lg" 
                  placeholder="Search for your food.." defaultValue={busqueda} onChange={e => guardarBusqueda(e.target.value)}/>
              </div>

              <div className="form-group col-md-4">
                  <input type="button" className="btn btn-lg btn-danger btn-block" value="Search..." onClick={consultarApiBuscar}/>
              </div>
        </div>
      <div className="app container">
              <button onClick={()=>history.goBack()}>Volver</button>
              
                <div className="row justify-content-center">
                  {consulto?estado.comidas.map(comida=>(
                      
                      <Comida key={comida.idMeal}
                      idMeal={comida.idMeal}
                      strMeal={comida.strMeal}
                      strMealThumb={comida.strMealThumb}/>)):null}
                </div>
              
      </div>
      </>
    );

    /*<InfiniteScroll
              dataLength={estado.comidas.length}
              //next={fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>You have seen it all</b>
                </p>
              }>
              </InfiniteScroll>*/
    
    //<Buscador datosBusqueda={datosBusqueda}/>
    /*<div className="row justify-content-center">
            <Resultado resultados={estado.categorias}/>
          </div>*/
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

export default ComidasCategoria;
