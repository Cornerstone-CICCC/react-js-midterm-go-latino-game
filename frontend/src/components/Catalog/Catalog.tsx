import { useEffect, useState } from 'react'
import type { Iproduct } from '../../../../backend/src/models/products.model'
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const SearchComponent = ({ data }: { data: string[] }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredResults = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-400 p-2 rounded"
      />
      <ul>
        {filteredResults.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function Catalog () {
    const data = ["Men", "Women", "Kids"];
    const products =[
        { id: 1,
            name: "Skinny Jeans", 
            price: 22.99, 
            description: "Stylish and comfortable",
            size: "M",
            image: "https://example.com/skinny-jeans.jpg",
            category: "Women",
            stock:""
        },
        {
            id: 2,
            name: "Skinny Jeans", 
            price: 22.99, 
            description: "Stylish and comfortable",
            size: "M",
            image: "https://example.com/skinny-jeans.jpg",
            category: "Women",
            stock:""
        },{
            id: 3,
            name: "Skinny Jeans", 
            price: 22.99, 
            description: "Stylish and comfortable",
            size: "M",
            image: "https://example.com/skinny-jeans.jpg",
            category: "Women",
            stock:""
        },{
            id: 4,
            name: "Skinny Jeans", 
            price: 22.99, 
            description: "Stylish and comfortable",
            size: "M",
            image: "https://example.com/skinny-jeans.jpg",
            category: "Women",
            stock:""
        }
    ]

    const [cart, setCart] = useState([]);
    const [isCartShowing, setIsCartShowing] = useState(false);
    const [allProducts, setAllProducts] = useState<Iproduct[]>([])

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

  const products = [
    {
    id: '1',
    image: 'https://static.pullandbear.net/assets/public/f960/2ef1/25bd4bc996c6/b6494a89cda8/03248588527-A6M/03248588527-A6M.jpg?ts=1746570068712&w=1000&f=auto',
    name: 'Green T-Shirt',
    description: 'Man cotton T-shirt',
    price: 19.99,
    size: 'M',
    stock: 10,
    category: 'Men',
  },
  {
    id: '2',
    image: 'https://static.pullandbear.net/assets/public/595b/75ae/79a54f24b4da/6c5836643c19/07591906605-a6m/07591906605-a6m.jpg?ts=1736935750440&w=1000&f=auto',
    name: 'Red Hoodie',
    description: 'Man Hoodie',
    price: 39.99,
    size: 'L',
    stock: 7,
    category: 'Men',
  },
  {
    id: '3',
    image: 'https://static.bershka.net/assets/public/5632/e3c8/ad8a4bcca238/273c05e34587/02924492802-a4o/02924492802-a4o.jpg?ts=1743508889078&w=1200',
    name: 'oversize T-shirt',
    description: 'Printed short sleeve oversize T-shirt',
    price: 49.99,
    size: 'XL',
    stock: 14,
    category: 'Men',
  },
  {
    id: '4',
    image: 'https://static.bershka.net/assets/public/11fd/44fb/4a2a445c9659/027bde8232e1/05593187610-a4o/05593187610-a4o.jpg?ts=1746610399848&w=1200',
    name: 'Summer Dress',
    description: 'Floral lightweight dress',
    price: 29.99,
    size: 'S',
    stock: 12,
    category: 'Women',
  },
  {
    id: '5',
    image: 'https://static.bershka.net/assets/public/55b0/27ad/10b544ed8552/b33d352d210e/00587173600-a4o/00587173600-a4o.jpg?ts=1742383400368&w=1200',
    name: 'Halter mini dress',
    description: 'Made with recycled materials',
    price: 34.99,
    size: 'M',
    stock: 5,
    category: 'Women',
  },
  {
    id: '6',
    image: 'https://static.bershka.net/assets/public/efed/26a5/d75a4c7e9f5f/749b71987b29/01163494712-a4o/01163494712-a4o.jpg?ts=1746445457211&w=1000',
    name: 'short sleeve shirt ',
    description: 'Gathered short sleeve shirt with tie detail',
    price: 59.99,
    size: 'L',
    stock: 9,
    category: 'Women',
  },
  {
    id: '7',
    image: 'https://static.bershka.net/assets/public/169a/6380/19d84a8b8082/46201f4b64fc/07118777700-a4o/07118777700-a4o.jpg?ts=1732182765699&w=1000',
    name: 'High neck sweater',
    description: 'Women Sweater',
    price: 24.99,
    size: 'XS',
    stock: 8,
    category: 'Women',
  },
  {
    id: '8',
    image: 'https://static.bershka.net/assets/public/501e/c1e7/08d5433e8422/01387e6e21df/07262686711-a4o/07262686711-a4o.jpg?ts=1739537441863&w=1200',
    name: 'Cropped V-neck sweater',
    description: 'Casual women sweater',
    price: 27.99,
    size: 'S',
    stock: 16,
    category: 'Women',
  },
  {
    id: '9',
    image: 'https://static.bershka.net/assets/public/fd58/463a/26fd4afb8182/dace108b37d1/02778623800-a4o/02778623800-a4o.jpg?ts=1740133956418&w=1200',
    name: 'Textured short sleeve polo shirt',
    description: '100% made of cotton',
    price: 44.99,
    size: 'M',
    stock: 11,
    category: 'Men',
  },
  ];

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: typeof products[0]) => {
    const item = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size || "M",
    };
    
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await fetch('http://localhost:4500/products')
                const data = await res.json()
                setAllProducts(data)
            } catch (err) {
                console.error('Error fetching products', err)
            }
        }
        getAllProducts()
    }, [])

    return(
        <div className="p-8 bg-[#e3e3e3] text-[#233142] m-8 rounded-md">
            {/*Header */}
            <header>
                <h1 className="catalogTitle flex justify-center">Find your next style</h1>
            </header>

            {/*Search */}
            <SearchComponent data={data}/>

            {/*Shopping Cart Toggle*/}
                {/*Cart Button */}
                <button id='cart-btn' type='submit' 
                className='
                bg-[#f95959] 
                text-[#233142]
                font-bold
                text-[20px]
                border border-black 
                rounded-lg
                w-25
                p-2'>
                    {isCartShowing ? "Hide Cart" : "Show Cart"}
                </button>

                {/*Cart Container */}
                {isCartShowing && (
                    <div className='bg-white p-4 rounded shadow-md'>
                        <button
                            onClick={clearCart}
                            className='bg-[#f95959]
                             text-white 
                             font-thin 
                             text-[15px] 
                             border 
                             border-black 
                             rounded-lg 
                             w-[100px] 
                             p-2'
                        >
                            Clear Cart
                        </button>
                        <div id='products-container'>
                            {cart.length > 0 ? (
                                cart.map(({ id, name, price, description, size, image, category}) => (
                                    <div key={id}
                                    className='products-card-container border p-4 rounded'>
                                        <img src={image} alt={name} className="w-32 h-32" />
                                        <h2>{name}</h2>
                                        <p>{description}</p>
                                        <p>Price: ${price.toFixed(2)}</p>
                                        <p>Size: {size}</p>
                                        <p>Category: {category}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Your cart is empty</p>
                            )}
                        </div>
                        <p>Total items: {cart.length}</p>
                    </div>
                )}

                {/*Displaying Products Cards */}
                {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {products.map((product) => (
                        <div key={product.id} className='border p-4 rounded shadow-lg'>
                            <img src={product.image} alt={product.name} className="w-32 h-32 mx-auto" />
                            <h2 className='text-lg font-bold'>{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="text-[#f95959] font-bold">${product.price.toFixed(2)}</p>
                            <button
                            onClick={() => addToCart(product)}
                            className="mt-2 
                            bg-[#f95959] 
                            text-white 
                            p-2 
                            rounded-lg
                            w-full"
                        >
                            Add to Cart
                        </button>
                        </div>
                    ))}
                </div> */}
                <ul className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {allProducts.map(product => (
                        <li key={product.id} className='border p-4 rounded shadow-lg list-none'>
                            <div className='overflow-hidden h-[300px] flex items-center'>
                                <img src={product.image} alt={product.name} className='w-full h-max' />
                            </div>
                            <h2 className='text-lg font-bold truncate'>{product.name}</h2>
                            <p className="text-[#f95959] font-bold truncate">{product.description}</p>
                            <p className="text-[#f95959] font-bold ">${product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-2 bg-[#f95959] text-white p-2 rounded-lg w-full">
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
        </div>
    );


  addToCart(item);
  };

      {/*Search */}
      <SearchComponent data={data} />

      {/*Shopping Cart Toggle*/}
      <button
  id="cart-btn"
  type="button"
  className="bg-[#f95959] text-[#233142] font-bold text-[20px] border border-black rounded-lg w-25 p-2"
  onClick={() => navigate('/cart')}
>
  Go to Cart
</button>

    </div>
  );

}

export default Catalog;
