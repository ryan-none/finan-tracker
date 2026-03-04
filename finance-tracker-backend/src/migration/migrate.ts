import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function migrate() {
  try {
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Migration completed");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  } finally {
    await pool.end();
  }
}

migrate();