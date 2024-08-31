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
import {
  DynamicDialog,
  DynamicDialogContent,
  DynamicDialogDescription,
  DynamicDialogFooter,
  DynamicDialogHeader,
  DynamicDialogTitle,
} from "../dialogs/dynamic-dialog";
import React from "react";
import BetaTestingProgramDialog from "../dialogs/user/beta-testing-program-dialog";
import Bug1 from "../icons/bug-1";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import SignOutDialog from "../dialogs/user/sign-out-dialog";
import { useClientAuth } from "@/context/client-auth-context";

export default function AuthUserDropdown() {
  const [showBetaDialog, setShowBetaDialog] = React.useState(false);
  const [showLogOutConfirmation, setLogOutConfirmation] = React.useState(false);

  const { isBetaUser } = useClientAuth();

  return (
    <>
      <DynamicDialog open={showBetaDialog} onOpenChange={setShowBetaDialog}>
        <DynamicDialogContent>
          <DynamicDialogHeader>
            <DynamicDialogTitle>{"Beta Testing Program"}</DynamicDialogTitle>
            <DynamicDialogDescription>
              You are a part of the beta testing program. You can leave the
              program or send a feedback.
            </DynamicDialogDescription>
          </DynamicDialogHeader>
          <DynamicDialogFooter>
            <BetaTestingProgramDialog />
          </DynamicDialogFooter>
        </DynamicDialogContent>
      </DynamicDialog>

      <DynamicDialog
        open={showLogOutConfirmation}
        onOpenChange={setLogOutConfirmation}
      >
        <DynamicDialogContent>
          <DynamicDialogHeader>
            <DynamicDialogTitle>{"Log out"}</DynamicDialogTitle>
            <DynamicDialogDescription>
              During the beta program you won't be able to recover your
              password. You will have to contact the support team.
            </DynamicDialogDescription>
          </DynamicDialogHeader>
          <DynamicDialogFooter>
            <SignOutDialog />
          </DynamicDialogFooter>
        </DynamicDialogContent>
      </DynamicDialog>

      <DropdownMenuContent className="min-w-56">
        {isBetaUser && (
          <Link href={"https://github.com/arscslvt/beans"} target="_blank">
            <DropdownMenuItem>
              <GitHubLogoIcon />
              Contribute on GitHub
            </DropdownMenuItem>
          </Link>
        )}
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>

          {isBetaUser && (
            <DropdownMenuItem
              onClick={() => setShowBetaDialog((prev) => !prev)}
            >
              <Bug1 />
              Beta Program
            </DropdownMenuItem>
          )}

          <DropdownMenuItem
            className="focus:bg-destructive/10 focus:text-destructive"
            onClick={() => setLogOutConfirmation(true)}
          >
            <ArrowDoorOut31 />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </>
  );
}
