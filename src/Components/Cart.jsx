import {useCart} from './CartContext';

function Cart(){
    const { cart, updateQuantity } = useCart();

    if(cart.length === 0){
        return (
            <div className='p-8'>
                <h1 className='text-3xl font-bold mb-4'>Your Cart</h1>
                <p className='text-gray-600'>Your cart is empty</p>
            </div>
        );
    }

    return (
        <div className='p-8 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>
            {cart.map(item => (
                <div key={item.id} className='flex items-center justify-between border-b py-4'>
                    <span className='flex-1'>{item.title}</span>
                    <div className='flex items-center gap-3'>
                        <button onClick={() => updateQuantity(item.id, item.quantity-1)} className='px-3 py-1 border rounded'>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity+1)} className='px-3 py-1 border rounded'>+</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cart;