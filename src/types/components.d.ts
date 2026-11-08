type InputProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  valid?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  action?: import("react").ReactNode;
};

type PasswordInputProps = Omit<InputProps, "type" | "action">;

type CheckboxProps = {
  name: string;
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
  error?: string;
  valid?: boolean;
  children: import("react").ReactNode;
};

type StatusIconProps = {
  error?: boolean;
  valid?: boolean;
};

type FieldErrorProps = {
  id: string;
  message?: string;
};

type ButtonProps = {
  loading?: boolean;
  children: import("react").ReactNode;
};

type FormProps = {
  onSubmit: (event: import("react").FormEvent) => void;
  children: import("react").ReactNode;
};

type FormRowProps = {
  children: import("react").ReactNode;
};

type FormAlertProps = {
  message?: string;
};

type AuthCardProps = {
  title: string;
  subtitle: string;
  footer: import("react").ReactNode;
  wide?: boolean;
  children: import("react").ReactNode;
};

type TextLinkProps = {
  text: string;
  label: string;
  href: string;
};

type ProfileCardProps = {
  user: User;
};

type ProfileRowProps = {
  label: string;
  value: string;
};
