import React from 'react';
import Carousel from 'react-elastic-carousel';
import './card.scss'
import rersonasIcon from '../../assets/circuloPersonas.png'

const Card= ()=>{ 

  let message= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices estadipiscing elit elit et, ultrices est`
  const card=[
      {id:1, message, image: rersonasIcon},
      {id:2, message, image: rersonasIcon},
      {id:3, message, image: rersonasIcon},
      {id:4, message, image: rersonasIcon},
      {id:5, message, image: rersonasIcon},
  ]

  const breakPoints = [
      {width: 320, itemsToShow: 1},
      {width: 640, itemsToShow: 2},
      {width: 800, itemsToShow: 3},
      {width: 1024, itemsToShow: 4},
      {width: 1920, itemsToShow: 5}
  ]

    return (
        <Carousel className="carousel" breakPoints={breakPoints}>
        {card.map(item => { 
            return (
                    <section key={item.id} className="card">
                        <p>{item.message}</p>
                        <div>
                         <img src={item.image}></img>
                         <article>
                         <h3>Fulano</h3>
                         <h4>Funcionário</h4>
                         </article>   
                        </div>     
                    </section>
           )
        })}
        </Carousel>
    )
}

export default Card;


