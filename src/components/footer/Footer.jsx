
import mobile from '../../assets/mobile.png'
import joia from '../../assets/joia.png'
export const Footer= ()=>{
    return (
        <>
          <footer>
              <img src={mobile}></img>
              <article>
                  <h2>Este protótipo foi feito para conhecer melhor suas habilidades</h2>
                  <p>Etiam sit amet diam dignissim sem pulvinar pulvinar. Quisque elementum purus nec urna consequat, ac feugiat eros ultrices. Mauris consectetur sapien non eros ultrices, nec ultrices turpis facilisis.</p>
                  <img src={joia}></img>
              </article>
          </footer>
        </>
    )
}