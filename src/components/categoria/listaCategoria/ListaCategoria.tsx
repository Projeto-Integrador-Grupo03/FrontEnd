import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../../utils/toastAlerta';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardCategoria/CardCategoria';
import { trefoil } from 'ldrs'
trefoil.register('l-trefoil')


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
        <div className="container flex flex-col mx-[6rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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