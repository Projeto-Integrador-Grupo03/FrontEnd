import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, SignOut } from '@phosphor-icons/react/dist/ssr';
import './Hamburguer.css'
import { toastAlerta } from '../../utils/toastAlerta';


export default function Hamburger() {

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    if (usuario.token === '') {
      toastAlerta('Você precisa estar logado para sair!', 'info')
    } else {
      handleLogout()
      toastAlerta('Obrigado por usar nosso site!', 'default')
    }
  }

  function menuOnClick() {
    document.getElementById("trigger").classList.toggle("change");
  }

  return (
    <aside className="menu">

      
      <input type="checkbox" className='trigger'/>

      <div className="menu-lines">
        <span></span>
        <span></span>
        <span></span>
      </div>


      <div className='div-flex'>
        <Link onClick={menuOnClick} to="/produtos"><li className='link-format text-[white] font-[700]'>Produtos</li></Link>
        <Link onClick={menuOnClick} to="/categorias"><li className='link-format text-[white] font-[700]'>Categorias</li></Link>
        <Link onClick={menuOnClick} to="/"><li className='link-format text-[white] font-[700]'>Canais de Apoio</li></Link>
        <Link onClick={menuOnClick} to="/contato"><li className='link-format text-[white] font-[700]'>Quem Somos</li></Link>
        <Link onClick={menuOnClick} to="/login"><li className='link-format text-[white] font-[700]'>Login</li></Link>
        <div className='flex justify-evenly w-[100%]'>
          <Link onClick={menuOnClick} to="/"><li className='link-format text-[white] font-[700]'><i><ShoppingCart size={28} weight="bold" color="#f5f5f5" /></i></li></Link>
          <Link onClick={logout} to="/login"><li><i className='link-format cursor-pointer'><SignOut size={28} color="#fff5f5" weight="bold" /></i></li></Link>
        </div>
      </div>

      
    </aside>
  )
}