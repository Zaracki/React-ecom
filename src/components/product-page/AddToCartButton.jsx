const AddToCartButton = ({ onAddToCart }) => (
  <div className="mt-8">
    <button onClick={onAddToCart} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Buy Now
    </button>
  </div>
);

export default AddToCartButton;
