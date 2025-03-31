import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Product } from "@/types";
import ProductCard from "@/components/common/ProductCard";
import { featuredProducts as fallbackData } from "@/lib/data";
import { ChevronRight } from "lucide-react";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
    initialData: fallbackData
  });

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-sans">Produtos em Destaque</h2>
          <Link href="/loja" className="text-primary hover:text-primary-700 mt-2 md:mt-0 font-medium flex items-center">
            Ver todos <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-8"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
