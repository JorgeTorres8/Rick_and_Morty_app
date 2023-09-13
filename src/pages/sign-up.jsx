'use client';
import {useForm} from "react-hook-form";
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import '@/app/globals.css'
import Link from "next/link";
import axios from "axios";
import AuthLayout from './layout/AuthLayout';

const FormSchema = z
    .object({
        username: z.string().min(1, 'Username is required').max(10),
        email: z.string().min(1, 'Email is Required').email('Invalid Email'),
        password: z
            .string()
            .min(1, 'Password is Required')
            .min(6, 'Password must have than 8 characters'),
        confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',

  })

const SignUp = () => {
        
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });
    

    const onSubmit = async () => {
    }

    return(
        <AuthLayout
            page="Sign Up"
        >    
            <div className="h-screen flex items-center justify-center flex-col">
            
                <Link href="/">
                    <img className="object-scale-down h-45 w-96" src="/img/logo.png" alt="Logo"/>
                </Link>

                <h1 className="text-4xl font-bold lg:text-5xl mt-10 capitalize">Get ready for adventure</h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 md:w-2/4 lg:w-2/6 mt-10">
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Mortick" {...field} />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="mail@example.com" {...field} />
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
                                                <Input type="password" placeholder="Enter your Password" {...field} />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Re-Enter your Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Confirm Password" {...field} />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-center items-center">

                            <Button className="w-1/2 flex justify-center items-center mt-6 bg-lime-600 text-black hover:bg-lime-700 rounded-xl" type="submit">Sign Up</Button>
                        </div>
                    </form>
                </Form>
                <div>
                    <p className="text-center text-sm text-gray-600 mt-2">You don&apos;t have an account yet?&nbsp;
                        <Link className="text-cyan-600 hover:underline" href="/login">Sign In</Link>
                    </p>
                </div>
        </div>
    </AuthLayout>
    )
}
export default SignUp;