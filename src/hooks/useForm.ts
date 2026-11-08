"use client";

import { useState, type FormEvent } from "react";
import { validate } from "@/lib/validation/validate";

export function useForm<T extends FormValues>(initial: T, schema: Schema<T>, submit: (values: T) => Promise<ApiResult>) {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [serverErrors, setServerErrors] = useState<FormErrors<T>>({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const errors: FormErrors<T> = { ...serverErrors, ...validate(values, schema) };

  const field = <K extends keyof T>(name: K) => ({
    name: String(name),
    value: values[name],
    error: touched[name] ? errors[name] : undefined,
    valid: Boolean(touched[name] && !errors[name]),

    onChange: (value: T[K]) => {
      setValues((current) => ({ ...current, [name]: value }));
      setServerErrors((current) => ({ ...current, [name]: undefined }));
    },
    
    onBlur: () => setTouched((current) => ({ ...current, [name]: true })),
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setTouched(Object.fromEntries(Object.keys(schema).map((key) => [key, true])) as Record<keyof T, boolean>);
    setMessage("");

    if (Object.keys(validate(values, schema)).length > 0) return;

    setLoading(true);
    const result = await submit(values);
    setLoading(false);
    setServerErrors((result.errors ?? {}) as FormErrors<T>);
    setMessage(result.ok ? "" : (result.message ?? ""));
  };

  return { field, onSubmit, loading, message };
}
