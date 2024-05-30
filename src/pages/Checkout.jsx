import React from 'react';
import { useCartStore } from '../components/CartStore';
import CartItem from './../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

export function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // Function to calculate total quantity of a product in the cart
  const getTotalQuantity = (productId) => {
    return cart.filter((product) => product.id === productId).length;
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
    alert('Order placed successfully!');
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
          {uniqueProducts.map((product) => (
            <CartItem 
              key={product.id} 
              product={product} 
              handleIncrement={handleIncrement} 
              handleDecrement={handleDecrement} 
              handleDelete={handleDelete} 
            />
          ))}
        </div>
        <CartSummary totalPrice={getTotalPrice()} onPlaceOrder={handlePlaceOrder} />
      </div>
    </div>
  );
}
