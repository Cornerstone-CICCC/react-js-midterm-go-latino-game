const CartForm = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="First Name" className="w-full border p-2" />
      <input type="text" placeholder="Last Name" className="w-full border p-2" />
      <input type="text" placeholder="Phone" className="w-full border p-2" />
      <input type="text" placeholder="Country" className="w-full border p-2" />
      <input type="text" placeholder="City" className="w-full border p-2" />
      <input type="text" placeholder="Address" className="w-full border p-2" />
      <input type="text" placeholder="Postcode" className="w-full border p-2" />
    </form>
  );
};

export default CartForm;
