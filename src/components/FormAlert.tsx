import { CircleAlert } from "lucide-react";

export function FormAlert({ message }: FormAlertProps) {
  if (!message) return null;

  return (
    <div role="alert" className="flex items-center gap-2 rounded bg-red-50 px-3 py-2.5 text-sm text-red-700">
      <CircleAlert className="size-4 shrink-0" aria-hidden />
      {message}
    </div>
  );
}
