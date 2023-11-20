import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Trash, PencilSimple } from "@phosphor-icons/react";
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
                usuario.usuario === 'root@root.com.br' ? (<div className="flex justify-evenly items-center">
                    <Link
                        to={`/editarcategoria/${categoria.id}`}
                        className="flex justify-center items-center text-center border-none outline-none w-[10.5rem] p-[0.60rem] shadow-md bg-[#F29494] rounded-l-md"
                    >
                        <button>
                            <i><PencilSimple size={20} weight="bold" color="#f5f5f5" /></i></button>
                    </Link>

                    <Link
                        to={`/deletarCategoria/${categoria.id}`}
                        className="flex justify-center items-center text-center border-none outline-none w-[10.5rem] p-[0.60rem] shadow-md bg-[#D97398] rounded-r-md"
                    >
                        <button>
                            <i><Trash size={20} weight="bold" color="#f5f5f5" /></i></button>
                    </Link>
                </div>

                ) : ('')
            }

        </div>
    )
}

export default CardCategoria