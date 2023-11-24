import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../../utils/toastAlerta';
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from '../../../contexts/AuthContext';
import { jelly } from "ldrs";
jelly.register('l-jelly')
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';

function FormularioProdutos() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '', })
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        })
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            window.navigator.vibrate(300)
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id != undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlerta('Produto atualizado com sucesso', 'sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    window.navigator.vibrate(300)
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar o Produto', 'erro')
                    window.navigator.vibrate(300)
                }
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                })

                toastAlerta('Produto cadastrado com sucesso', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    window.navigator.vibrate(300)
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar o Produto', 'erro');
                    window.navigator.vibrate(300)
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.nome === '';

    return (
        <div className="caixa container flex flex-col mx-auto items-center font-[Inter] text-[#515961]">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="form flex flex-col w-[50%] gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o Nome"
                        name="nome"
                        required
                        className="border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="duracao">Descrição</label>

                    <input
                        value={produto.duracao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui a Descrição do Produto"
                        name="duracao"
                        required
                        className="border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="valor">Valor</label>

                    <input
                        value={produto.valor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui o Valor do Produto"
                        name="valor"
                        required
                        className="border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]"
                    />
                </div>
                {/* 
                <div className="flex flex-col gap-2">
                    <label htmlFor="quantidade">Quantidade</label>

                    <input
                        value={produto.quantidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui a Quantidade do Produto"
                        name="quantidade"
                        required
                        className="border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]"
                    />
                </div> */}

                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto</label>

                    <input
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui a url da Foto"
                        name="foto"
                        required
                        className="border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]"
                    />
                </div>




                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="tema" id="tema" className='border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.nome}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    type='submit'
                    disabled={carregandoCategoria}
                    className='bg-[#D973AB] botaouser text-[0.85rem] font-[400] text-[#ffff] rounded text-slate-100 w-1/2 py-2 mx-auto flex justify-center'
                >
                    {isLoading ?
                        <l-jelly
                            color={'#f5f5f5'}
                            size={22}
                            speed={0.7}
                            stroke-length={0.10}
                            bg-opacity={0.22}
                        /> :
                        <span>Confirmar</span>
                    }
                </button>
            </form>
        </div>
    )
}

export default FormularioProdutos;