import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Plus, ShoppingCart,Trash, PencilSimple } from "@phosphor-icons/react";
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

  const { adicionarProduto, removerProduto } = useContext(AuthContext)

  return (
    <div className="fonte">
      <div className="borda flex h-[11.5rem] w-[35rem]">
        <div
          className="esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[9rem]"
          style={{
            backgroundImage: `url(${post.foto})`,
          }}
        ></div>

        <div className="div-acima-cima flex flex-col w-full justify-evenly">
          <div className="div-cima flex flex-col gap-1 h-[5rem] px-[1.5rem]">
            <div className="flex flex-col items-start justify-between gap-2">
              <h2 className="nome-format text-justify text-[#515961] font-[700] text-[1.1rem]">
                {post.nome}
              </h2>
              <span className="duracao-format indent-2 text-justify inline-block font-[400] text-[0.7rem] text-[#515961] h-[3rem] mb-5">
                {post.duracao}
              </span>
            </div>
            <span className="categoria-format text-justify font-[600] text-[#515961] text-[0.8rem]">
              Categoria: {post.categoria?.nome}
            </span>
          </div>

          <div className="div-baixo flex items-end justify-between h-[5rem] px-[1.5rem]">
            <div className="flex flex-col gap-3">

              {usuario.usuario === "root@root.com.br" ? (
          <div className="flex gap-3">
            <Link
              to={`/editarProdutos/${post.id}`}
              className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#F29494] rounded-md"
            >
              <button>
                <i><PencilSimple size={16} weight="bold" color="#f5f5f5"/></i></button>
            </Link>
            <Link
              to={`/deletarProdutos/${post.id}`}
              className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#D97398] rounded-md"
            >
              <button>
                <i><Trash size={16} weight="bold" color="#f5f5f5"/></i></button>
            </Link>
          </div>
        ) : (
          <button className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#d973ab] rounded-md" onClick={() => adicionarProduto(post)}>
                <i>
                  <ShoppingCart size={24} weight="fill" color="#f5f5f5" />
                </i>
                <i>
                  <Plus size={14} weight="bold" color="#f5f5f5" />
                </i>
              </button>
        )}

              {/*<button className="flex justify-center items-center text-center border-none outline-none w-[4rem] p-[0.30rem] shadow-md bg-[#8673d9] rounded-md" onClick={() => removerProduto(post.id)}>
                <i>
                  <ShoppingCart size={24} weight="fill" color="#f5f5f5" />
                </i>
                <i>
                  <MinusCircle size={14} weight="bold" color="#f5f5f5"  />
                </i>
        </button>*/}
            </div>

            <span className="valor text-[#515961] font-[500]">
              {post.valor === 0 ? ("Grátis") : (formattedNumber)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProdutos;
