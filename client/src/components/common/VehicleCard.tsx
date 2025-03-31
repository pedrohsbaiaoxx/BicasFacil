import { Link } from "wouter";
import { Vehicle } from "@/types";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar,
  Gauge,
  Fuel,
  Cog
} from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <img 
          src={vehicle.image} 
          alt={vehicle.title} 
          className="w-full h-48 md:h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-2 py-1 m-2 rounded">
          Venda
        </div>
      </div>
      <div className="p-4 md:w-2/3">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{vehicle.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{vehicle.location}</span>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
            <Gauge className="h-3 w-3 mr-1 text-gray-500" /> {vehicle.mileage.toLocaleString('pt-BR')} km
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
            <Fuel className="h-3 w-3 mr-1 text-gray-500" /> {vehicle.fuel}
          </span>
          {vehicle.transmission && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
              <Cog className="h-3 w-3 mr-1 text-gray-500" /> {vehicle.transmission}
            </span>
          )}
          <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
            <Calendar className="h-3 w-3 mr-1 text-gray-500" /> {vehicle.year}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">
            R$ {vehicle.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <Button size="sm">
            Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
