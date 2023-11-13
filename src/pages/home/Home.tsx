import "../home/Home.css";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";

function Home() {
  return (
    <section>
      <section className="flex flex-col items-center">
        <div id="caixahome">
          <div id="conteudohome">
            <h1>
              O Projeto Iniciativa Atena Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text:
            </h1>
            <ul>
              <li>Lorem ipsum dolor </li>
              <li>Lorem ipsum dolor </li>
              <li>Lorem ipsum dolor </li>
            </ul>
            <button id="botao">Veja nossos produtos</button>
          </div>
          <div id="atena">
            <img src="./src/assets/img/atena.jpg" alt="" />
          </div>
        </div>
        <section className="flex justify-center items-center">
        <ListaProdutos />
      </section>
      </section>
    </section>
  );
}

export default Home;
