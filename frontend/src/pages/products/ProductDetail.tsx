import { useParams } from 'react-router-dom';
import { products } from '../../data/product';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl aspect-[4/5] object-cover"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>

        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className="border px-4 py-2 rounded hover:bg-black hover:text-white transition"
            >
              {size}
            </button>
          ))}
        </div>

        <p className="text-2xl font-semibold">
          ${(product.price / 100).toFixed(2)}
        </p>

        <button className="w-full border py-3 font-semibold hover:bg-black hover:text-white transition">
          Add to cart
        </button>

        <p className="text-sm text-gray-400">Delivery in 3–5 working days.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
