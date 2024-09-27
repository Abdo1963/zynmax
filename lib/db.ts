import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the DATABASE_URL from your .env.local
});

export default pool;
