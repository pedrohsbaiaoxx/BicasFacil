import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Property, Vehicle } from "@/types";
import PropertyCard from "@/components/common/PropertyCard";
import VehicleCard from "@/components/common/VehicleCard";
import { featuredProperties, featuredVehicles } from "@/lib/data";
import { ChevronRight } from "lucide-react";

const FeaturedRealEstateVehicles = () => {
  const { data: properties, isLoading: propertiesLoading } = useQuery<Property[]>({
    queryKey: ['/api/properties'],
    initialData: featuredProperties
  });

  const { data: vehicles, isLoading: vehiclesLoading } = useQuery<Vehicle[]>({
    queryKey: ['/api/vehicles'],
    initialData: featuredVehicles
  });

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imóveis */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 font-sans">Imóveis em Destaque</h2>
              <Link href="/imoveis" className="text-primary hover:text-primary-700 font-medium flex items-center">
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {propertiesLoading ? (
                // Loading skeleton
                Array(2).fill(0).map((_, i) => (
                  <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col md:flex-row animate-pulse">
                    <div className="md:w-1/3">
                      <div className="w-full h-48 md:h-full bg-gray-200"></div>
                    </div>
                    <div className="p-4 md:w-2/3">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        {Array(4).fill(0).map((_, j) => (
                          <div key={j} className="h-6 bg-gray-200 rounded w-20"></div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))
              )}
            </div>
          </div>
          
          {/* Veículos */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 font-sans">Veículos em Destaque</h2>
              <Link href="/veiculos" className="text-primary hover:text-primary-700 font-medium flex items-center">
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {vehiclesLoading ? (
                // Loading skeleton
                Array(2).fill(0).map((_, i) => (
                  <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col md:flex-row animate-pulse">
                    <div className="md:w-1/3">
                      <div className="w-full h-48 md:h-full bg-gray-200"></div>
                    </div>
                    <div className="p-4 md:w-2/3">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        {Array(4).fill(0).map((_, j) => (
                          <div key={j} className="h-6 bg-gray-200 rounded w-20"></div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                vehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRealEstateVehicles;
