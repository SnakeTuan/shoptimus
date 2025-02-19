import { CategoryList } from "@/components/category/CategoryList";

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
      <div className="flex items-center justify-between pb-6 pt-6">
        <h2 className="text-2xl font-semibold">Categories</h2>
        {/* <AddCategoryModal /> */}
      </div>
      <CategoryList />
    </div>
  );
}
