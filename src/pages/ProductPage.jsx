import { useParams } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";
import { apiBaseUrl } from "../common/Constants";
import { useCartStore } from "../components/CartStore";
import ProductImage from "../components/product-page/ProductImage";
import ProductDetails from "../components/product-page/ProductDetails";
import AddToCartButton from "../components/product-page/AddToCartButton";
import Reviews from "../components/product-page/ProductReviews";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loader";

export function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, hasError } = useFetch(`${apiBaseUrl}/online-shop/${id}`);

  const { addToCart } = useCartStore();

  if (isLoading) {
    return <Loading />;
  }

  if (hasError || !data || !data.data) {
    return <ErrorMessage message="Error finding product" />
  }

  const { title, description, image, price, discountedPrice, tags, reviews } = data.data;

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
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg flex">
        <ProductImage imageUrl={image.url} altText={title} />
        <div className="p-8">
          <ProductDetails 
            title={title} 
            description={description} 
            price={price} 
            discountedPrice={discountedPrice} 
            tags={tags}
            reviews={reviews}
          />
          <AddToCartButton onAddToCart={handleAddToCart} />
          <Reviews reviews={reviews} />
        </div>
      </div>
    </main>
  );
}
