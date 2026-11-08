import { getUser } from "@/lib/server/getUser";
import { LogOut } from "lucide-react";

export default async function HomePage() {
  const user = await getUser();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Hello {user.fullName.split(" ")[0]}</h1>
      <p className="mt-1 text-sm text-neutral-500">this is the first page :)</p>

      <a href="/api/auth/logout" className="flex items-center gap-2 rounded px-3 py-1.5">
        <LogOut className="size-4" aria-hidden />
        Log out
      </a>
    </main>
  );
}
