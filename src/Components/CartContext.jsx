import {useState, createContext, useContext} from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }){
    const [cart, setCart] = useState([]);

    function addCart(product, quantity){
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if(existing){
                return prev.map(item => 
                    item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                );
            }
            return [...prev, {...product, quantity}];
        });
    }

    function updateQuantity(id, quantity){
        setCart(prev => quantity<=0 
                                ? prev.filter(item => item.id !== id)
                                : prev.map(item => item.id === id ? {...item, quantity} : item)
        );
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{cart, addCart, updateQuantity, totalItems}}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useCart(){
    return useContext(CartContext);
}