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
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-rose-500">Connexion</CardTitle>
          <CardDescription>
            Entrer votre nom d'utilisateur ci-dessous
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
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
              <input type="hidden" name="redirectTo" value={callbackUrl} />
              <Button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-100 hover:text-rose-500 text-white text-lg"
                aria-disabled={isPending}
              >
                Let's go
              </Button>
              <Button variant="outline" className="w-full">
                Login avec Github
              </Button>
              {errorMessage && (
                <div
                  className="flex h-8 items-end space-x-1"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </div>
              )}
            </div>
            <div className="mt-4 text-center text-sm">
              Vous n'avez pas de compte ?{" "}
              <Link
                href="/register"
                className="underline underline-offset-4 decoration-rose-400"
              >
                Inscription
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
