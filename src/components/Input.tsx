import { FieldError } from "@/components/FieldError";
import { StatusIcon } from "@/components/StatusIcon";

export function Input(
  {
    name,
    label,
    value,
    onChange, 
    onBlur, 
    error, 
    valid, 
    type = "text", 
    placeholder, 
    autoComplete, 
    action 
  }: InputProps) {

  const tone = error ?
    "border-red-500 focus:border-red-500" : valid ?
      "border-emerald-500 focus:border-emerald-500" : "border-neutral-300 focus:border-neutral-900";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-neutral-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          className={`w-full rounded border bg-white px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-neutral-400 ${action ? "pr-16" : "pr-9"} ${tone}`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center gap-2">
          {action}
          <StatusIcon error={Boolean(error)} valid={valid} />
        </div>
      </div>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}
