import { useCart } from '../../context/CartContext';

const CheckoutButton = () => {
  const {
    state: { items },
  } = useCart();

 const handleCheckout = async () => {
  if (items.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  try {
    const response = await fetch('http://localhost:4500/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: items.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image, 
          size: item.size,
        })),
      }),
    });

    const data = await response.json();

    if (data?.url) {
      window.location.href = data.url;
    } else {
      throw new Error('Stripe did not return a checkout URL');
    }
  } catch (error) {
    console.error('Error during checkout:', error);
    alert('Something went wrong while starting the checkout process.');
  }
};

  return (
   <button
  onClick={handleCheckout}
  className="w-full mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow transition-transform hover:scale-105"
>
  Checkout
</button>
  );
};

export default CheckoutButton;
