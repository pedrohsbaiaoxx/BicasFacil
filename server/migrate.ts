import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const runMigration = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não está definida no arquivo .env');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  const db = drizzle(pool);

  console.log('Iniciando migração...');
  
  try {
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('Migração concluída com sucesso!');
  } catch (error) {
    console.error('Erro durante a migração:', error);
    throw error;
  } finally {
    await pool.end();
  }
};

runMigration().catch((err) => {
  console.error('Erro ao executar migração:', err);
  process.exit(1);
}); 