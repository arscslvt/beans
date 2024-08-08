import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export default function BetaTestingProgramDialog() {
  const handleLeaveProgram = () => {
    toast.info("Can't leave the program in this phase.", {
      description:
        "The only way to use Beans is to be a part of the beta testing program. If you want to leave the program, please send a feedback.",
      position: "top-center",
      duration: 8000,
      closeButton: false,
    });
  };
  return (
    <div className="flex flex-col pt-3">
      <div className="flex gap-2">
        <Link
          href={"https://github.com/arscslvt/beans/labels/feedback"}
          target="_blank"
          className="flex flex-1 sm:flex-auto"
        >
          <Button variant={"ghost"} className="flex-1">
            Send a feedback
          </Button>
        </Link>
        <Button
          variant={"destructive"}
          onClick={handleLeaveProgram}
          className="flex-1 sm:flex-auto"
        >
          Leave the program
        </Button>
      </div>
    </div>
  );
}
