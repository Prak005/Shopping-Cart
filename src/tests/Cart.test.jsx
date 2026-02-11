import {test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import Cart from '../Components/Cart';
import {CartProvider} from '../Components/CartContext';

test('Cart page shows empty message initially', () => {
    render(
        <CartProvider>
            <Cart />
        </CartProvider>
    );
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
});