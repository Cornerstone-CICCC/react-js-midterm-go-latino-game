import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Catalog from './components/Catalog/Catalog'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Success from '../src/components/Stripe/Sucess';
import Cancel from '../src/components/Stripe/Cancel';
import Cart from './components/Cart/CartPage';

import './App.css'

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/catalog" element={<Catalog/>} />
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Cart />} />
  <Route path="/cancel" element={<Cancel />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App