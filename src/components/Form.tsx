export function Form({ onSubmit, children }: FormProps) {
  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
      {children}
    </form>
  );
}
