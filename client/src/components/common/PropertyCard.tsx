import { Link } from "wouter";
import { Property } from "@/types";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Bed,
  Bath,
  SquareAsterisk,
  Car
} from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 md:h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {property.type === 'sale' ? 'Venda' : 'Aluguel'}
        </div>
      </div>
      <div className="p-4 md:w-2/3">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
            <Bed className="h-3 w-3 mr-1 text-gray-500" /> {property.bedrooms} quartos
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
            <Bath className="h-3 w-3 mr-1 text-gray-500" /> {property.bathrooms} banheiros
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
            <SquareAsterisk className="h-3 w-3 mr-1 text-gray-500" /> {property.area}m²
          </span>
          {property.parkingSpots && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
              <Car className="h-3 w-3 mr-1 text-gray-500" /> {property.parkingSpots} vagas
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">
            R$ {property.price.toLocaleString('pt-BR', { 
              minimumFractionDigits: property.type === 'rent' ? 2 : 0,
              maximumFractionDigits: property.type === 'rent' ? 2 : 0
            })}
            {property.type === 'rent' ? '/mês' : ''}
          </span>
          <Button size="sm">
            Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
