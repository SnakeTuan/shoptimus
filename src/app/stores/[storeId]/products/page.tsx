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
    <div>
      <h2 className="mb-4 mt-4 text-2xl font-semibold text-white">Products</h2>
      <ProductList />
    </div>
  );
}
