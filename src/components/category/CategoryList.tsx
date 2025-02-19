import { CategoryCard } from "./CategoryCard";
import { categories } from "@/lib/data";

export function CategoryList() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
