import {useEffect, useState} from 'react';
import {useCart} from './CartContext';

function Shop(){
    const {addCart} = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error('Failed to fetch products', err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading){
        return (
            <p className='p-8'>Loading products...</p>
        );
    }

    return (
        <div className='p-8'>
            <h1 className='text-3xl font-bold mb-6'>Shop</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map(product => (
                    <div key={product.id} className='border p-4 rounded flex flex-col'>
                        <img src={product.image} alt={product.title} className='h-40 object-contain mb-4' />
                        <h2 className='font-semibold mb-1'>{product.title}</h2>
                        <p className='text-gray-600 mb-4'>{product.price}</p>
                        <button onClick={() => addCart(product, 1)} className='mt-auto bg-blue-600 text-white py-2 rounded'>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;