'use client'; 

import { useRouter } from 'next/navigation'; 
import Image from 'next/image'; 
import StarRating from '@/components/StarRating';
import { ProductCardProps } from '@/interfaces/productCard'; 

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter(); // Instancia del enrutador

  // Función que maneja el clic en la tarjeta y navega a la página del producto
  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white border rounded-md p-2 shadow-none transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer flex flex-col h-full"
    >
      {/* Imagen del producto */}
      <div className="relative overflow-hidden rounded-md mb-2 h-64">
        <Image
          src={product.image}
          alt={product.title}
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" 
          style={{ objectFit: 'contain' }} 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110" 
          priority 
        />
      </div>
      
      {/* Información del producto */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
        <div className="flex items-center mb-2">
          <StarRating rating={product.rating.rate} />
        </div>
        <p className="text-xl font-semibold text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
