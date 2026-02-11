import {useCart} from './CartContext';

function Cart(){
    const { cart, updateQuantity } = useCart();

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price*item.quantity, 0
    );

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
                <div key={item.id} className='flex items-center border-b py-4'>
                    <img src={item.image} alt={item.title} className='h-16 w-16 object-contain' />
                    <div className='flex-1'>
                        <p className='font-semibold'>{item.title}</p>
                        <p className='text-gray-500'>Rs. {item.price}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button onClick={() => updateQuantity(item.id, item.quantity-1)} className='px-3 py-1 border rounded'> - </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity+1)} className='px-3 py-1 border rounded'> + </button>
                    </div>
                </div>
            ))}
            <h2 className='text-xl font-bold mt-6 text-right'>
                Total : Rs. {totalPrice.toFixed(2)}
            </h2>
        </div>
    );
}

export default Cart;