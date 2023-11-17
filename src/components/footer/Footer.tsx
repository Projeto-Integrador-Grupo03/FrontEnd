import '../footer/Footer.css'
import { Link } from 'react-router-dom';
import ModalProdutos from '../produtos/modalProdutos/ModalProdutos';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react'
import { GithubLogo, Graph } from '@phosphor-icons/react';

/* RFCE */

function Footer() {

   const { usuario } = useContext(AuthContext)

   return (
      <footer>
         <div id="display">



            <div id='cima'>
               <div id='home'>
                  <Link to="/home">
                     <a href="#"><h2>Iniciativa Atena</h2></a></Link>
               </div>

               <div className='flex items-center justify-center'>
                  {
                     usuario.usuario === 'root@root.com.br' ? (
                        <div className="flex items-center justify-center gap-8">

                           <Link to="/cadastrocategoria" className='text-[white] font-[700]'>Cadastrar Categorias</Link>

                           <div className='links flex gap-6 justify-center items-center'>
                              <a href="https://github.com/dot-NET03Generation" target='blank'><i><GithubLogo size={32} color="#fff5f5" weight="bold" /></i></a>
                              <a href="#"><i><Graph size={32} color="#fff5f5" weight="bold" /></i></a>
                           </div>
                           <ModalProdutos />
                        </div>
                     ) : (<div className='links flex gap-6 justify-center items-center'>
                        <a href="https://github.com/dot-NET03Generation" target='blank'><i><GithubLogo size={32} color="#fff5f5" weight="bold" /></i></a>
                        <a href="#"><i><Graph size={32} color="#fff5f5" weight="bold" /></i></a>
                     </div>)
                  }
               </div>

               <div id='direcionamento'>

                  <div>
                     <ul>
                        <a className='link-format font-[700]' href=""><li>Produtos</li></a>
                        <a className='link-format font-[700]' href=""><li>Noticias</li></a>
                     </ul>
                  </div>

                  <div>
                     <ul>
                        <Link to="/contato">
                           <a className='link-format font-[700]' href=""><li>Quem Somos</li></a></Link>
                        <a className='link-format font-[700]' href=""><li>Meu Perfil</li></a>
                     </ul>
                  </div>

               </div>

            </div>

         </div>
      </footer>
   )
}

export default Footer