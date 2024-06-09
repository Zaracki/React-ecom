import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../components/hooks/useCartStore';
import CartItem from './../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

export function Checkout() {
  const navigate = useNavigate();

  const { cart, addToCart, decrementFromCart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    decrementFromCart: state.decrementFromCart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  const getTotalQuantity = (productId) => {
    return cart.reduce((total, product) => (product.id === productId ? total + 1 : total), 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.discountedPrice, 0).toFixed(2);
  };

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (product) => {
    addToCart(product);
  };

  const handleDecrement = (productId) => {
    const quantity = getTotalQuantity(productId);
    if (quantity > 1) {
      decrementFromCart(productId);
    } else {
      removeFromCart(productId);
    }
  };

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/CheckoutSuccess');
  };

  const uniqueProducts = Array.from(new Set(cart.map((product) => product.id))).map((productId) => ({
    ...cart.find((product) => product.id === productId),
    quantity: getTotalQuantity(productId),
  }));

  return (
    <main className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 flex-1">
      <div className="px-4 pt-8">
        <h1 className="text-xl font-medium">Order Summary</h1>
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">No products in cart</p>
          ) : (
            uniqueProducts.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
        {cart.length !== 0 && (
          <CartSummary totalPrice={getTotalPrice()} onPlaceOrder={handlePlaceOrder} />
        )}
      </div>
    </main>
  );
};
