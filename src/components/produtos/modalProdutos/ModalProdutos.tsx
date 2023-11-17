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
                                className='link-format w-[9rem] h-[2rem] rounded-md text-[1rem] font-[700] text-[#ffff]'>
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