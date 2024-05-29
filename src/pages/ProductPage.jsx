import { useParams } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";
import { apiBaseUrl } from "../common/Constants";


export function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, hasError } = useFetch(`${apiBaseUrl}/online-shop/${id}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error...</div>;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg flex">
        <div className="md:flex-shrink-0">
          <img className="h-auto w-full object-cover md:w-96" src="https://via.placeholder.com/600x600" alt="Product Image Placeholder" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.title}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{data.title}</a>
          <p className="mt-2 text-gray-500">Product description lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod.</p>
          <div className="mt-4">
            <a href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#category</a>
            <a href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#another_category</a>
          </div>
          <div className="mt-4">
            <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}