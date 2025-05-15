import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const {
    state: { items },
    removeFromCart,
    updateQuantity,
    getTotal,
    clearCart,
  } = useCart();

  return (
    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Cart Items */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold border-b pb-4">Shopping Cart</h1>
        {items.length === 0 ? (
          <p>Your cart is empty. <Link to="/catalog" className="text-blue-600 underline">Go shopping</Link></p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex gap-4 items-center border-b pb-4">
              <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-md" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="border px-2"
                  >-</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="border px-2"
                  >+</button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500"
                  >🗑</button>
                </div>
              </div>
            </div>
          ))
        )}
        {items.length > 0 && (
          <button onClick={clearCart} className="text-sm text-red-600 mt-4">Clear cart</button>
        )}
      </div>

      {/* Delivery and Total */}
      <div className="border rounded-lg p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
        <form className="space-y-4">
          <input type="text" placeholder="First Name" className="w-full border p-2" />
          <input type="text" placeholder="Last Name" className="w-full border p-2" />
          <input type="text" placeholder="Phone" className="w-full border p-2" />
          <input type="text" placeholder="Country" className="w-full border p-2" />
          <input type="text" placeholder="City" className="w-full border p-2" />
          <input type="text" placeholder="Address" className="w-full border p-2" />
          <input type="text" placeholder="Postcode" className="w-full border p-2" />
        </form>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between font-semibold">
            <span>Subtotal:</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery:</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-2">
            <span>Total to Pay:</span>
            <span>${(getTotal() + 20).toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to="/checkout"
            className="block w-full text-center py-3 bg-black text-white font-semibold hover:bg-gray-800"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
