import React from 'react';

const DiscountDisplay = ({ price, discountedPrice }) => {
  const discount = price - discountedPrice;
  const discountPercentage = ((discount / price) * 100).toFixed(2);

  return (
    <div>
      <span className="text-lg font-bold text-black">${discountedPrice.toFixed(2)}</span>
      {discount > 0 && (
        <>
          <span className="text-sm line-through text-gray-500 ml-2">${price.toFixed(2)}</span>
          <span className="text-sm text-red-500 flex">({discountPercentage}% off)</span>
        </>
      )}
    </div>
  );
};

export default DiscountDisplay;
