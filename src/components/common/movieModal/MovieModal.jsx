
import React from 'react'
import './MovieModal.css'
import {AiOutlineClose} from "react-icons/ai";

const MovieModal = ({movie,generos}) => {
  const urlIMG = 'https://image.tmdb.org/t/p/original'

  const generoArr = generos.filter(genero => genero.id == movie.genre_ids.find(mov => mov==genero.id))
  const generoString = generoArr.map(genero => genero.name)
  console.log(generoString)
  

  return (
    <div className='modalBackground'>
      <div className='movieDescriptionContainer'>
        <AiOutlineClose/>
        <img className='imgModal' src={urlIMG+movie.backdrop_path} alt=""/>
        <h3>{movie.title}</h3>
        <section className='sectionTitulo'>
          <h4>Titulo original</h4>
          <p>{movie.original_title}</p>
        </section>

        <hr />

        <section className='sectionSinopsis'>
          <h4>Sinopsis</h4>
          <p>{movie.overview}</p>
        </section>

        <hr />

        <section className='sectionGeneros'>
          <h4>Genero</h4>
          <p>{generoString.join(", ")}</p>
        </section>

        <hr />

        <section className='sectionEstreno'>
          <h4>Estreno</h4>
          <p>{movie.release_date}</p>
        </section>

        
      </div>
      
        
    </div>
  )
}

export default MovieModal