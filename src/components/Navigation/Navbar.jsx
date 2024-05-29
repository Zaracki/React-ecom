import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-lg font-bold">
                Shopdrop
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                <Link to="/About" className="text-white hover:text-gray-300">About</Link>
                <Link to="Contact" className="text-white hover:text-gray-300">Contact</Link>
            </div>
        </div>
    </nav>
  )
}