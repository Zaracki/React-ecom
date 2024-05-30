import { useParams } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";
import { apiBaseUrl } from "../common/Constants";
import { useCartStore } from "../components/CartStore";
import ProductImage from "../components/product-page/ProductImage";
import ProductDetails from "../components/product-page/ProductDetails";
import AddToCartButton from "../components/product-page/AddToCartButton";

export function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, hasError } = useFetch(`${apiBaseUrl}/online-shop/${id}`);

  // Access addToCart from useCartStore
  const { addToCart } = useCartStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError || !data || !data.data) {
    return <div>Error: Product not found</div>;
  }

  const { title, description, image, price, discountedPrice, tags } = data.data;

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      title,
      description,
      image,
      price,
      discountedPrice,
    };
    addToCart(productToAdd);
    alert('Product added to cart!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg flex">
        <ProductImage imageUrl={image.url} altText="Product Image Placeholder" />
        <div className="p-8">
          <ProductDetails 
            title={title} 
            description={description} 
            price={price} 
            discountedPrice={discountedPrice} 
            tags={tags} 
          />
          <AddToCartButton onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
