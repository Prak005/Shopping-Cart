import {Link} from 'react-router-dom';
import {useCart} from './CartContext';

function Navbar(){
    const {totalItems} = useCart();
    return (
        <nav className='bg-white px-6 py-4 shadow flex gap-6'>
            <Link to='/' className='font-semibold hover:text-blue-600'>Home</Link>
            <Link to='/shop' className='font-semibold hover:text-blue-600'>Shop</Link>
            <Link to='/cart' className='font-semibold hover:text-blue-600'>Cart ({totalItems})</Link>
        </nav>
    );
}

export default Navbar;