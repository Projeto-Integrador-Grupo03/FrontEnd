import '../home/Home.css'
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos'
//import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos'
import Carrossel from '../../components/carrossel/Carrossel'

function Home() {
    return (
        <section className='flex flex-col'>
            <div id='caixahome'>
                <Carrossel />
            </div>
            <ListaProdutos />
        </section>

    )
}

export default Home;
