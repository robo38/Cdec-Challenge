"use client";

import { useRouter } from "next/navigation";
import { request } from "@/lib/client/request";
import { useForm } from "@/hooks/useForm";
import { signupRules } from "@/lib/validation/rules";

export function useSignup() {
  const router = useRouter();
  const initial: SignupValues = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "", terms: false
  };

  return useForm(initial, signupRules, async (values) => {
    const result = await request("/api/auth/signup", values);
    if (result.ok) router.replace("/");
    return result;
  });
}
