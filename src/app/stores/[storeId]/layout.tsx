import { Sidebar } from "@/components/Sidebar";

export default async function StoreLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>;
}) {
  const parsedParams = await params;
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="md:hidden">
        <Sidebar storeId={parsedParams.storeId} />
      </div>
      <div className="hidden md:block">
        <Sidebar storeId={parsedParams.storeId} />
      </div>
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
