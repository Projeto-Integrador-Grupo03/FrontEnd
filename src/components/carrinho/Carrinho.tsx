import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { CreditCard, Bank} from '@phosphor-icons/react'
import './Carrinho.css'
import Produto from '../../models/Produto';
import { toastAlerta } from '../../utils/toastAlerta';

function Carrinho() {

    const navigate = useNavigate();

    function continuarComprando() {
        navigate("/produtos")
    }

    function retornaLogin() {
        toastAlerta('Você precisa estar logado para finalizar a compra', 'info')
        navigate('/login')
    }

    const { posts, limparCart, comprar, usuario } = useContext(AuthContext)

    function Comprar() {
        comprar()
        navigate("/produtos")
    }

    const subtotal = posts.reduce((total, post) => {
        return total + (post.valor * post.id);
    }, 0)

    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    const [itensComprados, setItensComprados] = useState<Produto[]>([]);


    return (
        <div>

            <div id='dentro'>

                <div className='flex flex-col gap-10'>

                    <div className='flex flex-col gap-8 borda-compra'>

                        <h1 className='padrao font-bold text-[1.3rem] text-center p-4'>Selecione a forma de pagamento: </h1>
                        {/* div das formas de pagamento */}

                        <div className='padrao flex justify-around items-center'>

                        <div className='flex items-center justify-center w-[10rem] h-[4rem] outline-none'>
                                <div className='flex items-center justify-center w-full h-[100%]'>
                                    <div className='flex w-[100%] justify-between items-center'>
                                        <div className='flex items-center justify-center w-[10rem] h-[2rem] mb-5'>
                                            <input
                                                type="radio"
                                                id="cartao"
                                                name="payment"
                                                value="cartao"
                                                className='option-input radio'
                                                onChange={() => setSelectedPayment('cartao')} />
                                        </div>
                                        <div className='flex justify-center items-center gap-2'>
                                            <label htmlFor="cartão"><p className='payment font-bold text-lg'>Cartão</p></label>
                                            <i><CreditCard size={28} color="#515961" weight="regular" /></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-center w-[10rem] h-[4rem] outline-none'>
                                <div className="flex items-center justify-center w-full h-[100%] ">
                                    <div className='flex w-[100%]  justify-between items-center'>
                                        <div className='flex items-center justify-center w-[10rem] h-[2rem] mb-5'>
                                            <input
                                                type="radio"
                                                id="pix"
                                                name="payment"
                                                value="pix"
                                                className='option-input radio'
                                                onChange={() => setSelectedPayment('pix')} />
                                        </div>
                                        <div className='flex justify-center items-center gap-2'>
                                            <label htmlFor="pix" className='ml-5'><p className='payment font-bold text-lg'>Pix</p></label>
                                            <i><Bank size={28} color="#515961" weight="regular" /></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>




                        <div className='flex justify-center mb-2'>
                            <button
                                className={`padrao px-6 py-2 bg-[#D97398] text-[0.9rem] font-[700] text-center text-[#f5f5f5] rounded-lg 
                                ${selectedPayment ? 'dark:hover:bg-[#d97398da]' : 'opacity-50 cursor-not-allowed'}`}
                                onClick={usuario.token === "" ? retornaLogin: Comprar}
                                disabled={!selectedPayment}> Finalizar Compra </button>
                        </div>


                    </div>

                    <div className='flex justify-around gap-4'>

                        <button className='padrao px-4 py-2 text-[0.9rem] cursor-pointer font-medium border-none outline-none text-center text-[#f5f5f5] bg-[#F2AD94] transition-all duration-300 ease-in-out rounded-lg '
                            onClick={limparCart}
                            > Limpar carrinho
                        </button>

                        <button className='padrao px-4 py-2 text-[0.9rem] font-medium border-none outline-none text-center text-[#f5f5f5] bg-[#D97398] transition-all duration-300 ease-in-out rounded-lg '
                            onClick={continuarComprando}>Continuar comprando
                        </button>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default Carrinho