import { useEffect, useState } from "react";
import { useCartStore } from '../components/hooks/useCartStore';

const CartCounter = () => {
  const cart = useCartStore(state => state.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  return (
    <>
      {cartCount > 0 && (
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-700 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
          {cartCount}
        </div>
      )}
    </>
  );
};

export default CartCounter;