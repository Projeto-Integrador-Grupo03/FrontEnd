import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';

import Produto from '../../../models/Produto';
import CardProdutos from '../cardProdutos/CardProdutos';

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarPorProduto() {
        try {
            await buscar('/produtos', setProdutos, {})
        } catch (error: any) { }

    }
    useEffect(() => {
        buscarPorProduto()
    }, [produtos.length])


    return (

       <>
            {produtos.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className='container mx-auto my-4 
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {produtos.map((produto) => (
                    <CardProdutos key={produto.id} post={produto} />
                ))}

            </div>
        </>
    )
}

export default ListaProdutos