import DiscountDisplay from "../DiscountDisplay";

const ProductDetails = ({ title, description, price, discountedPrice, tags, reviews = [] }) => {
  console.log('Reviews:', reviews); // Debugging line

  return (
    <div className="pt-auto">
      <h1 className="font-bold text-xl text-blue-500">{title}</h1>
      <p className="mt-2 text-gray-500">{description}</p>
      <div className="mt-4">
        <DiscountDisplay price={price} discountedPrice={discountedPrice} />
      </div>
      <div className="mt-4">
        {tags.map(tag => (
          <p key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</p>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg text-blue-700">Reviews</h2>
        {reviews.length > 0 ? (
          <ul className="mt-2 space-y-4">
            {reviews.map((review) => (
              <li key={review.id} className="border-b border-gray-200 pb-2">
                <p className="text-sm text-gray-600"><strong>{review.username}</strong> - {review.description}</p>
                <p className="text-sm text-gray-500">Rating: {review.rating} stars</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
