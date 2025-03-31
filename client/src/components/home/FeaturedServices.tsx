import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Professional } from "@/types";
import ServiceCard from "@/components/common/ServiceCard";
import { featuredServices as fallbackData } from "@/lib/data";
import { ChevronRight } from "lucide-react";

const FeaturedServices = () => {
  const { data: services, isLoading } = useQuery<Professional[]>({
    queryKey: ['/api/professionals'],
    initialData: fallbackData
  });

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-sans">Serviços em Destaque</h2>
          <Link href="/servicos" className="text-primary hover:text-primary-700 mt-2 md:mt-0 font-medium flex items-center">
            Ver todos <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
