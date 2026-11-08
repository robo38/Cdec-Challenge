const filled = (message: string): Rule => ({
  test: (value) => typeof value === "string" && value.trim().length > 0,
  message,
});

export const signupRules: Schema<SignupValues> = {

  fullName: [
    filled("Full name is required"),
    {
      test: (v) => /^[\p{L}\s'-]+$/u.test(String(v).trim()),
      message: "Full name can only contain letters"
    },
    {
      test: (v) => String(v).trim().split(/\s+/).length >= 2,
      message: "Enter your first and last name"
    },
    {
      test: (v) => String(v).trim().length <= 50,
      message: "Full name must be at most 50 characters"
    },
  ],

  email: [
    filled("Email is required"),
    {
      test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim()),
      message: "Enter a valid email address"
    },
  ],

  phone: [
    filled("Phone number is required"),
    {
      test: (v) => /^\+?\d{10,15}$/.test(String(v).replace(/[\s-]/g, "")),
      message: "Enter a valid phone number (10 to 15 digits)"
    },
  ],

  password: [
    filled("Password is required"),
    {
      test: (v) => String(v).length >= 8,
      message: "Password must be at least 8 characters"
    },
    {
      test: (v) => /[A-Z]/.test(String(v)),
      message: "Password must contain an uppercase letter"
    },
    {
      test: (v) => /[a-z]/.test(String(v)),
      message: "Password must contain a lowercase letter"
    },
    {
      test: (v) => /\d/.test(String(v)),
      message: "Password must contain a number"
    },
    {
      test: (v) => /[^A-Za-z0-9]/.test(String(v)),
      message: "Password must contain a special character"
    },
  ],

  confirmPassword: [
    filled("Please confirm your password"),
    {
      test: (v, values) => v === values.password,
      message: "Passwords do not match"
    },
  ],

  terms: [
    {
      test: (v) => v === true,
      message: "You must accept the terms and conditions"
    }
  ],
};

export const loginRules: Schema<LoginValues> = {
  email: signupRules.email,
  password: [
    filled("Password is required")
  ],
};
