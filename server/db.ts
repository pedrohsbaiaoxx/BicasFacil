import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
import { config } from './config';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: {
    rejectUnauthorized: false
  }
});

export const db = drizzle(pool); 