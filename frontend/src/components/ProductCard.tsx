import { Link } from 'react-router-dom';



interface ProductProps {
  id: string,
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ id, image, name, description, price }: ProductProps) => {
  return (
     <Link to={`/products/${id}`}>
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
  <img
    src={image}
    alt={name}
    className="w-full aspect-[4/5] object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{description}</p>
    <p className="font-bold text-md mt-2">${price}</p>
  </div>
</div>
 </Link>
  );
};

export default ProductCard;
