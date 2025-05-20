import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Catalog from './components/Catalog/Catalog';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Admin from './components/Admin/Admin';
import Success from './components/Stripe/Sucess';
import Cancel from './components/Stripe/Cancel';
import CartPage from './components/Cart/CartPage';
import { Toaster } from 'react-hot-toast'
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      
      <Route path="/admin" element={<Admin />} />
    </Routes>
    <Toaster/>
    </>
  );
}

export default App;