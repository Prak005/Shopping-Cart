import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white/90 backdrop-blur
        border-b border-gray-200
      "
    >
      <div className="mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="
              font-semibold relative
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-blue-600
              after:transition-all
              hover:after:w-full
            "
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="
              font-semibold relative
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-blue-600
              after:transition-all
              hover:after:w-full
            "
          >
            Shop
          </Link>
        </div>

        <Link
          to="/cart"
          className="
            font-semibold flex items-center gap-2
            hover:text-blue-600 transition-colors
          "
        >
          Cart
          <span
            className="
              bg-blue-600 text-white
              text-xs font-medium
              px-2 py-0.5 rounded-full
              min-w-[20px] text-center
            "
          >
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
