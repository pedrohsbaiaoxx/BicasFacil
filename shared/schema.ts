import { pgTable, text, serial, integer, boolean, doublePrecision, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Enum para tipos de usuário
export const UserRole = {
  ADMIN: 'admin',
  COMPANY: 'company',
  USER: 'user',
} as const;

// User model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  address: text("address"),
  profileImage: text("profile_image"),
  role: text("role", { enum: [UserRole.ADMIN, UserRole.COMPANY, UserRole.USER] }).default(UserRole.USER),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Service Categories model
export const serviceCategories = pgTable("service_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  slug: text("slug").notNull().unique(),
});

// Professionals model
export const professionals = pgTable("professionals", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  categoryId: integer("category_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: text("price"),
  rating: doublePrecision("rating"),
  location: text("location").notNull(),
  available: boolean("available").default(true),
  coverImage: text("cover_image"),
  createdAt: text("created_at").notNull(),
});

// Products model
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: doublePrecision("price").notNull(),
  discountedPrice: doublePrecision("discounted_price"),
  storeId: integer("store_id"),
  storeName: text("store_name").notNull(),
  location: text("location").notNull(),
  rating: doublePrecision("rating"),
  reviewCount: integer("review_count").default(0),
  image: text("image"),
  inStock: boolean("in_stock").default(true),
  discountPercentage: integer("discount_percentage"),
  createdAt: text("created_at").notNull(),
});

// Properties model
export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // sale or rent
  price: doublePrecision("price").notNull(),
  location: text("location").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  area: integer("area").notNull(),
  parkingSpots: integer("parking_spots"),
  image: text("image"),
  createdAt: text("created_at").notNull(),
});

// Vehicles model
export const vehicles = pgTable("vehicles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  type: text("type").notNull(), // car, motorcycle, etc.
  price: doublePrecision("price").notNull(),
  location: text("location").notNull(),
  year: integer("year").notNull(),
  mileage: integer("mileage").notNull(),
  fuel: text("fuel").notNull(),
  transmission: text("transmission"),
  image: text("image"),
  createdAt: text("created_at").notNull(),
});

// Public Services model
export const publicServices = pgTable("public_services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // government, education, health, etc.
  address: text("address").notNull(),
  phone: text("phone"),
  hours: text("hours"),
  icon: text("icon").notNull(),
  createdAt: text("created_at").notNull(),
});

// Entertainment & Leisure model
export const leisureSpots = pgTable("leisure_spots", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // sports, events, etc.
  location: text("location").notNull(),
  features: text("features").array(),
  image: text("image"),
  createdAt: text("created_at").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export const insertServiceCategorySchema = createInsertSchema(serviceCategories).omit({ id: true });
export const insertProfessionalSchema = createInsertSchema(professionals).omit({ id: true });
export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertPropertySchema = createInsertSchema(properties).omit({ id: true });
export const insertVehicleSchema = createInsertSchema(vehicles).omit({ id: true });
export const insertPublicServiceSchema = createInsertSchema(publicServices).omit({ id: true });
export const insertLeisureSpotSchema = createInsertSchema(leisureSpots).omit({ id: true });

// Select Types
export type User = typeof users.$inferSelect;
export type ServiceCategory = typeof serviceCategories.$inferSelect;
export type Professional = typeof professionals.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Property = typeof properties.$inferSelect;
export type Vehicle = typeof vehicles.$inferSelect;
export type PublicService = typeof publicServices.$inferSelect;
export type LeisureSpot = typeof leisureSpots.$inferSelect;

// Insert Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertServiceCategory = z.infer<typeof insertServiceCategorySchema>;
export type InsertProfessional = z.infer<typeof insertProfessionalSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type InsertVehicle = z.infer<typeof insertVehicleSchema>;
export type InsertPublicService = z.infer<typeof insertPublicServiceSchema>;
export type InsertLeisureSpot = z.infer<typeof insertLeisureSpotSchema>;

// Schemas de validação
export const loginSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(100),
});

export const registerSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(100),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  role: z.enum([UserRole.COMPANY, UserRole.USER]).default(UserRole.USER),
});
