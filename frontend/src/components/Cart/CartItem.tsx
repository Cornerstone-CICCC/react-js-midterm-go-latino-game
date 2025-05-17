import { useCart } from '../../context/CartContext';
import { Button } from "@/components/ui/button";

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

const CartItem = ({ id, name, price, image, quantity, size }: Props) => {
  const { updateQuantity, removeFromCart, updateSize } = useCart();

  return (
    <div className="flex gap-4 items-center border-b border-white/30 pb-4">
      <img src={image} alt={name} className="w-24 h-28 object-cover rounded-md" />
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-white">{name}</h2>

        {/* Selector de talla */}
        <div className="mt-1">
          <label className="text-sm text-gray-300 mr-2">Size:</label>
          <select
            value={size}
            onChange={(e) => updateSize(id, e.target.value)}
            className="border border-gray-400 rounded-md p-1 text-sm"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>

        <p className="text-orange-400 font-semibold text-lg mt-2">${price.toFixed(2)}</p>

        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(id, quantity - 1)}
            className="text-xl px-2"
            disabled={quantity === 1}
          >
            -
          </Button>

          <span className="font-medium text-lg text-white">{quantity}</span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(id, quantity + 1)}
             className="text-xl px-2"
          >
            +
          </Button>

          <Button
            variant="destructive"
            size="icon"
            onClick={() => removeFromCart(id)}
          >
            🗑
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
