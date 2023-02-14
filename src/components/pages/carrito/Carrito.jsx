import React, { useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './Carrito.css'
import { Transition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

import Card from './../../common/card/Card'
// import { useRef } from 'react';


const Carrito = ({moviesSelected}) => {
  return (
    <div className='homeContent peliculasContent'>
      {
        moviesSelected.map((movie,index)=>{
          console.log(movie)
          return(
            <Card 
              movie={movie}
            />
          )
        })
      }
    </div>
  );
}

export default Carrito