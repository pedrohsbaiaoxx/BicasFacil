import { Thermometer } from "lucide-react";
import { useState, useEffect } from "react";

const Temperature = () => {
  const [temperature, setTemperature] = useState(24); // Default value

  // In a real app, you would fetch this from a weather API
  // using the user's geolocation or the city name
  useEffect(() => {
    // Simulate API call
    const fetchTemperature = async () => {
      // This would be replaced with actual API call
      // const response = await fetch(`/api/weather?city=Bicas`);
      // const data = await response.json();
      // setTemperature(data.temperature);
      
      // For now, just use a random temperature between 20-30°C
      const randomTemp = Math.floor(Math.random() * 10) + 20;
      setTemperature(randomTemp);
    };

    fetchTemperature();
  }, []);

  return (
    <div className="flex items-center text-gray-700">
      <Thermometer className="h-4 w-4 mr-1" />
      <span>{temperature}°C</span>
    </div>
  );
};

export default Temperature;
