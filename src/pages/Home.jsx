import React, { useState } from 'react';
import { apiBaseUrl } from "../common/Constants";
import { useFetch } from "../components/hooks/useFetch";
import SearchBar from "../components/SearchBar";
import CardList from "../components/Cards/CardList";
import Loading from "../components/Loader";
import Error from "../components/ErrorMessage";

export function Home() {
  const { data, isLoading, hasError } = useFetch(apiBaseUrl + "/online-shop");
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
    return <Error />;
  }

  return (
    <main className="container mx-auto flex flex-col items-center flex-1">
      <h1 className="mt-5 mb-5 font-bold text-4xl md:text-5xl lg:text-7xl text-blue-500">Shop to you Drop</h1>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <CardList products={filteredData} />
    </main>
  );
}