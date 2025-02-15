"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ProductCard } from "./ProductCard"
import { searchProducts } from "@/lib/data"

export function ProductList() {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredProducts = searchProducts(searchQuery)

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-sm"
      />
      <div className="space-y-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

