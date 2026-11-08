type FieldValue = string | boolean;

type FormValues = Record<string, FieldValue>;

type FormErrors<T> = Partial<Record<keyof T, string>>;

type Rule = {
  test: (value: FieldValue, values: FormValues) => boolean;
  message: string;
};

type Schema<T> = Record<keyof T, Rule[]>;

type SignupValues = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

type LoginValues = {
  email: string;
  password: string;
};

type ApiResult = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

type User = {
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
};
