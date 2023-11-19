import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../../utils/toastAlerta';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardCategoria/CardCategoria';
import { trefoil } from 'ldrs'
trefoil.register('l-trefoil')

import './ListaCategoria.css'


function ListaCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token },
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token])

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <>

      <div className="flex justify-center items-center min-h-[30vh] w-[100%]">
        <div className="w-[85%]">
          <h1 className="padrao text-[5rem] text-[#515961]">Categorias</h1>
          <hr className="separador w-full border-[0.15rem] rounded-sm" />
        </div>
      </div>

      {categorias.length === 0 && (
        <div className='flex items-center justify-center h-[90vh]'>
          <l-trefoil
            color={'hsla(16, 78%, 76%, 0.90)'}
            size={300}
            speed={1.8}
            stroke={13}
            stroke-length={0.10}
            bg-opacity={0.22}
          />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategoria;