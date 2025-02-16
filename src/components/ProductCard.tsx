"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4 p-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={60}
          height={60}
          className="rounded-md"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="text-gray-300">${product.price.toFixed(2)}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDescription(!showDescription)}
          className="text-gray-400 transition-colors duration-200 hover:text-white"
        >
          {showDescription ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div
        className={`overflow-hidden px-4 transition-all duration-300 ease-in-out ${
          showDescription ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-400">{product.description}</p>
      </div>
    </div>
  );
}
