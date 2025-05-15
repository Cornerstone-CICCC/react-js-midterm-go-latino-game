// frontend/src/components/CheckoutButton.tsx
const CheckoutButton = () => {
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:4500/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}) // si luego quieres enviar items del carrito, aquí los mandas
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirige a Stripe Checkout
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;

