
export default function Apoio() {
    return (
        <section className="flex flex-col justify-center items-center font-[Inter]">

            <div className="flex justify-center items-center min-h-[10vh] w-[100%] mb-[2.5rem] mt-6">
                <div className="w-[85%]">
                    <h1 className="padrao text-[2.5rem] text-[#515961]">
                        Canais de apoio
                    </h1>
                    <hr className="separador w-full border-[0.15rem] rounded-sm mb-7" />
                </div>
            </div>


            <div className="flex justify-center w-[85%]  mx-8">
                <div className="flex flex-col">
                    <div className="responsividade gap-6 mx-8">

                        <div className="flex flex-col gap-6">
                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Ligue 180</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>Com atendimento 24 horas, todos os dias da semana, o serviço 180 é gratuito, confidencial e funciona em todo o Brasil. Orienta mulheres sobre seus direitos, as leis aplicáveis ao seu caso e onde está a delegacia mais próxima.</p>
                            </div>

                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Medidas Protetivas</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>Você também pode solicitar medidas protetivas de urgência na delegacia, defensoria pública ou diretamento no ministério público. Lembre-se que não é necessário o boletim de ocorrência para solicitar uma medida protetiva.</p>
                            </div>

                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Serviços de saúde hospitalar</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>UBS, CAPS, CTAs e hospitais: todo centro de saúde público ou privado tem como dever prestar atendimento de saúde hospitalar, clínico e de saúde mental. E em caso de violência sexual, procure um destes espaços em até 72h. É importante prevenir gravidez e doenças sexualmente transmissíveis.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Centros especializados para mulheres</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>A Casa da Mulher Brasileira é um espaço único que oferece apoio psicossocial, com delegacia, Juizado, Ministério Público, Defensoria Pública e serviços para autonomia econômica. Atualmente, há seis unidades em funcionamento no país: Campo Grande (MS), São Luís (MA), Fortaleza (CE), Curitiba (PR), Boa Vista (RR) e São Paulo (SP). Além disso, existem os CEAMs, que proporcionam acolhimento, atendimento psicológico e orientação jurídica para mulheres em situação de violência.</p>
                            </div>

                            <div className="borda flex flex-col justify-evenly items-center p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Apoio Psicológico</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>Separamos uma lista com atendimentos psicológicos à preço social e gratuitos para você! Eles estão separados por regiões de toda São Paulo.</p>
                                <p className='text-justify indent-2.5 text-[#515961]'>Temos também nossos parceiros do <a href="https://www.psymeetsocial.com/" target="_blank" className="text-[#D973AB]">PsyMeet</a> que oferecem atendimentos exclusivamente online à preço social com muitas opções de abordagens, com certeza você vai encontrar um profissional que vai dar um match perfeito.</p>
                                <a href="https://drive.google.com/file/d/1TAZS_moYwsTNmKs7Bh0G6m7k_d-DV5sV/view?usp=sharing" className="w-[85%]" target="_blank"><button className="rounded-lg border-none outline-none font-[Inter] text-[#f5f5f5] bg-[#D973AB] w-[100%] p-2">Planilha</button></a>
                            </div>

                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Mapa do Acolhimento:</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>Conectando mulheres vítimas de violência de gênero a psicólogas e advogadas voluntárias. Acesse em mapadoacolhimento.org  @mapadoacolhimento no Instagram  @MapaDoAcolhimento no Facebook.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Ligue 190</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>Caso você esteja em situação de risco e violência, disque 190. É o telefone para acionar socorro imediato.</p>
                            </div>

                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Centros de referência</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>Os Centros de Referência para Mulher (CRM, CDCM, CEAM, CAM, CRAM, CIAM, CRAMV) oferecem orientação jurídica, atendimento psicológico e acolhimento social, além de facilitar o acesso a benefícios sociais e abrigamento.</p>
                            </div>

                            <div className="borda flex flex-col justify-evenly p-4 gap-4 w-[100%]">
                                <h3 className='text-center font-[600] text-[1.5rem] text-[#515961]'>Casas-abrigo e Casas de Acolhimento Provisório</h3>
                                <p className='text-justify indent-2.5 text-[#515961]'>As Casas de Acolhimento Provisório constituem serviços de abrigamento temporário de curta duração (até 15 dias), não-sigilosos, para mulheres em situação de violência, acompanhadas ou não de seus filhos, que não correm risco iminente de morte. Existem também as Casas-Abrigo que são locais que oferecem moradia temporária em endereços sigilosos para mulheres vítimas de violência em risco de morte iminente e seus filhos menores de idade.</p>
                            </div>
                            
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </section>
    )

}


