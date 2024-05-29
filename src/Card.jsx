import React from 'react';

const Card = ({ data }) => {
  console.log(data); // Add this line
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={data.image.url} alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Buy</button>
      </div>
    </div>
  );
};

export default Card;
