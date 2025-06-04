import { useQuery } from "@tanstack/react-query";
import { ServiceCategory } from "@/types";
import CategoryCard from "@/components/common/CategoryCard";
import { serviceCategories as fallbackData } from "@/lib/data";
import { Icons } from "@/components/ui/icons";

const ServiceCategories = () => {
  const { data: categories, isLoading } = useQuery<ServiceCategory[]>({
    queryKey: ['/api/service-categories'],
    initialData: fallbackData
  });

  return (
    <section className="py-10 bg-gray-50" id="categories">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-sans text-center">Prestadores de Serviços</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {isLoading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center animate-pulse">
                <div className="w-12 h-12 rounded-full bg-gray-200 mb-3"></div>
                <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
              </div>
            ))
          ) : (
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
