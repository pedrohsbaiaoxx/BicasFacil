CREATE TABLE "leisure_spots" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"type" text NOT NULL,
	"location" text NOT NULL,
	"features" text[],
	"image" text,
	"created_at" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"price" double precision NOT NULL,
	"discounted_price" double precision,
	"store_id" integer,
	"store_name" text NOT NULL,
	"location" text NOT NULL,
	"rating" double precision,
	"review_count" integer DEFAULT 0,
	"image" text,
	"in_stock" boolean DEFAULT true,
	"discount_percentage" integer,
	"created_at" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "professionals" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"price" text,
	"rating" double precision,
	"location" text NOT NULL,
	"available" boolean DEFAULT true,
	"cover_image" text,
	"created_at" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "properties" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"type" text NOT NULL,
	"price" double precision NOT NULL,
	"location" text NOT NULL,
	"bedrooms" integer NOT NULL,
	"bathrooms" integer NOT NULL,
	"area" integer NOT NULL,
	"parking_spots" integer,
	"image" text,
	"created_at" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "public_services" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"type" text NOT NULL,
	"address" text NOT NULL,
	"phone" text,
	"hours" text,
	"icon" text NOT NULL,
	"created_at" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "service_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"icon" text NOT NULL,
	"slug" text NOT NULL,
	CONSTRAINT "service_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"address" text,
	"profile_image" text,
	"role" text DEFAULT 'user',
	"created_at" text NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "vehicles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"type" text NOT NULL,
	"price" double precision NOT NULL,
	"location" text NOT NULL,
	"year" integer NOT NULL,
	"mileage" integer NOT NULL,
	"fuel" text NOT NULL,
	"transmission" text,
	"image" text,
	"created_at" text NOT NULL
);
