import React, { useEffect, useRef, useState, useTransition } from 'react'
import Card from './../../common/card/Card'
import { v4 as uuidv4 } from 'uuid';
import './Peliculas.css'

const Peliculas = ({setMoviesSelected,moviesSelected,movies}) => { 
  
  // console.log(movies)
  const [generos,setGeneros] = useState(null);

  useEffect(()=>{
    if(generos==null){
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=cdbc5ad9cdb13d9e85bde3af0a6eb8e3&language=es-ES')
        .then(response => response.json())
        .then(response => {
          console.log(response.genres)
          setGeneros(response.genres)
        })
    }
    
  },[])


  return (
    
    <div className='homeContent peliculasContent'>
      {
        movies.map((movie,index)=>{
          return(
            
            <Card 
              key={index}
              setMoviesSelected={setMoviesSelected}
              moviesSelected={moviesSelected}
              movie={movie}
              generos={generos}
            />
          )
        })
      }
    </div>
  );  
}

export default Peliculas