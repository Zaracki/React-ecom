import React from 'react';
import { Link } from 'react-router-dom';

export function CheckoutSuccess() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Success</h1>
        <p className="text-lg text-gray-700 mb-6">Your order has been placed successfully!</p>
        <Link to={`/`}>
          <button className="px-6 py-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"> Go to Home Page </button>
        </Link>
        
      </div>
    </main>
  );
};
