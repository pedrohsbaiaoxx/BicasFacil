import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { PublicService } from "@/types";
import { publicServices as fallbackData } from "@/lib/data";
import { ChevronRight, Building, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

const PublicServices = () => {
  const { data: services, isLoading } = useQuery<PublicService[]>({
    queryKey: ['/api/public-services'],
    initialData: fallbackData
  });

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-sans">Serviços Públicos</h2>
          <Link href="/orgaos-publicos" className="text-primary hover:text-primary-700 mt-2 md:mt-0 font-medium flex items-center">
            Ver todos <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="shadow-sm animate-pulse">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-200 mr-3"></div>
                    <div className="h-6 bg-gray-200 rounded w-40"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="space-y-2 mb-4">
                    {Array(3).fill(0).map((_, j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded w-3/4"></div>
                    ))}
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-32"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            services.map((service) => {
              const IconComponent = Icons[service.icon] || Icons.building;
              
              return (
                <Card key={service.id} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary mr-3">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                        <span>{service.address}</span>
                      </div>
                      {service.phone && (
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 text-gray-500 mr-2" />
                          <span>{service.phone}</span>
                        </div>
                      )}
                      {service.hours && (
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-gray-500 mr-2" />
                          <span>{service.hours}</span>
                        </div>
                      )}
                    </div>
                    <Link href={`/orgaos-publicos/${service.id}`} className="text-primary hover:text-primary-700 font-medium flex items-center">
                      Mais informações <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicServices;
