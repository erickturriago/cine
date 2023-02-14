import React from 'react'
import { useState,useEffect} from 'react'
import './Home.css'

import cineIcon from './../../../assets/icons/CineColombia.png'
import Comida from './../comida/Comida'
import Peliculas from './../peliculas/Peliculas'
import Carrito from './../carrito/Carrito'
import Perfil from './../perfil/Perfil'
const Home = () => {

    const [btnPressed,setBtnPressed] = useState('');

    const [movies,setMovies] = useState([]);
    const [moviesSelected,setMoviesSelected] = useState([])
    const [foodSelected,setFoodSelected] = useState([])


    const clickButtonMenu = (e)=>{
        setBtnPressed(e.target.name);
    }

    useEffect(()=>{
        if(movies.length==0){
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=cdbc5ad9cdb13d9e85bde3af0a6eb8e3&language=es-ES&page=1')
            .then(response => response.json())
            .then(response => {
                setMovies(response.results)
            })
        }
        
    },[])

  return (
    <div className='homeContainer'>
        <nav className='navBar'>
            <div className="buttonsContainer">
                <img src={cineIcon} className='imgIcono' alt="" />
                <button onClick={clickButtonMenu}
                    className={btnPressed==="comida"?'buttonSelected':''} 
                    name='comida'>Comida</button>
                
                <button onClick={clickButtonMenu}
                    className={btnPressed==="peliculas"?'buttonSelected':''} 
                    name='peliculas'>Peliculas</button>

                <button onClick={clickButtonMenu}
                    className={btnPressed==="carrito"?'buttonSelected':''} 
                    name='carrito'>Carrito</button>
            </div>
            <div className="miAccount">
                <button onClick={clickButtonMenu}
                    className={btnPressed==="perfil"?'buttonSelected':''} 
                    name='perfil'>Mi cuenta</button>
                <button>Cerrar sesion</button>
            </div>
        </nav>
        {btnPressed==''?<div className='homeContent'></div>:''}
        {btnPressed=='comida'?<Comida/>:''}
        
        {btnPressed=='peliculas'?<Peliculas 
            setMoviesSelected={setMoviesSelected}
            moviesSelected={moviesSelected}
            movies={movies}/>:''}

        {btnPressed=='carrito'?<Carrito 
            moviesSelected={moviesSelected}/>:''}
        {btnPressed=='perfil'?<Perfil/>:''}
    </div>
  )
}

export default Home