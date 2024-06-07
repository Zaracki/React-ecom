const SearchBar = ({ searchQuery, onSearchChange }) => (
  <div className="flex justify-center mt-6">
    <input 
      type="text" 
      className="px-4 py-2 w-80 mb-5 border border-gray-300 rounded-lg focus:outline-none"
      placeholder="Search by title..."
      value={searchQuery}
      onChange={onSearchChange}
      aria-label="Search by title"
    />
  </div>
);

export default SearchBar;
