import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutosProps {
    post: Produto
}

function CardProdutos({ post }: CardProdutosProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>{post.nome}</h4>
                    <p>{post.duracao}</p>
                    <p>{post.valor}</p>
                    <p>{post.quantidade}</p>

                    <p>Categoria: {post.categoria?.nome}</p>
                    <div>
                        <img src={post.foto} alt="" />
                    </div>
                </div>

            </div>
            <div className="flex">
                <Link to={`/editarProdutos/${post.id}`} className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProdutos/${post.id}`} className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutos