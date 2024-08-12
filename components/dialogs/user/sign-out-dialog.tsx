import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import React from "react";

export default function SignOutDialog() {
  const { signOut } = useAuth();
  return (
    <>
      <Button variant={"destructive"} onClick={() => signOut()}>
        Sign me out
      </Button>
    </>
  );
}
