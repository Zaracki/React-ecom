import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";
import { apiBaseUrl } from "../common/Constants";
import { useCartStore } from "../components/CartStore";
import DiscountDisplay from "../components/DiscountDisplay";

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
        <div className="md:flex-shrink-0">
          <img className="h-auto w-full object-cover md:w-96" src={image.url} alt="Product Image Placeholder" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4">
            <DiscountDisplay price={price} discountedPrice={discountedPrice} />
          </div>
          <div className="mt-4">
            {tags.map(tag => (
              <a key={tag} href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</a>
            ))}
          </div>
          <div className="mt-4">
            <button onClick={handleAddToCart} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}