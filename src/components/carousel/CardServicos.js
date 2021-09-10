import React from 'react';
import Carousel from 'react-elastic-carousel';
import devices from '../../assets/devices.png';
import './cardServicos.scss'

const CardServicos= ()=>{ 

    let message= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices estadipiscing elit elit et, ultrices est`
    const card=[
        {id:1, message},
        {id:2, message},
        {id:3, message}
    ]
  
    const breakPoints = [
        {width: 320, itemsToShow: 1},
        {width: 640, itemsToShow: 2},
        {width: 800, itemsToShow: 3}
    ]
  
   return (

        <Carousel className="carouselServicos" breakPoints={breakPoints}>
        {card.map(item => { 
            return (
                <article key={item.id} className="cardServicos">
                <img src={devices}></img>
                <h2>Produtos {item.id}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio,  
                 pretium.
                </p>
              </article>
           )
        })}
        </Carousel>

       
      )
}

export default CardServicos;


