import 'dotenv/config'
import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

// Create PostgreSQL pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
})

// Export Drizzle database instance
export const db = drizzle(pool)

// bun run drizzle-kit push
