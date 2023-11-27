import '../footer/Footer.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react'
import { GithubLogo, Graph } from '@phosphor-icons/react';

/* RFCE */

function Footer() {

   useContext(AuthContext)

   return (
      <footer>
         <div id="display">
            <div id='cima'>
               <div id='home'>
                  <Link to="/home">
                     <a href="#"><h2 id='font'>Iniciativa Atena</h2></a></Link>
               </div>

               <div className='flex items-center justify-center'>
                     <div className='links flex gap-10 justify-center items-center'>
                        <a href="https://github.com/dot-NET03Generation" target='blank'><i><GithubLogo size={36} color="#fff5f5" weight="bold" /></i></a>
                        <a href="https://linktr.ee/iniciativatena" target='blank'><i><Graph size={36} color="#fff5f5" weight="bold" /></i></a>
                     </div>
               </div>

               <div id='direcionamento'>

                  <div>
                     <ul>
                     <Link to="/produtos"><li className='link-format text-[white] font-[700]'>Produtos</li></Link>
                     <Link to="/apoio"><li className='link-format text-[white] font-[700]'>Canais de Apoio</li></Link>
                     </ul>
                  </div>

                  <div>
                     <ul>
                     <Link to="/contato"><li className='link-format text-[white] font-[700]'>Quem Somos</li></Link>
                     <Link to="/categorias"><li className='link-format text-[white] font-[700]'>Categorias</li></Link>
                     </ul>
                  </div>

               </div>

            </div>

         </div>
      </footer>
   )
}

export default Footer