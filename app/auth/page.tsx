"use client";

import { Button } from "@/components/ui/button";
import React from "react";

import { useSignIn } from "@clerk/nextjs";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ClerkAPIErrorJSON } from "@clerk/types";
import { toast } from "sonner";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useRouter } from "next/navigation";

const authSchema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function AuthPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [verifying, setVerifying] = React.useState(false);
  const [code, setCode] = React.useState("");

  const router = useRouter();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof authSchema>) {
    console.log("Validated");
    console.log(values);

    if (!isLoaded) {
      return console.error("Sign in not loaded");
    }

    try {
      // Sign in with Clerk
      const signInAttempt = await signIn?.create({
        identifier: values.email,
        password: values.password,
        strategy: "password",
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        console.log("Signed in");

        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (e: any) {
      const error = JSON.stringify(e, null, 2);
      const errorJSON = JSON.parse(error).errors as ClerkAPIErrorJSON[];

      console.error(errorJSON);

      if (isClerkAPIResponseError(e))
        errorJSON.map((err) => {
          toast.error(err.message, {
            description: err.long_message,
            position: "top-center",
          });
        });
    }
  }

  return (
    <div className="grid place-content-center w-dvw h-dvh">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-96">
          <div>
            <h1 className="text-2xl font-semibold pb-1">
              Welcome to <span className="text-accent">Beans</span>.
            </h1>
            <h4 className="text-muted-foreground">
              First of all, let's sign in to save your works.
            </h4>
          </div>

          <div className="py-3 flex flex-col gap-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="mrbeans" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex flex-col gap-2 mt-4">
            <Button type="submit">Sign-in</Button>
            <div className="flex flex-col items-center">
              <Button variant="outline" className="w-full">
                Continue as a guest
              </Button>
              <p className="text-xs mt-2 text-muted-foreground text-center">
                Continuing as a guest will save your work only on this device.
                <br />
                By signing in you agree to our{" "}
                <span className="text-accent">Terms of Service</span> and{" "}
                <span className="text-accent">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
