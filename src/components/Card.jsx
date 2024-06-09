import React from 'react';
import { Link } from 'react-router-dom';
import DiscountDisplay from './DiscountDisplay';

const Card = ({ data }) => {
  const { id, image, title, price, discountedPrice } = data;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={image.url} alt={title} />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-bold text-xl text-blue-500">{title}</h2>
          <DiscountDisplay price={price} discountedPrice={discountedPrice} />
        </div>
        <div className="mt-4">
          <Link to={`/ProductPage/${id}`}>
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
