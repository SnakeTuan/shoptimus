import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductList } from "@/components/ProductList";

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
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-4 md:hidden">
          <Sidebar />
        </div>
        <Breadcrumbs category="Categories" />
        <h2 className="mb-4 mt-4 text-2xl font-semibold">All Categories</h2>
        <ProductList />
      </main>
    </div>
  );
}
