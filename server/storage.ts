import { db } from './db';
import { eq } from 'drizzle-orm';
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

export class DbStorage implements IStorage {
  // Users
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  // Service Categories
  async getServiceCategories(): Promise<ServiceCategory[]> {
    return await db.select().from(serviceCategories);
  }

  async getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | undefined> {
    const result = await db.select().from(serviceCategories).where(eq(serviceCategories.slug, slug));
    return result[0];
  }

  async createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory> {
    const result = await db.insert(serviceCategories).values(category).returning();
    return result[0];
  }

  // Professionals
  async getProfessionals(): Promise<Professional[]> {
    return await db.select().from(professionals);
  }

  async getProfessionalsByCategory(categoryId: number): Promise<Professional[]> {
    return await db.select().from(professionals).where(eq(professionals.categoryId, categoryId));
  }

  async getProfessional(id: number): Promise<Professional | undefined> {
    const result = await db.select().from(professionals).where(eq(professionals.id, id));
    return result[0];
  }

  async createProfessional(professional: InsertProfessional): Promise<Professional> {
    const result = await db.insert(professionals).values(professional).returning();
    return result[0];
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const result = await db.select().from(products).where(eq(products.id, id));
    return result[0];
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const result = await db.insert(products).values(product).returning();
    return result[0];
  }

  // Properties
  async getProperties(): Promise<Property[]> {
    return await db.select().from(properties);
  }

  async getProperty(id: number): Promise<Property | undefined> {
    const result = await db.select().from(properties).where(eq(properties.id, id));
    return result[0];
  }

  async createProperty(property: InsertProperty): Promise<Property> {
    const result = await db.insert(properties).values(property).returning();
    return result[0];
  }

  // Vehicles
  async getVehicles(): Promise<Vehicle[]> {
    return await db.select().from(vehicles);
  }

  async getVehicle(id: number): Promise<Vehicle | undefined> {
    const result = await db.select().from(vehicles).where(eq(vehicles.id, id));
    return result[0];
  }

  async createVehicle(vehicle: InsertVehicle): Promise<Vehicle> {
    const result = await db.insert(vehicles).values(vehicle).returning();
    return result[0];
  }

  // Public Services
  async getPublicServices(): Promise<PublicService[]> {
    return await db.select().from(publicServices);
  }

  async getPublicService(id: number): Promise<PublicService | undefined> {
    const result = await db.select().from(publicServices).where(eq(publicServices.id, id));
    return result[0];
  }

  async createPublicService(service: InsertPublicService): Promise<PublicService> {
    const result = await db.insert(publicServices).values(service).returning();
    return result[0];
  }

  // Leisure Spots
  async getLeisureSpots(): Promise<LeisureSpot[]> {
    return await db.select().from(leisureSpots);
  }

  async getLeisureSpot(id: number): Promise<LeisureSpot | undefined> {
    const result = await db.select().from(leisureSpots).where(eq(leisureSpots.id, id));
    return result[0];
  }

  async createLeisureSpot(spot: InsertLeisureSpot): Promise<LeisureSpot> {
    const result = await db.insert(leisureSpots).values(spot).returning();
    return result[0];
  }
}

// Inicializa o armazenamento com algumas categorias de serviço
async function seedServiceCategories() {
  const storage = new DbStorage();
  
  const categories: InsertServiceCategory[] = [
    { name: "Pintores", icon: "paint-roller", slug: "pintores" },
    { name: "Encanadores", icon: "wrench", slug: "encanadores" },
    { name: "Engenheiros", icon: "hard-hat", slug: "engenheiros" },
    { name: "Manicures", icon: "hand-sparkles", slug: "manicures" },
    { name: "Cuidadores", icon: "user-nurse", slug: "cuidadores" },
    { name: "Pedreiros", icon: "hammer", slug: "pedreiros" },
  ];

  for (const category of categories) {
    try {
      await storage.createServiceCategory(category);
    } catch (error) {
      console.error(`Error seeding category ${category.name}:`, error);
    }
  }
}

// Exporta a instância do armazenamento
export const storage = new DbStorage();

// Executa o seed das categorias de serviço
seedServiceCategories();
