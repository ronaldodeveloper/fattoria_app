
import './app.scss';
import { Menu } from './components/menu/Menu';
import { Footer } from './components/footer/Footer';
// import Carousel from 'react-elastic-carousel';
import Card from './components/carousel/Card';
import CardServicos from './components/carousel/CardServicos';
// import './components/carousel/card.scss'

// IMAGES
import mouseIcon from './assets/mouse.png';
// import devices from './assets/devices.png';
import cafe from './assets/cafe.png';
import moedas from './assets/moedas.png';
import ambiente from './assets/ambiente.png';






function App(){
  return (
   <>
     <Menu/>
     <section className="content_Main">
       <article className="Banner">
         <div>
           <h2>Teste de Admissão</h2>
           <h1>Banner estático</h1>
           <p>
           Etiam sit amet diam dignissim sem pulvinar pulvinar. Quisque elementum purus nec urna consequat, ac feugiat eros ultrices. Mauris consectetur sapien non eros ultrices, nec ultrices turpis facilisis.
           </p>
           <img src={mouseIcon}></img>
         </div>
       </article>
       <article className="Xicara">
         {/* <div className="imgXicara"></div> */}
       </article>
     </section>

     {/* <section> */}
         <section className="Services">
           <header>
             <h2>Serviços</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices est.</p>
           </header>

           <CardServicos />
           {/* <section>
             <article>
               <img src={devices}></img>
               <h2>Produtos 1</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.</p>
             </article>
             <article>
               <img src={devices}></img>
               <h2>Produtos 2</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.</p>
             </article>
             <article>
               <img src={devices}></img>
               <h2>Produtos 3</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.</p>
             </article>
           </section> */}
         </section>

         <section className="Diferenciais">
           <header>
             <h2>Diferenciais</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices est.</p>
           </header>
           <section>
             <article>
               <img src={cafe} className="iconDif"></img>
               <h2>café</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.</p>
             </article>
             <article>
               <img src={moedas} className="iconDif"></img>
               <h2>moedas</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.</p>
             </article>
             <article>
               <img src={ambiente} className="iconDif"></img>
               <h2>ambiente</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.</p>
             </article>
           </section>
         </section>

         {/* section PERSONAS */}
         <section className="personas">
           <header>
             <h2>Personas</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices est.</p>
           </header>   
             <Card />
          </section>
         
     {/* </section> */}
      <Footer />
     
   </>
  );
}

export default App;
