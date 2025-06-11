-- Criar enum para tipos de usuário
CREATE TYPE user_role AS ENUM ('admin', 'company', 'user');

-- Criar tabela de usuários
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    address TEXT,
    profile_image TEXT,
    role user_role DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Criar tabela de categorias de serviço
CREATE TABLE service_categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    icon TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE
);

-- Criar tabela de profissionais
CREATE TABLE professionals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price TEXT,
    rating DOUBLE PRECISION,
    location TEXT NOT NULL,
    available BOOLEAN DEFAULT true,
    cover_image TEXT,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES service_categories(id)
);

-- Criar tabela de produtos
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    discounted_price DOUBLE PRECISION,
    store_id INTEGER,
    store_name TEXT NOT NULL,
    location TEXT NOT NULL,
    rating DOUBLE PRECISION,
    review_count INTEGER DEFAULT 0,
    image TEXT,
    in_stock BOOLEAN DEFAULT true,
    discount_percentage INTEGER,
    created_at TEXT NOT NULL
);

-- Criar tabela de propriedades
CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    location TEXT NOT NULL,
    bedrooms INTEGER NOT NULL,
    bathrooms INTEGER NOT NULL,
    area INTEGER NOT NULL,
    parking_spots INTEGER,
    image TEXT,
    created_at TEXT NOT NULL
);

-- Criar tabela de veículos
CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    location TEXT NOT NULL,
    year INTEGER NOT NULL,
    mileage INTEGER NOT NULL,
    fuel TEXT NOT NULL,
    transmission TEXT,
    image TEXT,
    created_at TEXT NOT NULL
);

-- Criar tabela de serviços públicos
CREATE TABLE public_services (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT,
    hours TEXT,
    icon TEXT NOT NULL,
    created_at TEXT NOT NULL
);

-- Criar tabela de locais de lazer
CREATE TABLE leisure_spots (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT NOT NULL,
    location TEXT NOT NULL,
    features TEXT[],
    image TEXT,
    created_at TEXT NOT NULL
);

-- Inserir categorias de serviço iniciais
INSERT INTO service_categories (name, icon, slug) VALUES
    ('Pintores', 'paint-roller', 'pintores'),
    ('Encanadores', 'wrench', 'encanadores'),
    ('Engenheiros', 'hard-hat', 'engenheiros'),
    ('Manicures', 'hand-sparkles', 'manicures'),
    ('Cuidadores', 'user-nurse', 'cuidadores'),
    ('Pedreiros', 'hammer', 'pedreiros'); 