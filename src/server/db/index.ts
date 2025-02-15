import { drizzle } from "drizzle-orm/neon-http";

// import { env } from "@/env";
// import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
export const db = drizzle(process.env.DATABASE_URL! as any);
