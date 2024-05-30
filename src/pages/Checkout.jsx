import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../components/CartStore';
import CartItem from './../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

export function Checkout() {
  const navigate = useNavigate();

  const { cart, addToCart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  // Function to calculate total quantity of a product in the cart
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
    const product = cart.find((product) => product.id === productId);
    if (product) {
      removeFromCart(productId);
    }
  };

  const handlePlaceOrder = () => {
    // Placeholder function for placing order
    clearCart(); // Clear the cart
    navigate('/CheckoutSuccess'); // Navigate to CheckoutSuccess page
  };

  // Create a new array of unique products with their quantities
  const uniqueProducts = Array.from(new Set(cart.map((product) => product.id))).map((productId) => ({
    ...cart.find((product) => product.id === productId),
    quantity: getTotalQuantity(productId),
  }));

  return (
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order Summary</p>
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
        {!cart.length === 0 && (
          <CartSummary totalPrice={getTotalPrice()} onPlaceOrder={handlePlaceOrder} />
        )}
        <CartSummary totalPrice={getTotalPrice()} onPlaceOrder={handlePlaceOrder} cartEmpty={cart.length === 0} />
      </div>
    </div>
  );
}
