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
import {Link} from "react-router-dom"



const formSchema = z.object({
    email: z.string().email(),
    phone: z.string().min(10),
    password: z.string().min(8).max(50),
    password_confirmation: z.string().min(8).max(50),
})

const SignUp = ({ onClose,  onOpenSignIn}) => {
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
            email: "",
            phone: "",
            password: "",
            password_confirmation: "",
        },
    })

    // Define submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)

    }

    const handleSignInClick = () => {
        onClose(); // Close the Sign Up popup
        onOpenSignIn(); // Open the Sign In popup
    }

    return (
        <div>
            {showModal ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div 
                        className="absolute inset-0 bg-black opacity-70" 
                        onClick={() => setShowModal(false)} />
                    <div className="bg-gray-950 bg-opacity-70 p-8 rounded-xl z-20 w-[403px] h-[750px]">
                        <div className="flex text-white justify-between items-center px-9">
                            <Button 
                                variant="link" 
                                className="text-2xl font-plain text-white"
                                onClick={handleSignInClick}
                            >
                                Sign In
                            </Button>
                            <h1 className="text-2xl font-bold">
                                <span className="border-b pb-2">
                                    Sign Up
                                </span>
                            </h1>
                        </div>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="pt-10 text-white">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[18px]">Email</FormLabel>
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
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[18px]"> Phone Number </FormLabel>

                                                    <FormControl>
                                                        <Input className="text-black" placeholder="" type="text" {...field} />
                                                    </FormControl>
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
                                                    <FormLabel className="text-[18px]"> Your new password </FormLabel>

                                                    <FormControl>
                                                        <Input className="text-black" placeholder="" type="password" {...field} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="pt-5 text-white">
                                        <FormField
                                            control={form.control}
                                            name="password_confirmation"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[18px]"> Confirm your password </FormLabel>

                                                    <FormControl>
                                                        <Input className="text-black" placeholder="" type="password" {...field} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="pt-6 flex justify-center mt-2 mb-2">
                                        <Button 
                                            type="submit" 
                                            className="bg-white font-bold text-black text-xl w-[170px]"
                                        >
                                            Sign Up
                                        </Button>
                                       
                                    </div>

                                    <div>
                                        <FormDescription className="text-white text-center pt-5">
                                            <p className="text-sm">
                                                By signing up, you agree to our
                                                <Link to="">
                                                    <span className="text-blue-500"> Terms of Service </span>
                                                </Link>
                                                and
                                                <Link to="">
                                                    <span className="text-blue-500"> Privacy Policy </span>
                                                </Link>
                                            </p>
                                        </FormDescription>
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

export default SignUp
