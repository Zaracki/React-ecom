import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartStore } from '../CartStore';

export default function Navbar() {
  const cart = useCartStore(state => state.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Shopdrop
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex items-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li className="ml-4">
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
          <ul className="flex items-center ml-auto">
            <li className="ml-4">
              <Link to="/checkout" className="text-white hover:text-gray-300 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </Link>
            </li>
            <li>
              <p id="number">{cartCount}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
