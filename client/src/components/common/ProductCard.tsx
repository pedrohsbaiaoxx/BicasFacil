import { Link } from "wouter";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, StarHalf } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Generate star rating UI
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-3 w-3 text-yellow-400 fill-current" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-3 w-3 text-yellow-400 fill-current" />);
    }
    
    return stars;
  };

  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-contain p-4"
        />
        {product.discountPercentage && (
          <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
            -{product.discountPercentage}%
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {renderRating(product.rating)}
          </div>
          <span className="text-gray-500 text-xs ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-gray-500 text-sm mb-3">{product.storeName} - {product.location}</p>
        <div className="flex justify-between items-center">
          <div>
            {product.discountedPrice && (
              <span className="text-gray-400 line-through text-sm">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            )}
            <div className="text-primary font-bold">
              R$ {(product.discountedPrice || product.price).toFixed(2).replace('.', ',')}
            </div>
          </div>
          <Button size="icon" variant="default">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
