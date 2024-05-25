import { useEffect, useState } from 'react';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {Link} from "react-router-dom"
import SignUp from "./SignUp"
import "aos/dist/aos.css";



const formSchema = z.object({
    username: z.string().min(5).max(50),
    password: z.string().min(8).max(50),
    rememberMe: z.boolean(),
})

const SignIn = ({ onClose, onOpenSignUp }) => {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        if (!showModal) {
            onClose(); // Call callback to update toggleSignIn
        }
    }, [showModal, onClose]);

    // Define form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            rememberMe: false,
        },
    })

    // Define submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    const handleSignUpClick = () => {
        onClose(); // Close the Sign In popup
        onOpenSignUp(); // Open the Sign Up popup
    };

    return (
        <div>
            {showModal ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div 
                        className="absolute inset-0 bg-black opacity-70" 
                        onClick={() => setShowModal(false)} />
                    <div className="bg-primary md:bg-opacity-70 bg-opacity-95 p-8 rounded-xl z-20 w-[403px] h-[600px]">
                        <div className="flex text-white justify-between items-center px-9">
                            <h1 className="text-2xl font-bold">
                                <span className="border-b pb-2">
                                    Sign In
                                </span>
                            </h1>
                            <Button 
                                variant="link" 
                                className="text-2xl font-plain text-white"
                                onClick={handleSignUpClick}
                            >
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="pt-10 text-white">
                                        <FormField
                                            control={form.control}
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="w-full text-[18px] flex justify-start">
                                                        Email or Phone Number
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input className="text-black" type="email" placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="pt-5 text-white">
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="w-full text-[18px] flex justify-start">
                                                        Password
                                                    </FormLabel>

                                                    <FormControl>
                                                        <Input className="text-black" placeholder="" type="password" {...field} />
                                                    </FormControl>

                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <FormField
                                            control={form.control}
                                            name="rememberMe"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                                                    <FormControl className="bg-white">
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <div className="space-y-1 leading-none text-white">
                                                        <FormLabel>
                                                            Remember me
                                                        </FormLabel>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="pt-6 flex justify-center mt-2 mb-2">
                                        <Button type="submit" className="bg-white font-bold text-black text-xl w-[170px]">
                                            Sign in
                                        </Button>
                                    </div>

                                    <div className="pt-4 text-white text-center">
                                        <Link to="">
                                            <p >
                                                <span className="text-sm hover:border-b border-gray-300">
                                                    Forgot your password?
                                                </span>
                                            </p>
                                        </Link>
                                        <p></p>
                                    </div>

                                    <div>
                                        <FormDescription className="text-white text-center pt-5">
                                            <p className="text-sm">
                                                By signing in, you agree to our
                                                <Link to="">
                                                    <span className="text-blue-500"> Terms of Service </span>
                                                </Link>
                                                and
                                                <Link to="">
                                                    <p className="text-blue-500"> Privacy Policy </p>
                                                </Link>
                                            </p>
                                        </FormDescription>
                                    </div>

                                    <div className="pt-7 text-white text-center">
                                        <p>
                                            Don't have an account?
                                            <Button 
                                                variant="link" className="text-blue-500 text-[15px]"
                                                onClick={handleSignUpClick}
                                            >

                                                Sign Up
                                            </Button>
                                        </p>
                                    </div>

                                </form>
                            </Form>
                        </div>

                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default SignIn
