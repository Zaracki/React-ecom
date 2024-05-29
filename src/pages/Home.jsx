import React, { useState } from 'react';
import Card from "../Card";
import { apiBaseUrl } from "../common/Constants";
import { useFetch } from "../components/hooks/useFetch";

export function Home() {
  const { data, isLoading, hasError } = useFetch(apiBaseUrl + "/online-shop");
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const renderData = () => {
    if (data && data.data) {
      const filteredData = data.data.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredData.length === 0) {
        return <div className="text-center mt-6">No results found</div>;
      }

      return filteredData.map((product) => (
        <Card
          data={product}
          key={product.id}
        />
      ));
    }
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error...</div>;
  }

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="flex justify-center mt-6">
        <input 
          type="text" 
          className="px-4 py-2 w-80 mb-5 border border-gray-300 rounded-lg focus:outline-none"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="App grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center min-h-screen">
        {renderData()}
      </div>
    </div>
  );
}
