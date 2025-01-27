import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

async function getUser(username: string): Promise<User | undefined> {
  try {
    console.log(`Fetching user with username: ${username}`);
    const user =
      await sql<User>`SELECT * FROM "user" WHERE username=${username}`;
    console.log(`User fetched: ${JSON.stringify(user.rows[0])}`);
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

async function createUser(username: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    console.log(`Creating user with username: ${username}`);
    const user = await sql<User>`
      INSERT INTO "user" (username, password)
      VALUES (${username}, ${hashedPassword})
      RETURNING *;
    `;
    console.log(`User created: ${JSON.stringify(user.rows[0])}`);
    return user.rows[0];
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) {
            console.log("User not found");
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            console.log("Passwords match");
            return user;
          } else {
            console.log("Passwords do not match");
          }
        } else {
          console.log("Invalid credentials format");
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});

export async function register(
  username: string,
  password: string
): Promise<User> {
  const existingUser = await getUser(username);
  if (existingUser) {
    throw new Error("User already exists.");
  }
  return createUser(username, password);
}
