import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { toastAlerta } from "../../../utils/toastAlerta";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import './DeletarCategoria.css'
import { CheckCircle, XCircle } from "@phosphor-icons/react";
import { jelly } from "ldrs";
jelly.register('l-jelly')

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-[90vh] gap-4'>

            <h1 className="text-[2.5rem] font-[300] font-[Inter] text-center text-[#515961]">Deseja deletar esta categoria?</h1>

            <div className="borda-categoria border-none flex flex-col rounded-2xl overflow-hidden justify-between w-[20rem] h-[24rem]">
                <div className='esquerda-imagem bg-cover bg-no-repeat bg-center w-[20rem] h-[24rem]' style={{
                    backgroundImage: `url(${categoria.descricao})`
                }}>
                </div>
                <div className='titulo-cat fonte text-[#515961] text-center py-2 px-6 font-bold text-2xl mt-[0.1]'>
                    {categoria.nome}
                </div>


                {
                    usuario.usuario === 'root@root.com.br' ? (<div className="flex justify-evenly items-center">

                        <button onClick={deletarCategoria}
                            className="flex justify-center items-center text-center border-none outline-none w-[10.5rem] p-[0.60rem] shadow-md bg-[#F29494] rounded-l-md"
                        >
                            {isLoading ?
                                <l-jelly
                                color={'#f5f5f5'}
                                size={22}
                                speed={0.7}
                                stroke-length={0.10}
                                bg-opacity={0.22}
                                /> :
                                <i><CheckCircle size={20} color="#fff5f5" weight="bold" /></i>
                            }
                        </button>

                        <button className="flex justify-center items-center text-center border-none outline-none w-[10.5rem] p-[0.60rem] shadow-md bg-[#D97398] rounded-r-md" onClick={retornar}>
                            <i><XCircle size={20} color="#fff5f5" weight="bold" /></i></button>
                    </div>

                    ) : ('')
                }

            </div>




            {/*<h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>

                <div className='esquerda-imagem bg-cover bg-no-repeat bg-center w-[20rem] h-[24rem]' style={{
                    backgroundImage: `url(${categoria.descricao})`
                }}>
                </div>
                <div className='titulo-cat fonte text-[#515961] text-center py-2 px-6 font-bold text-2xl mt-[0.1]'>
                    {categoria.nome}
                </div>

                <div className="flex">

                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>

                    <button
                        className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 
                            flex items-center justify-center'
                        onClick={deletarCategoria}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>

                </div>
                    </div>*/}
        </div>
    )
}
export default DeletarCategoria