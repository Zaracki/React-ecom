import Card from "./Card";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <div className="text-center mt-6">No results found</div>;
  };

  return (
    <div className="App grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
      {products.map(product => (
        <Card data={product} key={product.id} />
      ))};
    </div>
  );
};

export default ProductList;