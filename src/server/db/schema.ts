import { integer, text, pgTable, timestamp, serial } from "drizzle-orm/pg-core";

// Stores table: each store is owned by a user, user can have multiple stores
export const stores = pgTable("stores", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Categories table: each category is owned by a store, store can have multiple categories
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  storeId: text("store_id")
    .notNull()
    .references(() => stores.id),
  userId: text("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Products table: each product is owned by a store, store can have multiple products
// Product can be in multiple categories
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  image: text("image"),
  description: text("description"),
  quantity: integer("quantity").notNull(),
  categoryId: text("category_id")
    .notNull()
    .references(() => categories.id),
  storeId: text("store_id")
    .notNull()
    .references(() => stores.id),
  userId: text("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Product Attributes table: each product can have multiple attributes
// one attribute can be used in multiple products
export const productAttributes = pgTable("product_attributes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  value: text("value").notNull(),
  storeId: text("store_id")
    .notNull()
    .references(() => stores.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Attribute Mappings table: this table use for mapping product to attribute
export const attributeMappings = pgTable("attribute_mappings", {
  id: serial("id").primaryKey(),
  productId: text("product_id")
    .notNull()
    .references(() => products.id),
  attributeId: text("attribute_id")
    .notNull()
    .references(() => productAttributes.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
