import '../footer/Footer.css'
import { Link } from 'react-router-dom';
import ModalProdutos from '../produtos/modalProdutos/ModalProdutos';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react'

/* RFCE */

function Footer() {

   const { usuario } = useContext(AuthContext)

   return (
      <footer>
         <div id='display'>

            <div>
               {
                  usuario.usuario === 'root@root.com.br' ? (
                     <div id='div-flex'>
                        <ul id="ul-links">
                           <Link to="/cadastrocategoria"><li className='link-format text-[white]'>Cadastro Categorias</li></Link>
                           <ModalProdutos />
                        </ul>
                     </div>
                  ) : ('')
               }
            </div>

            <div id='cima'>
               <div id='home'>
                  <Link to="/home">
                     <a href="#"><h2>Iniciativa Atena</h2></a></Link>
               </div>

               <div id='direcionamento'>

                  <div>
                     <ul>
                        <a className='link-format' href=""><li>Produtos</li></a>
                        <a className='link-format' href=""><li>Noticias</li></a>
                     </ul>
                  </div>

                  <div>
                     <ul>
                        <Link to="/contato">
                           <a className='link-format' href=""><li>Quem Somos</li></a></Link>
                        <a className='link-format' href=""><li>Meu Perfil</li></a>
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