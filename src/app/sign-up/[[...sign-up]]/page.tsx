import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <SignUp
        appearance={{
          elements: {
            card: "bg-gray-800 text-white", // overrides the default white background
          },
        }}
      />
    </div>
  );
}
