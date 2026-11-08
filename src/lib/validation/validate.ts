export function validate<T extends FormValues>(values: T, schema: Schema<T>): FormErrors<T> {
  const errors: FormErrors<T> = {};

  for (const key of Object.keys(schema) as (keyof T)[]) {
    
    const failed = schema[key].find((rule) => !rule.test(values[key], values));

    if (failed) errors[key] = failed.message;
  }
  return errors;
}
