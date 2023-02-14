import React, { useState } from 'react'
import MovieModal from '../movieModal/MovieModal';
import './Card.css'

const Card = ({movie,setMoviesSelected,moviesSelected,generos}) => {

  const [buttonHover,setButtonHover] = useState(false);
  const [viewModal,setViewModal] = useState(false);
  console.log(movie)
  const urlIMG = 'https://image.tmdb.org/t/p/w500'
  return (

    <div className='card'>

        {viewModal && <MovieModal movie={movie} generos={generos}/>}

        <img className='imgPortada' src={urlIMG+movie.poster_path} alt="" onClick={()=>setViewModal(true)}/>
        <div className='divTitulo'>
          <p>{movie.title}</p>
        </div>
        {
        moviesSelected? 
        <button
          onClick={()=>{
            let moviesCopy = [...moviesSelected];
            moviesCopy.push({
              nombre: 'nombre',
              precio: 'precio',
              url: 'url'})
            setMoviesSelected(moviesCopy)
            }}

            onMouseEnter={()=>{
              setButtonHover(true)
            }}
            onMouseLeave={()=>{
              setButtonHover(false);
            }}
            className={buttonHover?'hoverEnter':'hoverLeave'}

            >
              {buttonHover?'Agregar':'$100.000'}
              
        </button>
      :
        <button>Eliminar</button>
      }
        
    </div>
  )
}

export default Card