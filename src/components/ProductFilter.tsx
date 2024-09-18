import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

interface ProductFilterProps {
  onFilter: (query: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
    <div className="relative flex items-center mb-4">
      <FaSearch className="absolute left-3 text-gray-500 transition-transform duration-300 transform scale-125" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full px-12 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
      />
    </div>
  );
};

export default ProductFilter;
