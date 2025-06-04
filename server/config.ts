import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env apropriado
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.development' });
}

export const config = {
  port: Number(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://bicasfacil.com.br']
      : ['http://127.0.0.1:8080', 'http://localhost:8080'],
    credentials: true,
  },
}; 