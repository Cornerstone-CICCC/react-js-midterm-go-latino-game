import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartForm from './CartForm';
import CheckoutButton from '../Cart/CheckoutButton';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const {
    state: { items },
    getTotal,
    clearCart,
  } = useCart();

  return (
   <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Cart Items */}
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold text-white border-b border-white/30 pb-4">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <p className="text-lg text-white">
  Your cart is empty.
  <Link
    to="/catalog"
    className="ml-3 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition"
  >
    Go shopping
  </Link>
</p>
        ) : (
          items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))
        )}

        {items.length > 0 && (
        <button
    onClick={clearCart}
    className="mt-4 bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-xl transition font-bold"
  >
    Clear cart
  </button>
        )}
      </div>

      <div className="border rounded-lg p-6 bg-gray-50 text-black">
        <h2 className="text-2xl font-bold mb-4 text-black">Delivery Information</h2>
        <CartForm />

        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal:</span>
            <span className="text-[#f95959] text-xl font-bold">${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-2">
            <span>Total to Pay:</span>
            <span className="text-[#f95959] text-2xl">${getTotal().toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-6">
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
