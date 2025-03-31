import { ServiceCategory, Professional, Product, Property, Vehicle, PublicService, LeisureSpot } from "@/types";

// Mock data for initial UI rendering while API calls are being made
export const serviceCategories: ServiceCategory[] = [
  { id: 1, name: "Pintores", icon: "paint-roller", slug: "pintores", professionalCount: 12 },
  { id: 2, name: "Encanadores", icon: "wrench", slug: "encanadores", professionalCount: 8 },
  { id: 3, name: "Engenheiros", icon: "hard-hat", slug: "engenheiros", professionalCount: 15 },
  { id: 4, name: "Manicures", icon: "hand-sparkles", slug: "manicures", professionalCount: 20 },
  { id: 5, name: "Cuidadores", icon: "user-nurse", slug: "cuidadores", professionalCount: 5 },
  { id: 6, name: "Pedreiros", icon: "hammer", slug: "pedreiros", professionalCount: 18 }
];

export const featuredServices: Professional[] = [
  {
    id: 1,
    userId: 1,
    categoryId: 1,
    title: "Pintura Residencial",
    description: "Serviços de pintura interna e externa com qualidade e acabamento profissional.",
    price: "R$ 25,00/m²",
    rating: 4.8,
    location: "Centro, Bicas",
    available: true,
    coverImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-01-15T10:30:00Z",
    user: {
      name: "José Silva",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  {
    id: 2,
    userId: 2,
    categoryId: 2,
    title: "Reparos Hidráulicos",
    description: "Conserto de vazamentos, instalação de torneiras, chuveiros e outros serviços.",
    price: "R$ 90,00/hora",
    rating: 4.5,
    location: "Bairro São José, Bicas",
    available: true,
    coverImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-02-20T14:15:00Z",
    user: {
      name: "Pedro Santos",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  },
  {
    id: 3,
    userId: 3,
    categoryId: 4,
    title: "Manicure e Pedicure",
    description: "Serviços completos de manicure e pedicure com produtos de qualidade.",
    price: "R$ 60,00",
    rating: 4.9,
    location: "Centro, Bicas",
    available: true,
    coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-03-05T09:45:00Z",
    user: {
      name: "Ana Oliveira",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  }
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy A53",
    description: "Smartphone Samsung Galaxy A53 com 128GB, 6GB RAM",
    price: 1999.90,
    discountedPrice: 1699.90,
    storeName: "Loja do João",
    location: "Centro",
    rating: 4.5,
    reviewCount: 45,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    inStock: true,
    discountPercentage: 15,
    createdAt: "2023-04-10T11:20:00Z"
  },
  {
    id: 2,
    name: "Tênis Esportivo Runner",
    description: "Tênis esportivo confortável para corrida e caminhada",
    price: 249.90,
    storeName: "Esportes Bicas",
    location: "Centro",
    rating: 4.0,
    reviewCount: 28,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    inStock: true,
    createdAt: "2023-04-15T10:30:00Z"
  },
  {
    id: 3,
    name: "Fone de Ouvido Bluetooth",
    description: "Fone de ouvido sem fio com cancelamento de ruído",
    price: 199.90,
    discountedPrice: 159.90,
    storeName: "Tech Bicas",
    location: "Centro",
    rating: 5.0,
    reviewCount: 56,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    inStock: true,
    discountPercentage: 20,
    createdAt: "2023-04-20T14:45:00Z"
  },
  {
    id: 4,
    name: "Livro - História de Bicas",
    description: "Livro sobre a história e formação da cidade de Bicas",
    price: 49.90,
    storeName: "Livraria Cultura",
    location: "Centro",
    rating: 4.5,
    reviewCount: 12,
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    inStock: true,
    createdAt: "2023-04-25T09:15:00Z"
  }
];

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Casa em Condomínio Fechado",
    description: "Linda casa com 3 quartos em condomínio fechado",
    type: "sale",
    price: 450000,
    location: "Bairro Jardim, Bicas",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    parkingSpots: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-05-05T11:30:00Z"
  },
  {
    id: 2,
    title: "Apartamento no Centro",
    description: "Apartamento bem localizado no centro da cidade",
    type: "rent",
    price: 1200,
    location: "Centro, Bicas",
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    parkingSpots: 1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-05-10T14:20:00Z"
  }
];

export const featuredVehicles: Vehicle[] = [
  {
    id: 1,
    title: "Honda Civic 2020",
    description: "Honda Civic EXL em excelente estado, único dono",
    type: "car",
    price: 89900,
    location: "Centro, Bicas",
    year: 2020,
    mileage: 45000,
    fuel: "Flex",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-05-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Honda CG 160 Start",
    description: "Moto Honda CG 160 Start em ótimo estado",
    type: "motorcycle",
    price: 11500,
    location: "Bairro São José, Bicas",
    year: 2021,
    mileage: 12000,
    fuel: "Gasolina",
    image: "https://images.unsplash.com/photo-1588899451796-9ee725a6d684?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-05-20T15:45:00Z"
  }
];

export const publicServices: PublicService[] = [
  {
    id: 1,
    name: "Prefeitura Municipal",
    description: "Atendimento de segunda a sexta, das 8h às 17h. Serviços para o cidadão.",
    type: "government",
    address: "Praça Raul Soares, 20 - Centro",
    phone: "(32) 3123-4567",
    hours: "Segunda a Sexta: 8h às 17h",
    icon: "building",
    createdAt: "2023-06-01T09:00:00Z"
  },
  {
    id: 2,
    name: "Câmara de Vereadores",
    description: "Sessões às terças-feiras, 19h. Aberto ao público para acompanhamento.",
    type: "government",
    address: "Rua Ministro Gabriel Passos, 100",
    phone: "(32) 3123-7890",
    hours: "Sessões: Terças às 19h",
    icon: "balance-scale",
    createdAt: "2023-06-05T14:30:00Z"
  },
  {
    id: 3,
    name: "Feira Livre",
    description: "Produtos frescos direto do produtor. Frutas, verduras, artesanato e comidas típicas.",
    type: "market",
    address: "Centro - Praça Principal",
    hours: "Sábados, 7h às 12h",
    icon: "shopping-basket",
    createdAt: "2023-06-10T11:15:00Z"
  }
];

export const leisureSpots: LeisureSpot[] = [
  {
    id: 1,
    name: "BTB Arena - Beach Sports",
    description: "Arena de Beach Tennis com estrutura completa para esportes de areia",
    type: "sports",
    location: "Bairro São José, Bicas",
    features: [
      "Beach Tennis com iluminação noturna",
      "Aulas para iniciantes e avançados",
      "Aluguel de equipamentos"
    ],
    image: "https://images.unsplash.com/photo-1526888935184-a82d2c4a6e7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-06-15T10:30:00Z"
  },
  {
    id: 2,
    name: "CT Bicas - Academia",
    description: "Academia completa com equipamentos modernos e profissionais qualificados",
    type: "sports",
    location: "Centro, Bicas",
    features: [
      "Musculação e treino funcional",
      "Personal trainer disponível",
      "Aberto das 6h às 22h"
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-06-20T14:15:00Z"
  },
  {
    id: 3,
    name: "Salão de Festas do Centro",
    description: "Espaço para eventos e festas com estrutura completa",
    type: "events",
    location: "Centro, Bicas",
    features: [
      "Capacidade para 200 pessoas",
      "Climatizado e estacionamento",
      "Serviço de buffet opcional"
    ],
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-06-25T09:45:00Z"
  }
];
