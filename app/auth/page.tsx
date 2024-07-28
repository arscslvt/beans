"use client"

import { Button } from '@/components/ui/button'
import React from 'react'

import { useSignIn } from "@clerk/nextjs"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const authSchema = z.object({
    email: z.string().email().min(1, {message: "Email is required"}),
    password: z.string().min(1, {message: "Password is required"}),
  })

export default function AuthPage() {

    const { isLoaded, signIn } = useSignIn();

    const form = useForm<z.infer<typeof authSchema>>({
        resolver: zodResolver(authSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      });

    function onSubmit(values: z.infer<typeof authSchema>) {
        console.log("Validated");
        
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    }
    
  return (
    <div className='grid place-content-center w-dvw h-dvh'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='max-w-96'>
                <div>
                    <h1 className='text-2xl font-semibold pb-1'>Welcome to <span className='text-accent'>Beans</span>.</h1>
                    <h4 className='text-muted-foreground'>First of all, let's sign in to save your works.</h4>
                </div>

                <div className='py-3 flex flex-col gap-1'>
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

                <div className='w-full flex flex-col gap-2 mt-4'>
                    <Button type="submit">Sign-in</Button>
                    <div className='flex flex-col items-center'>
                        <Button variant="outline" className='w-full'>
                            Continue as a guest
                        </Button>
                        <p className='text-xs mt-2 text-muted-foreground text-center'>
                            Continuing as a guest will save your work only on this device.<br/>
                            By signing in you agree to our <span className='text-accent'>Terms of Service</span> and <span className='text-accent'>Privacy Policy</span>.
                        </p>
                    </div>
                </div>
            </form>
        </Form>
    </div>
  )
}
