import React, { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { fetchProductsFromAPI } from '@/services/api';
import { Product, ProductContextType } from '@/interfaces/context'; 

// Crea el contexto con un valor por defecto de undefined
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Define la interfaz para las props del proveedor
interface ProductProviderProps {
  children: ReactNode;
}

// Crea el proveedor del contexto
export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  // Función para obtener los productos de la API
  const fetchProducts = async () => {
    try {
      const fetchedProducts = await fetchProductsFromAPI();
      setProducts(fetchedProducts);
      setError(null); // Limpiar el error en caso de éxito
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.'); // Establecer mensaje de error
    }
  };

  // Efecto para obtener productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []); 

  return (
    <ProductContext.Provider value={{ products, fetchProducts, error }}>
      {error && <div className="text-red-500 text-center p-4">{error}</div>} {/* Mostrar mensaje de error */}
      {children}
    </ProductContext.Provider>
  );
};


export default ProductContext;
