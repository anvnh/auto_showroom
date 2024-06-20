import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";

import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const LoginPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
    const queryClient = useQueryClient();
    const {mutate: loginMutation, isPending, isError, error} =  useMutation({
        mutationFn: async (formData) => {
            try {
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await res.json();
                if(!res.ok) throw new Error(data.error || "Failed to login.");
                console.log(data);
                return data;

            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            // refetch the authUser query to update the UI
            queryClient.invalidateQueries({queryKey: ['authUser']});
        }
    })

	const handleSubmit = (e) => {
		e.preventDefault();
        loginMutation(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
        <div className="bg-primary w-full">
            <div className='max-w-screen-xl mx-auto flex h-screen'>
                <div className='flex-1 hidden lg:flex items-center  justify-center'>
                    <img src={logo} alt='logo' className='w-96' />
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
                        <img src={logo} className='w-24 lg:hidden fill-white' />
                        <h1 className='text-4xl font-extrabold text-white'>{"Let's"} go.</h1>
                        <label className='input input-bordered rounded flex items-center gap-2'>
                            <MdOutlineMail />
                            <input
                                type='text'
                                className='grow w-[280px]'
                                placeholder='username'
                                name='username'
                                onChange={handleInputChange}
                                value={formData.username}
                            />
                        </label>

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
                            {isPending ? "Loading..." : "Login"}
                        </button>
                        {isError && <p className='text-red-500'>{error.message}</p>}
                    </form>
                    <div className='flex flex-col gap-2 mt-4'>
                        <p className='text-white text-lg'>{"Don't"} have an account?</p>
                    </div>
					<Link to='/social/signup'>
                        <button className='btn rounded-full text-white btn-outline w-[200px] mt-5'>
                            Sign in
                        </button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;
