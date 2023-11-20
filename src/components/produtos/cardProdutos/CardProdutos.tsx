import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Plus, ShoppingCart } from "@phosphor-icons/react";
import "./CardProduto.css";

interface CardProdutosProps {
  post: Produto;
}

function CardProdutos({ post }: Readonly<CardProdutosProps>) {
  const { usuario } = useContext(AuthContext);

  const formattedNumber = post.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  console.log(formattedNumber);

  const { adicionarProduto, removerProduto } = useContext(AuthContext)

  return (
    <div className="fonte">
      <div className="borda flex h-[13rem] cursor-pointer">
        <div
          className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[9rem]"
          style={{
            backgroundImage: `url(${post.foto})`,
          }}
        ></div>

        <div className=" flex flex-col w-full justify-evenly">
          <div className="flex flex-col gap-1 div-cima h-[5rem] px-[1.5rem]">
            <div className="flex flex-col items-start justify-between gap-2">
              <h2 className="nome-format text-[#515961] font-[600] text-[1.5rem]">
                {post.nome}
              </h2>
              <span className="duracao-format inline-block font-[400] text-[0.75rem] text-[#515961] h-[3rem]">
                {post.duracao}
              </span>
            </div>
            <span className="font-[650] text-[#515961]">
              Categoria: {post.categoria?.nome}
            </span>
          </div>

          <div className="div-baixo flex items-end justify-between h-[5rem] px-[1.5rem]">
            <div className="flex flex-col gap-3">
              <button className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#d973ab] rounded-md" onClick={() => adicionarProduto(post)}>
                <i>
                  <ShoppingCart size={24} weight="fill" color="#f5f5f5" />
                </i>
                <i>
                  <Plus size={14} weight="bold" color="#f5f5f5" />
                </i>
              </button>

              {/*<button className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#8673d9] rounded-md" onClick={() => removerProduto(post.id)}>
                <i>
                  <ShoppingCart size={24} weight="fill" color="#f5f5f5" />
                </i>
                <i>
                  <MinusCircle size={14} weight="bold" color="#f5f5f5"  />
                </i>
        </button>*/}
            </div>

            <span className="text-[#515961] font-[500]">
              {post.valor === 0 ? "Grátis" : formattedNumber}
            </span>
          </div>
        </div>

        {usuario.usuario === "root@root.com.br" ? (
          <div className="flex">
            <Link
              to={`/editarProdutos/${post.id}`}
              className="w-full text-white bg-indigo-400 
                        hover:bg-indigo-800 flex items-center justify-center py-2"
            >
              <button>Editar</button>
            </Link>
            <Link
              to={`/deletarProdutos/${post.id}`}
              className="text-white bg-red-400 
                        hover:bg-red-700 w-full flex items-center justify-center rounded-r-[1.8rem]"
            >
              <button>Deletar</button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardProdutos;
