import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SignOut } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


import '../navbar/Navbar.css'


function Navbar() {

   const navigate = useNavigate();

   const { usuario, handleLogout } = useContext(AuthContext)

   function logout() {
      handleLogout()
      alert('Obrigado por usar nosso site!')
      navigate('/login')
   }

   return (
      <header>
         <nav id="nav-flex">

            <Link to="/home">
               <a className="link-nome" href="#">Iniciativa Atena</a> </Link>

            {
               usuario.usuario === 'root@root.com.br' ? (
                  <div id='div-flex'>
                     <ul id="ul-links">
                        <Link to="/cadastrocategoria"><li className='link-format text-[white]'>Cadastro Categorias</li></Link>
                     </ul>
                  </div>
               ) : ('')
            }


            <div id='div-flex'>
               <ul id="ul-links">
                  <Link to="/produtos"><li className='link-format text-[white]'>Produtos</li></Link>
                  <Link to="/categorias"><li className='link-format text-[white]'>Categorias</li></Link>
                  <Link to="/"><li className='link-format text-[white]'>Canais de Apoio</li></Link>
                  <Link to="/contato"><li className='link-format text-[white]'>Quem Somos</li></Link>
                  <Link to="/"><li className='link-format text-[white]'>Carrinho</li></Link>
                  <Link to="/login"><li className='link-format text-[white]'>Login</li></Link>
                  <Link onClick={logout} to="/login"><i className='link-format cursor-pointer'><SignOut size={28} color="#fff5f5" weight="bold" /></i></Link>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Navbar

