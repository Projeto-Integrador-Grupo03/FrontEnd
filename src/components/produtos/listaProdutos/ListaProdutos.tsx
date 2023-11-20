import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import Produto from "../../../models/Produto";
import CardProdutos from "../cardProdutos/CardProdutos";
import { toastAlerta } from "../../../utils/toastAlerta";
import { trefoil } from "ldrs";
trefoil.register("l-trefoil");

import "./ListaProdutos.css";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarPorProduto() {
    try {
      await buscar("/produtos", setProdutos, {});
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("Houve um erro inesperado", "erro");
      }
    }
  }
  useEffect(() => {
    buscarPorProduto();
  }, [produtos.length]);

  return (
    <>
      <div className="flex justify-center items-center min-h-[10vh] w-[100%] mb-[2.5rem] mt-6">
        <div className="w-[85%]">
          <h1 className="padrao text-[2.5rem] text-[#515961]">Produtos</h1>
          <hr className="separador w-full border-[0.15rem] rounded-sm" />
        </div>
      </div>

      {produtos.length === 0 && (
        <div className="flex items-center justify-center h-[90vh]">
          <l-trefoil
            color={"hsla(16, 78%, 76%, 0.90)"}
            size={300}
            speed={1.8}
            stroke={13}
            stroke-length={0.1}
            bg-opacity={0.22}
          />
        </div>
      )}

      <div className="flex justify-center items-center">
        <div className="responsividade-prod place-self-center mx-4 my-4 px-2 gap-16">
          {produtos.map((produto) => (
            <CardProdutos key={produto.id} post={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;
