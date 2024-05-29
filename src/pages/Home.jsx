import Card from "../Card"
import { apiBaseUrl } from "../common/Constants";
import { useFetch } from "../components/hooks/useFetch"

export function Home() {
  const { data, isLoading, hasError } = useFetch(apiBaseUrl + "/online-shop");

  const renderData = () => {
    if (data && data.data) {
      return data.data.map((product) => (
        <Card
          data={product}
          key={product.id}
        />
      ));
    }
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error...</div>
  }

  return (
    <div className="container mx-auto">
      <div className="App flex flex-wrap justify-center items-center min-h-screen">
        {renderData()}
      </div>
    </div>

  )
}