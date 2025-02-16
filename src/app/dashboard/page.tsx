import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductList } from "@/components/ProductList";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <Breadcrumbs category="Electronics" />
        <h2 className="mb-4 mt-4 text-2xl font-semibold">Product Management</h2>
        <ProductList />
      </main>
    </div>
  );
}
