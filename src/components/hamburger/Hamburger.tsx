﻿import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, SignOut } from '@phosphor-icons/react/dist/ssr';
import './Hamburguer.css'
import { toastAlerta } from '../../utils/toastAlerta';


export default function Hamburger() {

  const { usuario, handleLogout } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false);

  function logout() {
    if (usuario.token === '') {
      toastAlerta('Você precisa estar logado para sair!', 'info')
      window?.navigator?.vibrate?.(300)
      closeMenu()
    } else {
      handleLogout()
      toastAlerta('Obrigado por usar nosso site!', 'default')
      closeMenu()
    }
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    window?.navigator?.vibrate?.(50)
  }

  function closeMenu() {
    setMenuOpen(false);
    window?.navigator?.vibrate?.(50)
  }

    // function menuOnClick() {
    //   document.getElementById("menu-bar").classList.toggle("change");
    //   document.getElementById("nav").classList.toggle("change");
    //   document.getElementById("menu-bg").classList.toggle("change-bg");
    // }


  return (
    <aside className={`menu ${menuOpen ? 'open' : ''}`}>


      <input type="checkbox" className='trigger' onChange={toggleMenu} checked={menuOpen} />

      <div className="menu-lines">
        <span></span>
        <span></span>
        <span></span>
      </div>


      <div className='div-flex'>
        <Link to="/produtos" onClick={closeMenu}><li className='link-format text-[white] font-[700]'>Produtos</li></Link>
        <Link to="/categorias" onClick={closeMenu}><li className='link-format text-[white] font-[700]'>Categorias</li></Link>
        <Link to="/apoio" onClick={closeMenu}><li className='link-format text-[white] font-[700]'>Canais de Apoio</li></Link>
        <Link to="/contato" onClick={closeMenu}><li className='link-format text-[white] font-[700]'>Quem Somos</li></Link>
        {usuario.token === '' ? (<Link to="/login" onClick={closeMenu}><li className='link-format text-[white] font-[700]'>Login</li></Link>)
          : ('')}
        <div className='flex justify-evenly w-[100%]'>
          <Link to="/carrinho" onClick={closeMenu}><li className='link-format text-[white] font-[700]'><i><ShoppingCart size={28} weight="bold" color="#f5f5f5" /></i></li></Link>
          <Link onClick={logout} to="/login"><li><i className='link-format cursor-pointer'><SignOut size={28} color="#fff5f5" weight="bold" /></i></li></Link>
        </div>
      </div>


    </aside>
  )
}