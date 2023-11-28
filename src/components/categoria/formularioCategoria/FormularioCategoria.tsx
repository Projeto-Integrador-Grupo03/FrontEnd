import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toastAlerta } from "../../../utils/toastAlerta";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { jelly } from "ldrs";
jelly.register('l-jelly')
import Categoria from "../../../models/Categoria";

function FormularioCategoria() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    
    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                window?.navigator?.vibrate?.(300)
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }
    
    useEffect(() => {
        if (token === '') {
            window?.navigator?.vibrate?.(300)
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }



    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    
        e.preventDefault()
        setIsLoading(true)

        
        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toastAlerta('Categoria atualizada com sucesso', 'sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar a Categoria', 'erro')
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlerta('Categoria cadastrada com sucesso', 'sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a Categoria', 'erro')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    } 
    
    return (
        <div className="container flex flex-col items-center justify-center mx-auto font-[Inter] text-[#515961]">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>
            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        name='nome'
                        className="border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Imagem da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 usuario rounded-md placeholder:text-[0.8rem] p-[0.5rem]"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button

                    className="bg-[#D973AB] botaouser text-[0.85rem] font-[400] text-[#ffff] rounded text-slate-100 w-1/2 py-2 mx-auto flex justify-center" type="submit">
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

export default FormularioCategoria