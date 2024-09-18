import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa'; 

export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="text-black text-3xl font-bold tracking-wide flex items-center">
          <FaShoppingBag className="mr-2" /> 
          Libélula Products
        </Link>
      </div>
    </nav>
  );
}
