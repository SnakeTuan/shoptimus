export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop Pro",
    description:
      "High-performance laptop for professionals with 16GB RAM, 512GB SSD, and a powerful CPU seamless multitasking demanding applications.",
    price: 1299.99,
    stock: 50,
    category: "Electronics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with adjustable DPI, long battery life, and comfortable grip for extended use. Compatible Windows macOS.",
    price: 29.99,
    stock: 100,
    category: "Accessories",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "HD Monitor",
    description:
      "27-inch 4K HD Monitor with IPS panel, 99% sRGB color gamut, and slim bezels. Perfect for creative professionals immersive gaming experiences.",
    price: 349.99,
    stock: 30,
    category: "Electronics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    description:
      "RGB mechanical gaming keyboard with customizable key switches, programmable macros, and durable aluminum frame for intense sessions.",
    price: 129.99,
    stock: 75,
    category: "Accessories",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    name: "USB-C Hub",
    description:
      "7-in-1 USB-C hub for laptops with HDMI, USB 3.0 ports, SD card reader, and power delivery. Essential expanding connectivity on modern laptops.",
    price: 49.99,
    stock: 120,
    category: "Accessories",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  );
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "Electronics products",
  },
  {
    id: "2",
    name: "Accessories",
    description: "Accessories products",
  },
];
