"use client";

import { useAuth } from "@clerk/nextjs";
import ArrowDoorOut31 from "../icons/arrow-door-out-3-1";

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { toast } from "sonner";
import { ResponsiveDialog } from "../dialogs/responsive-dialog";
import React from "react";
import BetaTestingProgramDialog from "../dialogs/user/beta-testing-program-dialog";
import Bug1 from "../icons/bug-1";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function AuthUserDropdown() {
  const { signOut } = useAuth();

  const [showBetaDialog, setShowBetaDialog] = React.useState(false);

  const handleSignOut = () => {
    signOut({
      redirectUrl: "/auth",
    });

    toast.success("You have been signed out.");
  };
  return (
    <>
      <ResponsiveDialog
        title="Beta Testing Program"
        description="You are a part of the beta testing program. You can leave the program or send a feedback."
        content={<BetaTestingProgramDialog />}
        open={showBetaDialog}
        onOpenChange={setShowBetaDialog}
      />

      <DropdownMenuContent className="min-w-56">
        <Link href={"https://github.com/arscslvt/beans"} target="_blank">
          <DropdownMenuItem>
            <GitHubLogoIcon />
            Contribute on GitHub
          </DropdownMenuItem>
        </Link>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setShowBetaDialog((prev) => !prev)}>
            <Bug1 />
            Beta Program
          </DropdownMenuItem>

          <DropdownMenuItem
            className="focus:bg-destructive/10 focus:text-destructive"
            onClick={handleSignOut}
          >
            <ArrowDoorOut31 />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </>
  );
}
