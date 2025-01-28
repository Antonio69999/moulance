"use server";

import { signIn, register, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log("Attempting to sign in");
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          console.log("Invalid credentials");
          return "Invalid credentials.";
        default:
          console.log("Something went wrong");
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function registerUser(
  prevState: string | undefined,
  formData: FormData
) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    await register(username, password);
    return "User registered successfully.";
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "User already exists.") {
        return "User already exists.";
      }
    }
    throw error;
  }
}

export async function logout(): Promise<void> {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    console.log("Error signing out:", error);
    throw error;
  }
}
