import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Contato from './pages/contato/Contato'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/contato" element={<Contato />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;


