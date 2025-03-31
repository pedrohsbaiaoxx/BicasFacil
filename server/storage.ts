import {
  users, type User, type InsertUser,
  serviceCategories, type ServiceCategory, type InsertServiceCategory,
  professionals, type Professional, type InsertProfessional,
  products, type Product, type InsertProduct,
  properties, type Property, type InsertProperty,
  vehicles, type Vehicle, type InsertVehicle,
  publicServices, type PublicService, type InsertPublicService,
  leisureSpots, type LeisureSpot, type InsertLeisureSpot
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Service Categories
  getServiceCategories(): Promise<ServiceCategory[]>;
  getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | undefined>;
  createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory>;
  
  // Professionals
  getProfessionals(): Promise<Professional[]>;
  getProfessionalsByCategory(categoryId: number): Promise<Professional[]>;
  getProfessional(id: number): Promise<Professional | undefined>;
  createProfessional(professional: InsertProfessional): Promise<Professional>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Properties
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  
  // Vehicles
  getVehicles(): Promise<Vehicle[]>;
  getVehicle(id: number): Promise<Vehicle | undefined>;
  createVehicle(vehicle: InsertVehicle): Promise<Vehicle>;
  
  // Public Services
  getPublicServices(): Promise<PublicService[]>;
  getPublicService(id: number): Promise<PublicService | undefined>;
  createPublicService(service: InsertPublicService): Promise<PublicService>;
  
  // Leisure Spots
  getLeisureSpots(): Promise<LeisureSpot[]>;
  getLeisureSpot(id: number): Promise<LeisureSpot | undefined>;
  createLeisureSpot(spot: InsertLeisureSpot): Promise<LeisureSpot>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private serviceCategories: Map<number, ServiceCategory>;
  private professionals: Map<number, Professional>;
  private products: Map<number, Product>;
  private properties: Map<number, Property>;
  private vehicles: Map<number, Vehicle>;
  private publicServices: Map<number, PublicService>;
  private leisureSpots: Map<number, LeisureSpot>;
  
  private currentUserId: number;
  private currentServiceCategoryId: number;
  private currentProfessionalId: number;
  private currentProductId: number;
  private currentPropertyId: number;
  private currentVehicleId: number;
  private currentPublicServiceId: number;
  private currentLeisureSpotId: number;

  constructor() {
    this.users = new Map();
    this.serviceCategories = new Map();
    this.professionals = new Map();
    this.products = new Map();
    this.properties = new Map();
    this.vehicles = new Map();
    this.publicServices = new Map();
    this.leisureSpots = new Map();
    
    this.currentUserId = 1;
    this.currentServiceCategoryId = 1;
    this.currentProfessionalId = 1;
    this.currentProductId = 1;
    this.currentPropertyId = 1;
    this.currentVehicleId = 1;
    this.currentPublicServiceId = 1;
    this.currentLeisureSpotId = 1;

    // Initialize with some service categories
    this.seedServiceCategories();
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Service Categories
  async getServiceCategories(): Promise<ServiceCategory[]> {
    return Array.from(this.serviceCategories.values());
  }

  async getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | undefined> {
    return Array.from(this.serviceCategories.values()).find(
      (category) => category.slug === slug,
    );
  }

  async createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory> {
    const id = this.currentServiceCategoryId++;
    const newCategory: ServiceCategory = { ...category, id };
    this.serviceCategories.set(id, newCategory);
    return newCategory;
  }

  // Professionals
  async getProfessionals(): Promise<Professional[]> {
    return Array.from(this.professionals.values());
  }

  async getProfessionalsByCategory(categoryId: number): Promise<Professional[]> {
    return Array.from(this.professionals.values()).filter(
      (professional) => professional.categoryId === categoryId,
    );
  }

  async getProfessional(id: number): Promise<Professional | undefined> {
    return this.professionals.get(id);
  }

  async createProfessional(professional: InsertProfessional): Promise<Professional> {
    const id = this.currentProfessionalId++;
    const newProfessional: Professional = { ...professional, id };
    this.professionals.set(id, newProfessional);
    return newProfessional;
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const newProduct: Product = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }

  // Properties
  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async createProperty(property: InsertProperty): Promise<Property> {
    const id = this.currentPropertyId++;
    const newProperty: Property = { ...property, id };
    this.properties.set(id, newProperty);
    return newProperty;
  }

  // Vehicles
  async getVehicles(): Promise<Vehicle[]> {
    return Array.from(this.vehicles.values());
  }

  async getVehicle(id: number): Promise<Vehicle | undefined> {
    return this.vehicles.get(id);
  }

  async createVehicle(vehicle: InsertVehicle): Promise<Vehicle> {
    const id = this.currentVehicleId++;
    const newVehicle: Vehicle = { ...vehicle, id };
    this.vehicles.set(id, newVehicle);
    return newVehicle;
  }

  // Public Services
  async getPublicServices(): Promise<PublicService[]> {
    return Array.from(this.publicServices.values());
  }

  async getPublicService(id: number): Promise<PublicService | undefined> {
    return this.publicServices.get(id);
  }

  async createPublicService(service: InsertPublicService): Promise<PublicService> {
    const id = this.currentPublicServiceId++;
    const newService: PublicService = { ...service, id };
    this.publicServices.set(id, newService);
    return newService;
  }

  // Leisure Spots
  async getLeisureSpots(): Promise<LeisureSpot[]> {
    return Array.from(this.leisureSpots.values());
  }

  async getLeisureSpot(id: number): Promise<LeisureSpot | undefined> {
    return this.leisureSpots.get(id);
  }

  async createLeisureSpot(spot: InsertLeisureSpot): Promise<LeisureSpot> {
    const id = this.currentLeisureSpotId++;
    const newSpot: LeisureSpot = { ...spot, id };
    this.leisureSpots.set(id, newSpot);
    return newSpot;
  }

  // Seed initial data
  private seedServiceCategories() {
    const categories: InsertServiceCategory[] = [
      { name: "Pintores", icon: "paint-roller", slug: "pintores" },
      { name: "Encanadores", icon: "wrench", slug: "encanadores" },
      { name: "Engenheiros", icon: "hard-hat", slug: "engenheiros" },
      { name: "Manicures", icon: "hand-sparkles", slug: "manicures" },
      { name: "Cuidadores", icon: "user-nurse", slug: "cuidadores" },
      { name: "Pedreiros", icon: "hammer", slug: "pedreiros" },
    ];

    categories.forEach((category) => {
      this.createServiceCategory(category);
    });
  }
}

export const storage = new MemStorage();
