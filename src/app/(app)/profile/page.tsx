import { signOut } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="font-heading text-3xl">Profile</h1>
      <form action={signOut}>
        <Button type="submit" variant="outline">
          Sign out
        </Button>
      </form>
    </div>
  );
}
