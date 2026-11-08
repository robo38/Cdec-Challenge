"use client";

import { useRouter } from "next/navigation";
import { request } from "@/lib/client/request";
import { useForm } from "@/hooks/useForm";
import { loginRules } from "@/lib/validation/rules";

export function useLogin() {
  const router = useRouter();
  const initial: LoginValues = { email: "", password: "" };

  return useForm(initial, loginRules, async (values) => {
    const result = await request("/api/auth/login", values);
    if (result.ok) router.replace("/");
    return result;
  });
}
