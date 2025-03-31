import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { LeisureSpot } from "@/types";
import { leisureSpots as fallbackData } from "@/lib/data";
import { ChevronRight, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LeisureEntertainment = () => {
  const { data: spots, isLoading } = useQuery<LeisureSpot[]>({
    queryKey: ['/api/leisure-spots'],
    initialData: fallbackData
  });

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-sans">Lazer e Entretenimento</h2>
          <Link href="/lazer" className="text-primary hover:text-primary-700 mt-2 md:mt-0 font-medium flex items-center">
            Ver todos <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="overflow-hidden border border-gray-200 animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <CardContent className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="space-y-2 mb-4">
                    {Array(3).fill(0).map((_, j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded w-full"></div>
                    ))}
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-40"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            spots.map((spot) => (
              <Card key={spot.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <img 
                  src={spot.image} 
                  alt={spot.name} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{spot.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{spot.location}</span>
                  </div>
                  <div className="space-y-1 text-gray-600 text-sm mb-4">
                    {spot.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-1 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/lazer/${spot.id}`} className="inline-block text-primary hover:text-primary-700 font-medium flex items-center">
                    Ver horários e preços <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LeisureEntertainment;
