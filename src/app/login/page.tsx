import { signIn } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <form action={signIn} className="w-full max-w-sm space-y-5">
        <div className="space-y-1 text-center">
          <h1 className="font-heading text-3xl">CCB&apos;s Library</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to see the shelves.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-destructive">
            That email and password didn&apos;t match. Try again.
          </p>
        )}

        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </main>
  );
}
