import {
  integer,
  text,
  pgTable,
  timestamp,
  serial,
  index,
} from "drizzle-orm/pg-core";

// Stores table: each store is owned by a user, user can have multiple stores
export const stores = pgTable("shoptimus_stores", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Categories table: each category is owned by a store, store can have multiple categories
export const categories = pgTable(
  "shoptimus_categories",
  {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    description: text("description"),
    storeId: integer("store_id")
      .notNull()
      .references(() => stores.id),
    userId: text("user_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => ({
    storeIdIdx: index("category_idx_store_id").on(t.storeId),
  }),
);

// Products table: each product is owned by a store, store can have multiple products
// Product can be in multiple categories
export const products = pgTable(
  "shoptimus_products",
  {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    price: integer("price").notNull(),
    image: text("image"),
    description: text("description"),
    quantity: integer("quantity").notNull(),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categories.id),
    storeId: integer("store_id")
      .notNull()
      .references(() => stores.id),
    userId: text("user_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => ({
    storeIdIdx: index("product_idx_store_id").on(t.storeId),
    categoryIdIdx: index("product_idx_category_id").on(t.categoryId),
  }),
);

// Product Attributes table: each product can have multiple attributes
// one attribute can be used in multiple products
export const productAttributes = pgTable("shoptimus_product_attributes", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  value: text("value").notNull(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Attribute Mappings table: this table use for mapping product to attribute
export const attributeMappings = pgTable("shoptimus_attribute_mappings", {
  id: serial("id").primaryKey().notNull(),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  attributeId: integer("attribute_id")
    .notNull()
    .references(() => productAttributes.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
