import { getStores } from "@/server/queries";
import Link from "next/link";
import { AddStoreModal } from "@/components/store/new-store-dialog";
import { NewStoreForm } from "./new-store-form";

export default async function StoresList({ userId }: { userId: string }) {
  const stores = await getStores(userId);

  return (
    <>
      <div className="mb-8 space-y-4">
        {stores.map((store) => (
          <Link
            key={store.id}
            href={`/stores/${store.id}/categories`}
            className="block w-full rounded-md bg-gray-800 px-4 py-3 text-left transition duration-150 ease-in-out hover:bg-gray-700"
          >
            {store.name}
          </Link>
        ))}
        {stores.length === 0 && <p>You haven't created any stores yet</p>}
      </div>
      <AddStoreModal>
        <NewStoreForm userId={userId} />
      </AddStoreModal>
    </>
  );
}
