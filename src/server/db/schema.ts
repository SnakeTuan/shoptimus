import { sql } from "drizzle-orm";
import {
  integer,
  timestamp,
  serial,
  pgTableCreator,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `shoptimus_${name}`);

// Stores table: each store is owned by a user, user can have multiple stores
export const stores = createTable("stores", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at"),
});

// Categories table: each category is owned by a store, store can have multiple categories
export const categories = createTable("categories", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  userId: varchar("user_id", { length: 255 }).notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at"),
});

// Products table: each product is owned by a store, store can have multiple products
// Product can be in multiple categories
export const products = createTable("products", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  image: varchar("image", { length: 255 }),
  description: varchar("description", { length: 255 }),
  quantity: integer("quantity").notNull(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  userId: varchar("user_id", { length: 255 }).notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at"),
});

// Product Attributes table: each product can have multiple attributes
// one attribute can be used in multiple products
export const productAttributes = createTable("product_attributes", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  value: varchar("value", { length: 255 }).notNull(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at"),
});

// Attribute Mappings table: this table use for mapping product to attribute
export const attributeMappings = createTable("attribute_mappings", {
  id: serial("id").primaryKey().notNull(),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  attributeId: integer("attribute_id")
    .notNull()
    .references(() => productAttributes.id),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at"),
});
