import {render, screen} from '@testing-library/react';
import Navbar from '../Components/Navbar';
import { CartProvider } from '../Components/CartContext';
import { BrowserRouter } from 'react-router-dom';
import {test, expect} from 'vitest';

test('Navbar shows count 0 initially', () => {
    render(
        <BrowserRouter>
            <CartProvider>
                <Navbar />
            </CartProvider>
        </BrowserRouter>
    );

    expect(screen.getByText(/Cart \(0\)/i)).toBeInTheDocument();
});