import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductList } from "@/components/ProductList";
import { CategoryList } from "@/components/CategoryList";

export default async function StoreDashboard(prop: {
  params: Promise<{ storeId: string }>;
}) {
  const params = await prop.params;
  // ensure that the storeId is a number
  const parseStoreId = parseInt(params.storeId);

  if (isNaN(parseStoreId)) {
    return <div>Invalid store ID</div>;
  }

  console.log(parseStoreId);

  return (
    <div>
      <Breadcrumbs category="Categories" />
      <h2 className="mb-4 mt-4 text-2xl font-semibold">Categories</h2>
      <CategoryList />
    </div>
  );
}
