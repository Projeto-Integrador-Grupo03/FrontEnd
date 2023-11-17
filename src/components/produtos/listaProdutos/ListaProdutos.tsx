import { useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import CardProdutos from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';
import { trefoil } from 'ldrs'
trefoil.register('l-trefoil')



function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarPorProduto() {
        try {
            await buscar('/produtos', setProdutos, {})
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('Houve um erro inesperado', 'erro')
            }
        }

    }
    useEffect(() => {
        buscarPorProduto()
    }, [produtos.length])


    return (

        <>
            {produtos.length === 0 && (
                <div className='flex items-center justify-center h-[90vh]'>
                    <l-trefoil
                        color='#c82d82'
                        size={300}
                        speed={1.5}
                        stroke={13}
                        stroke-length={0.10}
                        bg-opacity={0.22}
                    />
                </div>
            )}

            <div className='container mx-4 my-4
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>

                {produtos.map((produto) => (
                    <CardProdutos key={produto.id} post={produto} />
                ))}

            </div>
        </>
    )
}

export default ListaProdutos