import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { toastAlerta } from '../../utils/toastAlerta';
import { ShoppingCart, SignOut } from '@phosphor-icons/react/dist/ssr';
import Hamburger from '../hamburger/Hamburger';

import '../navbar/Navbar.css'


function Navbar() {

   const { usuario, handleLogout } = useContext(AuthContext)

   function logout() {
      if (usuario.token === '') {
         toastAlerta('Você precisa estar logado para sair!', 'info')
      } else {
         handleLogout()
         toastAlerta('Obrigado por usar nosso site!', 'default')
      }
   }

   return (
      <header>
         <nav id="nav-flex">
            <Link to="/home">
               <a className="link-nome" href="#">Iniciativa Atena</a> </Link>

            <div id='div-flex'>
               <ul id="ul-links">
                  <Link to="/produtos"><li className='link-format text-[white] font-[700]'>Produtos</li></Link>
                  <Link to="/categorias"><li className='link-format text-[white] font-[700]'>Categorias</li></Link>
                  <Link to="/"><li className='link-format text-[white] font-[700]'>Canais de Apoio</li></Link>
                  <Link to="/contato"><li className='link-format text-[white] font-[700]'>Quem Somos</li></Link>
                  <Link to="/login"><li className='link-format text-[white] font-[700]'>Login</li></Link>
               </ul>

               <div className='icones flex items-center gap-5 list-none'>
                  <Link to="/carrinho"><li className='link-format text-[white] font-[700]'><i><ShoppingCart size={28} weight="bold" color="#f5f5f5" /></i></li></Link>
                  <Link onClick={logout} to="/login"><li><i className='link-format cursor-pointer'><SignOut size={28} color="#fff5f5" weight="bold" /></i></li></Link>
               </div>

               <div className='hamb'>
                  <Hamburger />
               </div>

            </div>
         </nav>
      </header>
   )
}

export default Navbar

