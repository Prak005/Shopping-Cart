import {test, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import {CartProvider} from '../Components/CartContext';

const mockProduct = {
    id:1,
    title: 'test product',
    price: 100,
    image: 'test.jpg',
};

test ('Clicking Add to Cart increases  Navbar cart count', () => {
    render(
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <ProductCard product={mockProduct} />
            </CartProvider>
        </BrowserRouter>
    );

    expect(screen.getByText(/Cart \(0\)/i));
    fireEvent.click(screen.getByText(/Add to Cart/i));
    expect(screen.getByText(/Cart \(1\)/i));
});