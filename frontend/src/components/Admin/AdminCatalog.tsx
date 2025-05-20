import { useState } from 'react'
import { Link } from 'react-router-dom'

import './AdminCatalog.css'

function AdminCatalog(){
    const [products, setProducts] = useState([
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
    ]);

    //addNewProduct
    const addNewProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: "New Product",
            price: 0.00,
            description: "",
            size: "",
            image: "",
            category: "",
            stock:"In Stock",
        };
        setProducts([...products, newProduct]);
    };

    //editProduct
    const editProduct = (id) => {
        setProducts(products.map(product => 
            product.id === id ? { ...product, name: "Product has been updated" } : product
        ));
    };

    //deleteProduct
    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return(
        <div className="p-8 bg-[#e3e3e3] text-[#233142] m-8 rounded-md">
            {/*Header */}
            <header>
                <h1 className="catalogTitle flex justify-center">
                    Admin Catalog
                </h1>
            </header>

            {/*Add Product Button */}
            <button
            onClick={addNewProduct}
            className="
            flex
            justify-center
            m-2 
            bg-[#f95959] 
            text-white 
            p-2 
            rounded-lg
            w-50"
        >
            Add New Product
        </button>

         {/*Sign up Button */}
         <div className="flex flex-row btn-logout">
            <button className="
            flex
            justify-center
            m-2 
            bg-[#f95959] 
            text-white 
            p-2 
            rounded-lg
            w-50">
                <Link to="/logout">Logout</Link>
            </button>
        </div>

            {/*Displaying Products Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {products.map((product) => (
                        <div key={product.id} className='border p-4 rounded shadow-lg'>
                            <img src={product.image} alt={product.name} className="w-40 h-32 mx-auto" />
                            <h2 className='text-lg font-bold'>{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="text-[#f95959] font-bold">${product.price.toFixed(2)}</p>
                            {/*Edit Button */}
                            <button
                            onClick={() => editProduct(product.id)} 
                            className="
                            btn-action
                            mt-2 
                            bg-[#f95959] 
                            text-white 
                            p-2 
                            rounded-lg
                            w-50
                            m-2
                            "
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteProduct(product.id)}
                            className="mt-2
                            bg-[#f95959] 
                            text-white 
                            p-2 
                            rounded-lg
                            w-50
                            m-2"
                        >
                            Delete
                        </button>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default AdminCatalog