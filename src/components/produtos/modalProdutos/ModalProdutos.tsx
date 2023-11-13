import Popup from 'reactjs-popup';
import FormularioProdutos from '../formularioProdutos/FormularioProdutos';

import 'reactjs-popup/dist/index.css';
import './ModalProdutos.css'

function ModalProdutos() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='w-[8.5rem] h-[3rem] bg-[#D973AB] rounded-md botaouser text-[0.85rem] font-[400] text-[#ffff]'>
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormularioProdutos />
            </Popup>
        </>
    );
}

export default ModalProdutos;