import { useState, useEffect } from 'react'
import type { Iproduct } from '../../../../backend/src/models/products.model'

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
    const [allProducts, setAllProducts] = useState<Iproduct[]>([])
    
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

    //addNewProduct
    const addNewProduct = () => {
        const newProduct = {
            id: allProducts.length + 1,
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


        <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full'>
            {allProducts.map(product => (
                <li key={product.id} className='group border p-4 rounded shadow-lg'>
                    <img src={product.image} alt={product.name} className='w-40 h-40 mx-auto rounded-xl transition-transform duration-300 group-hover:scale-185 group-hover:shadow-lg group-hover:z-50' />
                    <h2 className='text-lg font-bold truncate'>{product.name}</h2>
                    <p className="text-[#f95959] font-bold truncate">{product.description}</p>
                    <p className="text-[#f95959] font-bold ">${product.price}</p>
                    <button
                        onClick={() => editProduct(product.id)} 
                        className="mt-2 bg-[#f95959] text-white p-2 rounded-lg w-50 m-2">Edit
                    </button>
                    <button
                        onClick={() => deleteProduct(product.id)}
                        className="mt-2 bg-[#f95959] text-white p-2 rounded-lg w-50">Delete
                    </button>
                </li>
            ))}
        </ul>
     </div>
    );
}

export default AdminCatalog