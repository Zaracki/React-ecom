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
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <CardList products={filteredData} />
    </main>
  );
}
