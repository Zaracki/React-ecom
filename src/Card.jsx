import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={data.image.url} alt="Product" />
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <div className="font-bold text-xl mb-2 line-clamp-2">{data.title}</div>
          <p className="text-gray-700 text-base">{data.price}</p>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
