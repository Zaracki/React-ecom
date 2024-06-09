import React from 'react';

export const CartItem = ({ product, handleIncrement, handleDecrement, handleDelete }) => (
  <div className="flex flex-col rounded-lg bg-white sm:flex-row">
    <img
      className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.image.url} alt={product.title}
    />
    <div className="flex w-full flex-col px-4 py-4">
      <h2 className="font-semibold">{product.title}</h2>
      <p className="text-lg font-bold">${product.discountedPrice.toFixed(2)}</p>
      <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
      <div className="flex items-center space-x-2 mt-3">
        <button aria-label="Decrement" onClick={() => handleDecrement(product.id)} className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
          <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <input aria-label="Item count" type="text" id="number" className="border border-gray-200 rounded-full w-11 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-white-100 text-center" value={product.quantity} readOnly />
        <button aria-label="Increment" onClick={() => handleIncrement(product)}className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
          <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <span className="delete-button cursor-pointer text-red-700 underline"onClick={() => handleDelete(product.id)} >
        Delete
      </span>
    </div>
  </div>
);
