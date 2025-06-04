import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { config } from "./config";
import {
  insertUserSchema,
  insertServiceCategorySchema,
  insertProfessionalSchema,
  insertProductSchema,
  insertPropertySchema,
  insertVehicleSchema,
  insertPublicServiceSchema,
  insertLeisureSpotSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Get all service categories
  app.get("/api/service-categories", async (req, res) => {
    try {
      const categories = await storage.getServiceCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching service categories:", error);
      res.status(500).json({ message: "Failed to fetch service categories" });
    }
  });

  // Get service category by slug
  app.get("/api/service-categories/:slug", async (req, res) => {
    try {
      const category = await storage.getServiceCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: "Service category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Error fetching service category:", error);
      res.status(500).json({ message: "Failed to fetch service category" });
    }
  });

  // Create service category
  app.post("/api/service-categories", async (req, res) => {
    try {
      const validatedData = insertServiceCategorySchema.parse(req.body);
      const category = await storage.createServiceCategory(validatedData);
      res.status(201).json(category);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating service category:", error);
      res.status(500).json({ message: "Failed to create service category" });
    }
  });

  // Get all professionals
  app.get("/api/professionals", async (req, res) => {
    try {
      const professionals = await storage.getProfessionals();
      res.json(professionals);
    } catch (error) {
      console.error("Error fetching professionals:", error);
      res.status(500).json({ message: "Failed to fetch professionals" });
    }
  });

  // Get professionals by category
  app.get("/api/professionals/category/:categoryId", async (req, res) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      if (isNaN(categoryId)) {
        return res.status(400).json({ message: "Invalid category ID" });
      }
      
      const professionals = await storage.getProfessionalsByCategory(categoryId);
      res.json(professionals);
    } catch (error) {
      console.error("Error fetching professionals by category:", error);
      res.status(500).json({ message: "Failed to fetch professionals by category" });
    }
  });

  // Get professional by ID
  app.get("/api/professionals/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid professional ID" });
      }
      
      const professional = await storage.getProfessional(id);
      if (!professional) {
        return res.status(404).json({ message: "Professional not found" });
      }
      
      res.json(professional);
    } catch (error) {
      console.error("Error fetching professional:", error);
      res.status(500).json({ message: "Failed to fetch professional" });
    }
  });

  // Create professional
  app.post("/api/professionals", async (req, res) => {
    try {
      const validatedData = insertProfessionalSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      const professional = await storage.createProfessional(validatedData);
      res.status(201).json(professional);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating professional:", error);
      res.status(500).json({ message: "Failed to create professional" });
    }
  });

  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get product by ID
  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid product ID" });
      }
      
      const product = await storage.getProduct(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Create product
  app.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Failed to create product" });
    }
  });

  // Get all properties
  app.get("/api/properties", async (req, res) => {
    try {
      const properties = await storage.getProperties();
      res.json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      res.status(500).json({ message: "Failed to fetch properties" });
    }
  });

  // Get property by ID
  app.get("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }
      
      const property = await storage.getProperty(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      
      res.json(property);
    } catch (error) {
      console.error("Error fetching property:", error);
      res.status(500).json({ message: "Failed to fetch property" });
    }
  });

  // Create property
  app.post("/api/properties", async (req, res) => {
    try {
      const validatedData = insertPropertySchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      const property = await storage.createProperty(validatedData);
      res.status(201).json(property);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating property:", error);
      res.status(500).json({ message: "Failed to create property" });
    }
  });

  // Get all vehicles
  app.get("/api/vehicles", async (req, res) => {
    try {
      const vehicles = await storage.getVehicles();
      res.json(vehicles);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      res.status(500).json({ message: "Failed to fetch vehicles" });
    }
  });

  // Get vehicle by ID
  app.get("/api/vehicles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid vehicle ID" });
      }
      
      const vehicle = await storage.getVehicle(id);
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      
      res.json(vehicle);
    } catch (error) {
      console.error("Error fetching vehicle:", error);
      res.status(500).json({ message: "Failed to fetch vehicle" });
    }
  });

  // Create vehicle
  app.post("/api/vehicles", async (req, res) => {
    try {
      const validatedData = insertVehicleSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      const vehicle = await storage.createVehicle(validatedData);
      res.status(201).json(vehicle);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating vehicle:", error);
      res.status(500).json({ message: "Failed to create vehicle" });
    }
  });

  // Get all public services
  app.get("/api/public-services", async (req, res) => {
    try {
      const services = await storage.getPublicServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching public services:", error);
      res.status(500).json({ message: "Failed to fetch public services" });
    }
  });

  // Get public service by ID
  app.get("/api/public-services/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid public service ID" });
      }
      
      const service = await storage.getPublicService(id);
      if (!service) {
        return res.status(404).json({ message: "Public service not found" });
      }
      
      res.json(service);
    } catch (error) {
      console.error("Error fetching public service:", error);
      res.status(500).json({ message: "Failed to fetch public service" });
    }
  });

  // Create public service
  app.post("/api/public-services", async (req, res) => {
    try {
      const validatedData = insertPublicServiceSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      const service = await storage.createPublicService(validatedData);
      res.status(201).json(service);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating public service:", error);
      res.status(500).json({ message: "Failed to create public service" });
    }
  });

  // Get all leisure spots
  app.get("/api/leisure-spots", async (req, res) => {
    try {
      const spots = await storage.getLeisureSpots();
      res.json(spots);
    } catch (error) {
      console.error("Error fetching leisure spots:", error);
      res.status(500).json({ message: "Failed to fetch leisure spots" });
    }
  });

  // Get leisure spot by ID
  app.get("/api/leisure-spots/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid leisure spot ID" });
      }
      
      const spot = await storage.getLeisureSpot(id);
      if (!spot) {
        return res.status(404).json({ message: "Leisure spot not found" });
      }
      
      res.json(spot);
    } catch (error) {
      console.error("Error fetching leisure spot:", error);
      res.status(500).json({ message: "Failed to fetch leisure spot" });
    }
  });

  // Create leisure spot
  app.post("/api/leisure-spots", async (req, res) => {
    try {
      const validatedData = insertLeisureSpotSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      const spot = await storage.createLeisureSpot(validatedData);
      res.status(201).json(spot);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating leisure spot:", error);
      res.status(500).json({ message: "Failed to create leisure spot" });
    }
  });

  // Register user
  app.post("/api/users/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(validatedData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      const user = await storage.createUser(validatedData);
      
      // Don't return password in response
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
  });

  return httpServer;
}
