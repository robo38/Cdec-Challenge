export function AuthCard({ title, subtitle, footer, wide, children }: AuthCardProps) {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-10">
      <div className={`w-full ${wide ? "max-w-xl" : "max-w-md"}`}>
        <div className="rounded-[5px] bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 mb-6 text-sm text-neutral-500">{subtitle}</p>
          {children}
        </div>
        <div className="mt-6 text-center">{footer}</div>
      </div>
    </main>
  );
}
