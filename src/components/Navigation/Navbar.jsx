import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav class="bg-blue-500 p-4">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="text-white text-lg font-bold">
                Logo
            </div>
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
                <Link to="/" class="text-white hover:text-gray-300">Home</Link>
                <Link to="/About" class="text-white hover:text-gray-300">About</Link>
                <Link to="Contact" class="text-white hover:text-gray-300">Contact</Link>
            </div>
        </div>
    </nav>
  )
}