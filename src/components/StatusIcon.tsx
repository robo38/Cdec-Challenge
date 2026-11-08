import { CircleAlert, CircleCheck } from "lucide-react";

export function StatusIcon({ error, valid }: StatusIconProps) {
  if (error) return <CircleAlert className="size-4 text-red-500" aria-hidden />;

  if (valid) return <CircleCheck className="size-4 text-emerald-500" aria-hidden />;

  return null;
}
