import React from 'react';
import { useCartStore } from '../components/CartStore';

export function Checkout() {
  const cart = useCartStore((state) => state.cart);
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
            <div key={product.id} className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={product.image.url}
                alt={product.title}
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{product.title}</span>
                <p className="text-lg font-bold">${product.discountedPrice.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                <span
                  className="delete-button cursor-pointer text-red-500 underline"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">${getTotalPrice()}</p>
        </div>
        <button className="mt-4 mb-8 w-full rounded-md bg-green-500 px-6 py-3 font-medium text-white">
          Place Order
        </button>
      </div>
    </div>
  );
}