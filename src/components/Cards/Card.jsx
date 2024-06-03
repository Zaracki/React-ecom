import React from 'react';
import { Link } from 'react-router-dom';
import DiscountDisplay from '../DiscountDisplay';

const Card = ({ data }) => {
  const { id, image, title, price, discountedPrice } = data;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <Link to={`/ProductPage/${id}`}>
        <img className="w-full h-48 object-cover" src={image.url} alt={title} />
      </Link>
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <Link to={`/ProductPage/${id}`} className="font-bold text-xl text-blue-500 hover:underline">{title}</Link>
          <DiscountDisplay price={price} discountedPrice={discountedPrice} />
        </div>
        <div className="mt-4">
          <Link to={`/ProductPage/${id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;