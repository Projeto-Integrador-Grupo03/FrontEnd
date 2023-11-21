/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { toastAlerta } from "../../../utils/toastAlerta";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { CheckCircle, XCircle } from "@phosphor-icons/react";
import { jelly } from "ldrs";
jelly.register('l-jelly')
import './DeletarProdutos.css'

function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
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
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Produto apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Produto', 'erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-[90vh] gap-4 mx-4'>

            <h1 className="text-[2.5rem] font-[300] font-[Inter] text-center text-[#515961]">Deseja deletar este produto?</h1>

            <div className="borda flex h-[11.5rem] w-[35rem]">
                <div
                    className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[9rem]"
                    style={{
                        backgroundImage: `url(${produto.foto})`
                    }}
                ></div>

                <div className="div-acima-cima flex flex-col w-full justify-evenly">
                    <div className="div-cima flex flex-col gap-1 h-[5rem] px-[1.5rem]">
                        <div className="flex flex-col items-start justify-between gap-2">
                            <h2 className="nome-format text-justify text-[#515961] font-[700] text-[1.1rem]">
                                {produto.nome}
                            </h2>
                            <span className="duracao-format text-justify indent-2 inline-block font-[400] text-[0.7rem] text-[#515961] h-[3rem]">
                                {produto.duracao}
                            </span>
                        </div>
                        <span className="categoria-format text-justify font-[600] text-[#515961] text-[0.8rem]">
                            Categoria: {produto.categoria?.nome}
                        </span>
                    </div>

                    <div className="div-baixo flex items-end justify-center h-[5rem] px-[2rem]">
                        <div className="flex w-[100%] justify-evenly gap-3">
                            <button onClick={deletarProduto}
                                className="flex justify-center items-center text-center border-none outline-none w-[6.5rem] p-[0.60rem] shadow-md bg-[#F29494] rounded-md"
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

                            <button className="flex justify-center items-center text-center border-none outline-none w-[6.5rem] p-[0.60rem] shadow-md bg-[#D97398] rounded-md" onClick={retornar}>
                                <i><XCircle size={20} color="#fff5f5" weight="bold" /></i></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeletarProduto