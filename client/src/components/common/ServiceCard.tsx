import { Professional } from "@/types";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, User } from "lucide-react";

interface ServiceCardProps {
  service: Professional;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow border-gray-200">
      <div className="relative">
        <img 
          src={service.coverImage} 
          alt={service.title} 
          className="w-full h-48 object-cover"
        />
        {service.available && (
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1 m-2 rounded">
            Disponível
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-gray-700 ml-1">{service.rating?.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{service.location}</span>
          <span className="mx-2">•</span>
          <User className="h-4 w-4 mr-1" />
          <span>{service.user?.name || "Anônimo"}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">{service.price}</span>
          <Button size="sm">
            Contatar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
