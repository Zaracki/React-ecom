const Reviews = ({ reviews = [] }) => {
  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg text-blue-700">Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="mt-2 space-y-4">
          {reviews.map((review) => (
            <li key={review.id} className="border-b border-gray-200 pb-2">
              <p className="text-sm text-gray-600">
                <strong>{review.username}</strong> - {review.description}
              </p>
              <p className="text-sm text-gray-500">Rating: {review.rating} stars</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No reviews yet.</p>
      )};
    </div>
  );
};

export default Reviews;
