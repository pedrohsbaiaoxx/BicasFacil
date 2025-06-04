import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import pkg from 'pg';
import { config } from './config';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: {
    rejectUnauthorized: false
  }
});

const db = drizzle(pool);

async function dropTables() {
  console.log('Dropping existing tables...');
  
  try {
    await pool.query(`
      DROP TABLE IF EXISTS 
        leisure_spots,
        products,
        professionals,
        properties,
        public_services,
        service_categories,
        vehicles,
        users
      CASCADE;
    `);
    console.log('Tables dropped successfully');
  } catch (error) {
    console.error('Error dropping tables:', error);
    process.exit(1);
  }
}

async function main() {
  console.log('Running migrations...');
  
  try {
    await dropTables();
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
  
  await pool.end();
}

main(); 