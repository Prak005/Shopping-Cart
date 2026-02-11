import {useState} from 'react';
import PropTypes from 'prop-types';
import {useCart} from './CartContext';

function ProductCard({product}){
    const {addCart} = useCart();
    const [qty, setQty] = useState(1);

    return(
        <div className='border p-4 rounded flex flex-col'>
            <img src={product.image} alt={product.title} className='h-40 object-contain mb-4'></img>
            <h2 className='font-semibold mb-1'>{product.title}</h2>
            <p className='text-gray-600 mb-4'>Rs.{product.price}</p>
            <div className='flex items-center gap-2 mb-3'>
                <button onClick={() => setQty(q=>Math.max(1,q-1))} className='px-3 border rounded'> - </button>
                <input type='number' min='1' value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} className='w-12 text-center border rounded'/>
                <button onClick={() => setQty(q => q+1)} className='px-3 border rounded'> + </button>
            </div>
            <button onClick = {() => {addCart(product, qty)}} className='mt-auto bg-blue-600 text-white py-2 rounded'>Add to Cart</button>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductCard;