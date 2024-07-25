import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "@/assets/logo.png"

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast"

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        fullName: "",
        password: "",
    });

    const { mutate: signup, isError, error, isPending } = useMutation({
        mutationFn: async (formData) => {
            try {
                const res = await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await res.json();
                if(!res.ok) throw new Error(data.error || "Failed to create account.");
                console.log(data);
                return data;

            } catch (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            toast.success("Account created successfully");
        }
    })


    const handleSubmit = (e) => {
        e.preventDefault(); // page won't reload
        console.log(formData);
        // signup(formData);
        // send verification email
        signup(formData);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <div className="bg-primary w-full">
            <div className='max-w-screen-xl mx-auto flex h-screen px-10'>
                <div className='flex-1 hidden lg:flex items-center  justify-center'>
                    <img src={logo} className=' lg:w-2/3'/>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <form className='lg:w-2/3  mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={handleSubmit}>
                        <img src={logo} className='w-24 lg:hidden' />
                        <h1 className='text-4xl font-extrabold text-white'>Join today.</h1>
                        <label className='input input-bordered rounded flex items-center gap-2'>
                            <MdOutlineMail />
                            <input
                                type='email'
                                className='grow'
                                placeholder='Email'
                                name='email'
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                        </label>
                        <div className='flex gap-4 flex-wrap'>
                            <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
                                <FaUser />
                                <input
                                    type='text'
                                    className='grow '
                                    placeholder='Username'
                                    name='username'
                                    onChange={handleInputChange}
                                    value={formData.username}
                                />
                            </label>
                            <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
                                <MdDriveFileRenameOutline />
                                <input
                                    type='text'
                                    className='grow'
                                    placeholder='Full Name'
                                    name='fullName'
                                    onChange={handleInputChange}
                                    value={formData.fullName}
                                />
                            </label>
                        </div>
                        <label className='input input-bordered rounded flex items-center gap-2'>
                            <MdPassword />
                            <input
                                type='password'
                                className='grow'
                                placeholder='Password'
                                name='password'
                                onChange={handleInputChange}
                                value={formData.password}
                            />
                        </label>
                        <button className='btn rounded-full btn-neutral text-white bg-gray-600 bg-opacity-50'>
                            {isPending ? "Loading..." : "Sign up"}
                        </button>
                        {isError && <p className='text-red-500'>{error.message}</p>}
                    </form>
                    <div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
                        <p className='text-white text-lg'>Already have an account?</p>
                        <Link to='/social/login'>
                            <button className='btn rounded-full text-white btn-outline w-full'>Sign in</button>
                        </Link>
                    </div>
                </div>
        </div>
        </div>
    );
};
export default SignUpPage;
