import '../contato/Contato.css'
import '../../components/produtos/cardProdutos/CardProduto.css'
import '../../components/produtos/listaProdutos/ListaProdutos.css'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

function Contato() {
   return (
      <>
         <div className=' divtime w-[100%] flex justify-center items-center'>
            <div id='caixahome2'>
               <h1 className='text-[#515961] '>Iniciativa Atena</h1>

               <p className='text-[#515961]'>Com sua inspiração atemporal, Atena emerge como o símbolo perfeito para representar este e-commerce, cujo propósito é promover produtos e serviços dedicados ao empoderamento feminino.
                  Esse compromisso visa abordar questões de vulnerabilidade de gênero, como a desigualdade no mercado de trabalho e situações de assédio/violência.</p>

               <p className='text-[#515961]'>
                  Atena é uma das principais deidades da mitologia grega, associada a diversas áreas como a sabedoria, estratégia, justiça, habilidade, inspiração, artes, guerra e civilização. É conhecida pela sua inteligência estratégica e sabedoria. Ela é uma figura complexa que representa não apenas a guerra, mas também a civilização e o intelecto, refletindo o equilíbrio entre a força e a sabedoria.
                  Com sua inspiração atemporal, Atena emerge como o símbolo perfeito para representar este e-commerce, cujo propósito é promover produtos e serviços dedicados ao empoderamento feminino. Esse compromisso visa abordar questões de vulnerabilidade de gênero, como a desigualdade no mercado de trabalho e situações de assédio/violência.
               </p>

               <div className="atenafoto">
                  <img src="https://i.imgur.com/79YBz3r.png" alt="Imagem da Atena" />
               </div>
            </div>
         </div>

         <div className='w-full text-center p-8'>
            <h2 className="text-[2.5rem] tracking-tight font-bold text-[#515961] font-[Inter]">Nosso Time</h2>
         </div>

         <section className=''>
            <div className="flex justify-center items-center">
               <div className="responsividade-prod place-self-center mx-2 my-4 px-2 gap-16">

                  {/* Card Anderson */}
                  <div className="fonte">
                     <div className="borda flex h-[13.5rem] w-[36rem]">
                        <div
                           className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[11rem]"
                           style={{
                              backgroundImage: `url(${'https://i.imgur.com/Roompj0.jpeg'})`,
                           }}
                        ></div>

                        <div className="div-acima-cima flex flex-col w-full justify-around ">
                           <div className="div-cima flex flex-col">
                              <div className="flex justify-center items-center">
                                 <span className=" text-center inline-block font-[400] text-[0.7rem] text-[#515961] ">
                                    <h2 className="nome-format text-center text-[#515961] font-[700] text-[1.5rem] ">
                                       ANDERSON ALVES
                                    </h2>
                                    Desenvolvedor Fullstack C#
                                 </span>
                              </div>
                           </div>

                           <span className="duracao-format inline-block justify-center items-center indent-2 text-justify font-[600] h-[4rem] text-[#515961] text-[0.7rem] px-3">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in nobis suscipit quisquam molestias enim, commodi voluptas, sapiente consectetur iure labore nemo provident voluptatem omnis beatae sint saepe, quo quos.
                           </span>

                           <div className="div-baixo flex justify-center w-[100%]">
                              <div className="flex justify-center items-center gap-3">
                                 <a className='flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#F29494] rounded-lg' target='_blank' href="https://github.com/ander-alves"><i><GithubLogo size={32} color="#fff5f5" weight="light" /></i></a>
                                 <a className='flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#D97398] rounded-lg' target='_blank' href="https://www.linkedin.com/in/anderson-alves/"> <i><LinkedinLogo size={32} color="#fff5f5" weight="light" /></i></a>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  {/* Card Fernando */}
                  <div className="fonte">
                     <div className="borda flex h-[13.5rem] w-[36rem]">
                        <div
                           className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[11rem]"
                           style={{
                              backgroundImage: `url(${'https://i.imgur.com/DTsJsb0.jpeg'})`,
                           }}
                        ></div>

                        <div className="div-acima-cima flex flex-col w-full justify-around ">
                           <div className="div-cima flex flex-col">
                              <div className="flex justify-center items-center">
                                 <span className=" text-center inline-block font-[400] text-[0.7rem] text-[#515961] ">
                                    <h2 className="nome-format text-center text-[#515961] font-[700] text-[1.5rem] ">
                                       FERNANDO DIAS
                                    </h2>
                                    Desenvolvedor Fullstack C#
                                 </span>
                              </div>
                           </div>

                           <span className="duracao-format inline-block justify-center items-center indent-2 text-justify font-[600] h-[4rem] text-[#515961] text-[0.7rem] px-3">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in nobis suscipit quisquam molestias enim, commodi voluptas, sapiente consectetur iure labore nemo provident voluptatem omnis beatae sint saepe, quo quos.
                           </span>

                           <div className="div-baixo flex justify-center w-[100%]">
                              <div className="flex justify-center items-center gap-3">
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#F29494] rounded-lg" target='_blank' href="https://github.com/Fertilesoil"><i><GithubLogo size={32} color="#fff5f5" weight="light" /></i></a>
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#D97398] rounded-lg" target='_blank' href="https://www.linkedin.com/in/fernandodiascosta-dotnet/"> <i><LinkedinLogo size={32} color="#fff5f5" weight="light" /></i></a>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  {/* Card Gaspar */}
                  <div className="fonte">
                     <div className="borda flex h-[13.5rem] w-[36rem]">
                        <div
                           className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[9rem]"
                           style={{
                              backgroundImage: `url(${'https://i.imgur.com/3tZY6Hm.jpeg'})`,
                           }}
                        ></div>

                        <div className="div-acima-cima flex flex-col w-full justify-around ">
                           <div className="div-cima flex flex-col">
                              <div className="flex justify-center items-center">
                                 <span className=" text-center inline-block font-[400] text-[0.7rem] text-[#515961] ">
                                    <h2 className="nome-format text-center text-[#515961] font-[700] text-[1.5rem] ">
                                       GASPAR LEONARDI
                                    </h2>
                                    Desenvolvedor Fullstack C#
                                 </span>
                              </div>
                           </div>

                           <span className="duracao-format inline-block justify-center items-center indent-2 text-justify font-[600] h-[4rem] text-[#515961] text-[0.7rem] px-3">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in nobis suscipit quisquam molestias enim, commodi voluptas, sapiente consectetur iure labore nemo provident voluptatem omnis beatae sint saepe, quo quos.
                           </span>

                           <div className="div-baixo flex justify-center w-[100%]">
                              <div className="flex justify-center items-center gap-3">
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#F29494] rounded-lg" target='_blank' href="https://github.com/GasparLeonardi"><i><GithubLogo size={32} color="#fff5f5" weight="light" /></i></a>
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#D97398] rounded-lg" target='_blank' href="https://www.linkedin.com/in/gasparleonardi/"> <i><LinkedinLogo size={32} color="#fff5f5" weight="light" /></i></a>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  {/* Card Karina */}
                  <div className="fonte">
                     <div className="borda flex h-[13.5rem] w-[36rem]">
                        <div
                           className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[11rem]"
                           style={{
                              backgroundImage: `url(${'https://i.imgur.com/fszb1mX.jpeg'})`,
                           }}
                        ></div>

                        <div className="div-acima-cima flex flex-col w-full justify-around ">
                           <div className="div-cima flex flex-col">
                              <div className="flex justify-center items-center">
                                 <span className=" text-center inline-block font-[400] text-[0.7rem] text-[#515961] ">
                                    <h2 className="nome-format text-center text-[#515961] font-[700] text-[1.5rem] ">
                                       KARINA AKINA
                                    </h2>
                                    Desenvolvedor Fullstack C#
                                 </span>
                              </div>
                           </div>

                           <span className="duracao-format inline-block justify-center items-center indent-2 text-justify font-[600] h-[4rem] text-[#515961] text-[0.7rem] px-3">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nobis architecto aspernatur corporis. Nostrum, eos suscipit officia dolore illo sed necessitatibus sapiente ipsa voluptates voluptatibus fugiat dignissimos quod a quo?
                              A mollitia consequatur eaque accusantium perspiciatis autem in, aliquid reprehenderit architecto odit voluptas eveniet laboriosam eum laborum dolore soluta nesciunt et sint quidem maiores quos distinctio qui! Molestias, error deserunt.
                           </span>

                           <div className="div-baixo flex justify-center w-[100%]">
                              <div className="flex justify-center items-center gap-3">
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#F29494] rounded-lg" target='_blank' href="https://github.com/karinamzk"><i><GithubLogo size={32} color="#fff5f5" weight="light" /></i></a>
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#D97398] rounded-lg" target='_blank' href="https://www.linkedin.com/in/karinamiyazaki//"> <i><LinkedinLogo size={32} color="#fff5f5" weight="light" /></i></a>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  {/* Card Samantha */}
                  <div className="fonte">
                     <div className="borda flex h-[13.5rem] w-[36rem]">
                        <div
                           className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[11rem]"
                           style={{
                              backgroundImage: `url(${'https://i.imgur.com/yn8ovh3.jpeg'})`,
                           }}
                        ></div>

                        <div className="div-acima-cima flex flex-col w-full justify-around ">
                           <div className="div-cima flex flex-col">
                              <div className="flex justify-center items-center">
                                 <span className=" text-center inline-block font-[400] text-[0.7rem] text-[#515961] ">
                                    <h2 className="nome-format text-center text-[#515961] font-[700] text-[1.5rem] ">
                                       SAMANTHA BLAZIZZA
                                    </h2>
                                    Desenvolvedor Fullstack C#
                                 </span>
                              </div>
                           </div>

                           <span className="duracao-format inline-block justify-center items-center indent-2 text-justify font-[600] h-[4rem] text-[#515961] text-[0.7rem] px-3">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in nobis suscipit quisquam molestias enim, commodi voluptas, sapiente consectetur iure labore nemo provident voluptatem omnis beatae sint saepe, quo quos.
                           </span>

                           <div className="div-baixo flex justify-center w-[100%]">
                              <div className="flex justify-center items-center gap-3">
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#F29494] rounded-lg" target='_blank' href="https://github.com/samanthablazizza"><i><GithubLogo size={32} color="#fff5f5" weight="light" /></i></a>                             
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#D97398] rounded-lg" target='_blank' href="https://www.linkedin.com/in/samanthablazizza/"> <i><LinkedinLogo size={32} color="#fff5f5" weight="light" /></i></a>                     
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  {/* Card Valéria */}
                  <div className="fonte">
                     <div className="borda flex h-[13.5rem] w-[36rem]">
                        <div
                           className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[11rem]"
                           style={{
                              backgroundImage: `url(${'https://i.imgur.com/hDR4A1S.jpeg'})`,
                           }}
                        ></div>

                        <div className="div-acima-cima flex flex-col w-full justify-around ">
                           <div className="div-cima flex flex-col">
                              <div className="flex justify-center items-center">
                                 <span className=" text-center inline-block font-[400] text-[0.7rem] text-[#515961] ">
                                    <h2 className="nome-format text-center text-[#515961] font-[700] text-[1.5rem] ">
                                       VALÉRIA CARVALHO
                                    </h2>
                                    Desenvolvedor Fullstack C#
                                 </span>
                              </div>
                           </div>

                           <span className="duracao-format inline-block justify-center items-center indent-2 text-justify font-[600] h-[4rem] text-[#515961] text-[0.7rem] px-3">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in nobis suscipit quisquam molestias enim, commodi voluptas, sapiente consectetur iure labore nemo provident voluptatem omnis beatae sint saepe, quo quos.
                           </span>

                           <div className="div-baixo flex justify-center w-[100%]">
                              <div className="flex justify-center items-center gap-3">
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#F29494] rounded-lg" target='_blank' href="https://github.com/dValsc"><i><GithubLogo size={32} color="#fff5f5" weight="light" /></i></a>
                                    <a className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#D97398] rounded-lg" target='_blank' href="https://www.linkedin.com/in/val%C3%A9ria-carvalho/"> <i><LinkedinLogo size={32} color="#fff5f5" weight="light" /></i></a>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
}
export default Contato;