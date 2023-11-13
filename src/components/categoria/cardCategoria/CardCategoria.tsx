import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import './CardCategoria.css'

interface CardCategoriasProps {
    categoria: Categoria
}
function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <div className='flex flex-col justify-center items-center'>
                <div className='img-categoria w-[15rem] h-[22rem]'>
                </div>
                <h1>Livros</h1>
            </div>
        </div>
    )
}

export default CardCategoria