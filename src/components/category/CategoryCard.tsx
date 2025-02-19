"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Category } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4 p-4">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
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
        <p className="text-sm text-gray-400">{category.description}</p>
      </div>
    </div>
  );
}
