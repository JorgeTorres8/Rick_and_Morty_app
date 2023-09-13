'use client';
import { useEffect } from "react";
import { useRouter } from "next/router";
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
/*import Alerts from "@/components/Alerts";*/
import useAuth from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast"
import AuthLayout from './layout/AuthLayout';

const FormSchema = z.object({
    email: z.string().min(1, 'Email is Required').email('Invalid Email'),
    password: z
        .string()
        .min(1, 'Password is Required')
        .min(6, 'Password must have than 8 characters')
  })

const SignIn = () => {

    const { alert, user, setUser,isAuth, setIsAuth, setAlert } = useAuth();
    const router = useRouter(); 
    const { toast } = useToast()

    useEffect(() => {
      if(user) {
        router.push('/dashboard');
      }
    }, [])
    
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = form.handleSubmit(async ({ email, password }) => {
        
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/users`);
            const currentUser = await response.json();
            const authenticatedUser = currentUser.find(u => u.email === email && u.password === password);
            if (authenticatedUser) {
                // Login successful
                setAlert({})
                localStorage.setItem('token', authenticatedUser.username)
                setIsAuth(authenticatedUser.id)
                router.push('/dashboard')
            } else {
                // Login failed
                /*setAlert({
                    tittle: "Invalid credentials",
                    message: "Hmmm... it seems that you made a mistake entering your Username or Password",
                    error: true
                });*/
                toast({
                    title: "Invalid Credentials", 
                    description: "Hmmm... it seems that you made a mistake entering your Username or Password",
                    className:"border-red-700 rounded-xl shadow-md shadow-red-800"
                });
            }
        } catch (error) {
            console.log(error)
        }
      });

    /*const {message} = alert;*/

    return(
        <AuthLayout
            page="Log In"
        >
            <div className="container h-screen flex items-center justify-center flex-col ">

                <Link href="/">
                    <img className="object-scale-down h-auto w-96" src="/img/logo.png" alt="Logo"/>
                </Link>

                <h1 className="text-4xl font-bold lg:text-5xl mt-10 capitalize text-center">The universe awaits you</h1>

                {/*message && <Alerts alert={alert} />*/}   
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-2/5 lg:w-2/6 mt-5">
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    {...field}
                                                    type="email"
                                                    placeholder="mail@example.com"
                                                />
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
                                                <Input 
                                                    {...field}
                                                    type="password"
                                                    placeholder="Enter your Password"/>
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Button 
                                className="w-1/2 flex justify-center items-center mt-6 bg-lime-600 text-black hover:bg-lime-700 rounded-xl" type="submit">
                                Sign In
                            </Button>
                        </div>
                    </form>
                </Form>
                <div>
                    <p className="text-center text-sm text-gray-600 mt-2">You don&apos;t have an account yet?&nbsp;
                        <Link className="text-cyan-600 hover:underline" href="/sign-up">Sign Up</Link>
                    </p>
                </div>
            </div>
        </AuthLayout>
    )


    }
export default SignIn;