import '../footer/Footer.css'

/* RFCE */

function Footer() {
   return (
      <footer>
         <div id='display'>

            <div id='cima'>
               <div id='home'>
                  <a href="#"><h2>Iniciativa Atena</h2></a>
               </div>

               <div id='direcionamento'>

                  <div>
                     <ul className='link-format'>
                        <a href=""><li>Produtos</li></a>
                        <a href=""><li>Noticias</li></a>
                     </ul>
                  </div>

                  <div>
                     <ul className='link-format'>
                        <a href=""><li>Quem Somos</li></a>
                        <a href=""><li>Meu Perfil</li></a>
                     </ul>
                  </div>

               </div>
            </div>

            <div id='divisoria'>
               <hr />
            </div>

            <div id='baixo'>
               <a href="#"><img src="src\assets\img\icons8-github-64.png" alt="Github" /></a>
               <a href="#"><img id='planeta' src="src\assets\img\icons8-planeta-60_1.png" alt="Link Tree" /></a>
            </div>
         </div>
      </footer>
   )
}

export default Footer