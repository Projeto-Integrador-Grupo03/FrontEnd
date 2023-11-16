import Popup from 'reactjs-popup';
import FormularioProdutos from '../formularioProdutos/FormularioProdutos';
import { useContext } from 'react';
import 'reactjs-popup/dist/index.css';
import './ModalProdutos.css'
import { AuthContext } from '../../../contexts/AuthContext';


function ModalProdutos() {

    const { usuario } = useContext(AuthContext);

    return (
        <>
            {
                usuario.usuario === 'root@root.com.br' ? (
                    <Popup
                        trigger={
                            <button
                                className='link-format w-[3.5rem] h-[1rem] rounded-md botaouser text-[1rem] font-[500] text-[#ffff] font-[Eczar]'>
                                Novo Produto
                            </button>
                        }
                        modal
                    >
                        <FormularioProdutos />
                    </Popup>) : ('')
            }
        </>
    );
}

export default ModalProdutos;