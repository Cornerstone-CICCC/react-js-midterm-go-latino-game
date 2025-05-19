import { useEffect, useState } from 'react'
import type { Iproduct } from '../../../../backend/src/models/products.model'

const SearchComponent = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) =>{
        setSearchTerm(e.target.value);
    };

    const filteredResults = data.filter((item) => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

        return(
            <div>
            <input 
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={handleChange}
            className='border border-gray-400 p-2 rounded' 
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

    const clearCart = () => {
        setCart([]);
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
}

export default Catalog