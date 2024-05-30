import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";
import { apiBaseUrl } from "../common/Constants";
import DiscountDisplay from "../components/DiscountDisplay";

export function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, hasError } = useFetch(`${apiBaseUrl}/online-shop/${id}`);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError || !data || !data.data) {
    return <div>Error: Product not found</div>;
  }

  const { title, description, image, price, discountedPrice, tags } = data.data;

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
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
          <div className="flex items-center space-x-2 mt-3">
            <button 
              onClick={decrementQuantity}
              className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
              <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <input 
              type="text" 
              id="number" 
              className="border border-gray-200 rounded-full w-11 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-white-100 text-center" 
              value={quantity} 
              readOnly 
            />
            <button 
              onClick={incrementQuantity}
              className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
              <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}
