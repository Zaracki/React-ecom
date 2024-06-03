import DiscountDisplay from "../DiscountDisplay";

const ProductDetails = ({ title, description, price, discountedPrice, tags }) => (
  <div className="pt-auto">
    <h1 className="font-bold text-xl text-blue-500">{title}</h1>
    <p className="mt-2 text-gray-500">{description}</p>
    <div className="mt-4">
      <DiscountDisplay price={price} discountedPrice={discountedPrice} />
    </div>
    <div className="mt-4">
      {tags.map(tag => (
        <a key={tag} href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</a>
      ))}
    </div>
  </div>
);

export default ProductDetails;
