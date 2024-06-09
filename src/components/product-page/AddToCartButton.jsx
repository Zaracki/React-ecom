const AddToCartButton = ({ onAddToCart }) => (
  <div className="mt-8">
    <button onClick={onAddToCart} className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
      Buy Now
    </button>
  </div>
);

export default AddToCartButton;
