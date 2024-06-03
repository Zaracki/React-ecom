const ProductImage = ({ imageUrl, altText }) => (
  <div className="md:flex-shrink-0">
    <img className="h-auto w-full object-cover md:w-96" src={imageUrl} alt={altText} />
  </div>
);

export default ProductImage;
