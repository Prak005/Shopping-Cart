import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from './CartContext';

function ProductCard({ product }) {
  const { addCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div
      className="
        bg-white border rounded-xl p-5 flex flex-col
        hover:shadow-lg hover:-translate-y-[2px]
        transition-all duration-200
      "
    >
      <div className="bg-gray-50 rounded-lg p-4 mb-4 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />
      </div>

      <h2 className="font-semibold text-sm mb-1 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-lg font-bold text-gray-800 mb-3">
        Rs.{product.price}
      </p>

      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setQty(q => Math.max(1, q - 1))}
          className="px-3 py-1 border rounded-md hover:bg-gray-100"
        >
          -
        </button>

        <input
          type="number"
          min="1"
          value={qty}
          onChange={e =>
            setQty(Math.max(1, Number(e.target.value)))
          }
          className="w-14 text-center border rounded-md"
        />

        <button
          onClick={() => setQty(q => q + 1)}
          className="px-3 py-1 border rounded-md hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <button
        onClick={() => addCart(product, qty)}
        className="
          mt-auto
          bg-blue-600 text-white py-2 rounded-lg font-medium
          shadow-sm
          hover:bg-blue-700 hover:shadow-md
          active:scale-[0.97]
          focus:outline-none focus:ring-2 focus:ring-blue-400
          transition-all duration-150
        "
      >
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
