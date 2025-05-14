import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
