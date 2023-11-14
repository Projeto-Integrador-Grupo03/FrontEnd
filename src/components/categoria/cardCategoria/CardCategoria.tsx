import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import './CardCategoria.css'

interface CardCategoriasProps {
    categoria: Categoria
}
function CardCategoria({ categoria }: Readonly<CardCategoriasProps>) {

    const { usuario } = useContext(AuthContext);

    return (
        <div className='borda-categoria border-none flex flex-col rounded-2xl overflow-hidden justify-between w-[20rem] h-[24rem]'>

            <div className='esquerda-imagem bg-cover bg-no-repeat bg-center w-[20rem] h-[24rem]' style={{
                    backgroundImage: `url(${categoria.descricao})`
                }}>
            </div>
            <div className='titulo-cat fonte text-[#515961] text-center py-2 px-6 font-bold text-2xl mt-[0.1]'>
                {categoria.nome}
            </div>

            {
                usuario.usuario === 'root@root.com.br' ? (<div className="flex">
                    <Link to={`/editarCategoria/${categoria.id}`}
                        className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarCategoria/${categoria.id}`}
                        className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>

                ) : ('')
            }
            
        </div>
    )
}

export default CardCategoria