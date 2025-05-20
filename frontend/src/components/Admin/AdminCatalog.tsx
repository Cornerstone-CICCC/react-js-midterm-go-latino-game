import { useState, useEffect } from 'react';
interface Iproduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  size: string[];
  image: string;
  category: string;
  stock: number;
}

type ProductInput = {
  name: string;
  price: number;
  description: string;
  size: string[];
  image: string;
  category: string;
  stock: number;
};

function AdminCatalog() {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<ProductInput>({
    name: '',
    price: 0,
    description: '',
    size: [''],
    image: '',
    category: '',
    stock: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:4500/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value,
    }));
  };

  const submitNewProduct = async () => {
    try {
      const res = await fetch('http://localhost:4500/products/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error('Failed to add product');
      const created = await res.json();
      setProducts([...products, created]);
      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  const resetForm = () => {
    setNewProduct({
      name: '',
      price: 0,
      description: '',
      size: [''],
      image: '',
      category: '',
      stock: 0,
    });
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`http://localhost:4500/products/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete product');
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <div className="p-8 bg-[#e3e3e3] text-[#233142] m-8 rounded-md">
      <header>
        <h1 className="text-2xl font-bold text-center mb-4">Admin Catalog</h1>
      </header>

      <button
        onClick={() => setShowModal(true)}
        className="m-2 bg-[#f95959] text-white p-2 rounded-lg"
      >
        Add New Product
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Create New Product</h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="size"
              placeholder="Size"
              value={newProduct.size.join(',')}
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  size: e.target.value.split(',').map((s) => s.trim()),
                }))
              }
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              value={newProduct.stock}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={submitNewProduct}
                className="bg-[#f95959] text-white p-2 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="bg-gray-300 text-black p-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full">
        {products.map((product) => (
          <li key={product._id} className="group border p-4 rounded shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 mx-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="text-lg font-bold truncate">{product.name}</h2>
            <p className="text-[#f95959] font-bold truncate">{product.description}</p>
            <p className="text-[#f95959] font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm">Stock: {product.stock}</p>
            <button
              onClick={() => alert('Editing')}
              className="mt-2 bg-[#f95959] text-white p-2 rounded-lg w-full"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProduct(product._id)}
              className="mt-2 bg-[#f95959] text-white p-2 rounded-lg w-full"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminCatalog;
