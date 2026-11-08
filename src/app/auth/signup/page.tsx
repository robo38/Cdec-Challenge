"use client";

import { AuthCard } from "@/components/AuthCard";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Form } from "@/components/Form";
import { FormAlert } from "@/components/FormAlert";
import { FormRow } from "@/components/FormRow";
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { TextLink } from "@/components/TextLink";
import { useSignup } from "@/hooks/useSignup";

export default function SignupPage() {
  const { field, onSubmit, loading, message } = useSignup();

  return (
    <AuthCard
      wide
      title="Create an account"
      subtitle="Fill in your details to get started"
      footer={<TextLink text="Already have an account?" label="Log in" href="/auth/login" />}
    >
      <Form onSubmit={onSubmit}>
        <FormAlert message={message} />
        <Input
          label="Full name"
          autoComplete="name"
          placeholder="RoBo"
          {...field("fullName")}
        />
        <FormRow>
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="example@cdec.club"
            {...field("email")}
          />

          <Input
            label="Phone number"
            type="tel"
            autoComplete="tel"
            placeholder="+213070000000"
            {...field("phone")}
          />
        </FormRow>
        <FormRow>
          <PasswordInput
            label="Password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            {...field("password")}
          />

          <PasswordInput
            label="Confirm password"
            autoComplete="new-password"
            placeholder="Repeat password"
            {...field("confirmPassword")}
          />
        </FormRow>
        
        <Checkbox {...field("terms")}>I agree to the Terms of Service and Privacy Policy</Checkbox>
        <Button loading={loading}>Create account</Button>
      </Form>
    </AuthCard>
  );
}
