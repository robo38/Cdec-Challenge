import { Check } from "lucide-react";
import { FieldError } from "@/components/FieldError";

export function Checkbox({ name, value, onChange, onBlur, error, children }: CheckboxProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="flex cursor-pointer select-none items-start gap-3">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={value}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          onChange={(event) => onChange(event.target.checked)}
          onBlur={onBlur}
          className="peer sr-only"
        />
        <span
          className={`mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-900/20 ${
            value ? "border-neutral-900 bg-neutral-900" : error ? "border-red-500 bg-white" : "border-neutral-300 bg-white"
          }`}
        >
          <Check strokeWidth={3} className={`size-3 text-white ${value ? "opacity-100" : "opacity-0"}`} aria-hidden />
        </span>
        <span className="text-sm text-neutral-600">{children}</span>
      </label>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}
