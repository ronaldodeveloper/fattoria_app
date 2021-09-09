
import mobile from '../../assets/mobile_footer.png';
import joia from '../../assets/joia.png';
import './footer.scss';

export const Footer= ()=>{
    return (
        <>
          <footer>
              <section>
              <img src={mobile} className="Mobile"></img>
              <article>
                  <h2>Este protótipo foi feito para conhecer melhor suas habilidades</h2>
                  <p> Etiam sit amet diam dignissim sem pulvinar pulvinar. Quisque elementum purus nec urna consequat, ac feugiat eros ultrices. Mauris consectetur sapien non eros ultrices, nec ultrices turpis facilisis.</p>

                  <div>
                   <img src={joia}></img> 
                   <h3>Show</h3>
                  </div>
                  
              </article>
            </section>
          </footer>
        </>
    )
}