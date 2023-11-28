import Popup from 'reactjs-popup';
import FormularioProdutos from '../formularioProdutos/FormularioProdutos';
import { useContext } from 'react';
import 'reactjs-popup/dist/index.css';
import './ModalProdutos.css'
import { AuthContext } from '../../../contexts/AuthContext';
import { FloppyDisk } from '@phosphor-icons/react';


function ModalProdutos() {

    const { usuario } = useContext(AuthContext);

    return (
        <>
            {
                usuario.usuario === 'root@root.com.br' ? (
                    <Popup
                        trigger={
                            <button
                                className='btn-produtos flex justify-center items-center text-center border-none outline-none w-[3rem] p-[0.30rem] shadow-md bg-[#d973ab] rounded-md'>
                                <i><FloppyDisk size={32} color="#f5f5f5" weight="fill" /></i>
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