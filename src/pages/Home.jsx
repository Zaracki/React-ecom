import Card from "../Card"
import { fetchApi } from "../components/hooks/useFetch"

export function Home() {
  fetchApi()
  return (
    <div className="App flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}