import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <SignUp />
      </div>
    </div>
  );
}
