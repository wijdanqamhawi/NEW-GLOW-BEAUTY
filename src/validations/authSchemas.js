
import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  rememberMe: yup.boolean().default(false),
});

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required"),

  userName: yup
    .string()
    .required("User name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  phoneNumber: yup
    .string()
    .required("Phone number is required"),
});

export const sendCodeSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email Format"),
});
export const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email Format"),

  code: yup
    .string()
    .required("Verification Code is Required"),

  newPassword: yup
    .string()
    .required("New Password is Required")
    .min(6, "Password must be at least 6 characters"),
});