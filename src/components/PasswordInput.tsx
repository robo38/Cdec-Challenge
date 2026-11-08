"use client";

import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/Input";
import { useToggle } from "@/hooks/useToggle";

export function PasswordInput(props: PasswordInputProps) {
  const [visible, toggle] = useToggle();
  const Icon = visible ? EyeOff : Eye;

  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      action={
        <button
          type="button"
          onClick={toggle}
          aria-label={visible ? "Hide password" : "Show password"}
          className="text-neutral-400 transition-colors hover:text-neutral-900"
        >
          <Icon className="size-4" />
        </button>
      }
    />
  );
}
