import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartForm from './CartForm';
import CheckoutButton from '../Cart/CheckoutButton';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

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
          <p className="text-lg">
            Your cart is empty.
            <Link
              to="/catalog"
              className="ml-2 text-xl font-semibold text-blue-400 hover:text-blue-600 underline"
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
          <Button
            variant="destructive"
            onClick={clearCart}
            className="text-lg px-6 py-3 rounded-xl"
          >
            Clear cart
          </Button>
        )}
      </div>

      {/* Delivery and Total */}
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
