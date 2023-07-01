import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ContactUs from './pages/ContactUs/ContactUs';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import CartContextProvider from './contexts/CartContext';



function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/details/:productId' element={<ProductDetail />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
