export interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
  slug: string;
  professionalCount?: number;
}

export interface Professional {
  id: number;
  userId: number;
  categoryId: number;
  title: string;
  description: string;
  price: string;
  rating: number;
  location: string;
  available: boolean;
  coverImage: string;
  createdAt: string;
  user?: {
    name: string;
    profileImage?: string;
  };
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  storeId?: number;
  storeName: string;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  inStock: boolean;
  discountPercentage?: number;
  createdAt: string;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  type: 'sale' | 'rent';
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  parkingSpots?: number;
  image: string;
  createdAt: string;
}

export interface Vehicle {
  id: number;
  title: string;
  description?: string;
  type: string;
  price: number;
  location: string;
  year: number;
  mileage: number;
  fuel: string;
  transmission?: string;
  image: string;
  createdAt: string;
}

export interface PublicService {
  id: number;
  name: string;
  description: string;
  type: string;
  address: string;
  phone?: string;
  hours?: string;
  icon: string;
  createdAt: string;
}

export interface LeisureSpot {
  id: number;
  name: string;
  description: string;
  type: string;
  location: string;
  features: string[];
  image: string;
  createdAt: string;
}
