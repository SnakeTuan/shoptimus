"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { Product } from "@/lib/data"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="flex items-center space-x-4 p-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="text-gray-300">${product.price.toFixed(2)}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      {showDescription && (
        <div className="px-4 pb-4 text-sm text-gray-400 border-t border-gray-700">
          <p className="mt-2">{product.description}</p>
        </div>
      )}
    </div>
  )
}

