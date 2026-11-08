"use client";

import { AuthCard } from "@/components/AuthCard";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { FormAlert } from "@/components/FormAlert";
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { TextLink } from "@/components/TextLink";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const { field, onSubmit, loading, message } = useLogin();

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to your account"
      footer={<TextLink text="Don't have an account?" label="Sign up" href="/auth/signup" />}
    >
      <Form onSubmit={onSubmit}>
        <FormAlert message={message} />

        <Input
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="example@cdec.club"
          {...field("email")}
        />

        <PasswordInput
          label="Password"
          autoComplete="current-password"
          placeholder="Your password"
          {...field("password")}
        />

        <Button loading={loading}>Log in</Button>

      </Form>
    </AuthCard>
  );
}
