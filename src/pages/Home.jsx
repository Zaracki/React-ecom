import React, { useState } from 'react';
import { apiUrl } from "../common/Constants";
import { useFetch } from "../components/hooks/useFetch";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Loading from "../components/Loader";
import ErrorMessage from '../components/ErrorMessage';

export function Home() {
  const { data, isLoading, hasError } = useFetch(apiUrl);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredData = data && data.data 
    ? data.data.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <ErrorMessage message="An error has occurred" />;
  }

  return (
    <main className="container mx-auto flex flex-col items-center flex-1">
      <h1 className="mt-5 mb-5 font-bold text-4xl md:text-5xl lg:text-7xl text-blue-500">Shop to you Drop</h1>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <ProductList products={filteredData} />
    </main>
  );
};