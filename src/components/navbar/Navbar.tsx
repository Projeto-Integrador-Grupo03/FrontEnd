import { AuthContext } from '../../contexts/AuthContext';
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';


function Navbar() {
   const { usuario } = useContext(AuthContext);

   return (
      <header>
         <nav id="nav-flex">
            {
               usuario.usuario === 'root@root.com.br' ? (
               <Link to="/cadastrocategoria"><li className='link-format'>Cadastro Categorias</li></Link>

               ) : ('')
            }

            <Link to="/home">
               <a className="link-nome" href="#">Iniciativa Atena</a> </Link>
            <div id='div-flex'>
               <ul id="ul-links">
                  <Link to="/produtos"><li className='link-format'>Produtos</li></Link>
                  <Link to="/categorias"><li className='link-format'>Categorias</li></Link>

                  <Link to="/"><li className='link-format'>Noticias</li></Link>
                  <Link to="/contato"><li className='link-format'>Quem Somos</li></Link>
                  <Link to="/"><li className='link-format'>Meu Perfil</li></Link>
                  <Link to="/"><li className='link-format'>Carrinho</li></Link>
                  <Link to="/login"><li className='link-format'>Login</li></Link>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Navbar

