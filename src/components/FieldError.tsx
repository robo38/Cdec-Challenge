export function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="text-xs text-red-600">
      {message}
    </p>
  );
}
