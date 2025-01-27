"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "@/app/lib/actions";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await registerUser(undefined, formData);
    if (result !== "User registered successfully.") {
      setError(result);
    } else {
      // Handle successful registration (e.g., redirect to login page)
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-rose-500">Inscription</CardTitle>
          <CardDescription>
            Entrer votre nom d'utilisateur ci-dessous
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Toto"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline decoration-rose-400"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-100 hover:text-rose-500 text-white text-lg"
              >
                Inscription
              </Button>
              <Button variant="outline" className="w-full">
                Inscription avec Github
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Déjà inscrit ?{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 decoration-rose-400"
              >
                Connexion
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
