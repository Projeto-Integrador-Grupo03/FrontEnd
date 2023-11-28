import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import { toastAlerta } from '../../utils/toastAlerta'
import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'

import './Cadastro.css'

function Cadastro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            navigate('/login')
        }
    }, [navigate, usuario])

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário', 'erro')
            }

        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'info')
            setUsuario({ ...usuario, senha: "" })
            setConfirmaSenha("")
        }

        setIsLoading(false)
    }

    return (
        <div className='flex w-[100%] h-[40rem] justify-center items-center'>
            <div className='caixa w-[60rem] h-[38rem] flex justify-between mt-12 bg-white shadow-xl'>

                <div className='w-[30rem]'>
                    <form className='flex flex-col items-center justify-center pt-[0.8rem] h-[0.5]' onSubmit={cadastrarNovoUsuario}>
                        <div className='primeiro-icone flex flex-col items-center'>
                            <div className='imagem-icone w-[5rem] h-[5rem] mb-3'></div>
                            <h6 className='text-[0.8rem] tracking-[0.1rem] mb-5'>Iniciativa Atena</h6></div>
                        <h2 className='primeiro-icone text-[1.7rem] text-[#515961] mb-[8px]' >Criar Conta</h2>
                        <div className='w-[16.5rem] h-[2rem]'>
                            <hr />
                        </div>

                        <div className='flex flex-col gap-[0.5rem]'>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="entre com seu nome"
                                    value={usuario.nome}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="text"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="e-mail"
                                    value={usuario.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="text"
                                    id="foto"
                                    name="foto"
                                    placeholder="foto"
                                    value={usuario.foto}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="senha"
                                    value={usuario.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="password"
                                    id="confirmarSenha"
                                    name="confirmarSenha"
                                    placeholder="confirmar senha"
                                    value={confirmaSenha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                                />
                            </div>

                            <div className='usuario flex flex-col-reverse justify-center items-center gap-[1.3rem] mt-[1rem]'>
                                
                            <p>
                                    Já possui uma conta?{' '}
                                    <Link to="/login" className="text-[#F2AD94]">
                                        Entrar
                                    </Link>
                                </p>

                                <button className='flex justify-center items-center w-[8.5rem] h-[3rem] bg-[#D973AB] rounded-md botaouser text-[0.85rem] font-[400] text-[#ffff]' type='submit'>
                                    {isLoading ? <l-jelly
                                        color={'#f5f5f5'}
                                        size={22}
                                        speed={0.7}
                                        stroke-length={0.10}
                                        bg-opacity={0.22}
                                    /> : <span>Cadastrar</span>}
                                </button>

                            </div>

                        </div>
                    </form>
                </div>
                <div className='imagem w-[30rem] h-[10rem]'>
                </div>
            </div>
        </div>
    )
}

export default Cadastro