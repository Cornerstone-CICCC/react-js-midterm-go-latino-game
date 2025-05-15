import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Success from '../src/components/Stripe/Sucess';
import Cancel from '../src/components/Stripe/Cancel';
import Cart from './components/Cart/CartPage';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Cart />} />
  <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
