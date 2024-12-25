import React, { useState, useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import { toast, Toaster } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { logo, gif, ngoisao } from "@/assets";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import LoginRepon from "./LoginRepon";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { IoArrowBackSharp, IoChevronBackSharp } from "react-icons/io5";
const LoginPage: React.FC = () => {
	const [isPending, setIsPending] = useState(false);

	const [showSignUpForm, setShowSignUpForm] = useState(false);
	const [showSignInForm, setShowSignInForm] = useState(true);
	const [activeForm, setActiveForm] = useState<string>("");
	const [forgotForm, setForgotForm] = useState(false);
	const [numberForm, setNumberForm] = useState(false);
	const [number, setNumber] = useState("");
	const [changePass, setChangePass] = useState(false);
    
	const [changePassData, setChangePassData] = useState({
        gmail: "",
		password: "",
		newPassword: "",
	});

	const [emaildata, setEmaildata] = useState({
		email: "",
	});
	const [signUpData, setSignUpData] = useState({
		email: "",
		username: "",
		fullName: "",
		password: "",
	});

	const [signInData, setSignInData] = useState({
		username: "",
		password: "",
	});

	const queryClient = useQueryClient();

	useEffect(() => {
		AOS.init({
			duration: 700,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	// send verification email
	const { mutate: sendToken, isPending: isSendingToken } = useMutation({
		mutationFn: async (email: string) => {
			try {
				const res = await fetch("/api/auth/confirm/sendToken", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email }),
				});
				const data = await res.json();
				if (!res.ok)
					throw new Error(data.error || "Failed to send token.");
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		onSuccess: (data) => {
			toast.success("Please check your email for verification link.");
            setEmaildata({
                email : data.email
            })

		},
	});
	// send forgot password verification email
	const {mutate: sendForgotpassword, isPending: isSending, data: otpCode} = useMutation({
        mutationFn: async (email: string) => {
            try {
                const res = await fetch("/api/auth/confirm/sendResetToken", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                });
                const data = await res.json();
                if (!res.ok)
                    throw new Error(data.error || "Failed to send token.");
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            toast.success("Please check your email for verification link.");
        },
    });

	const { mutate: signup, isError, error, isPending: isSigningup } = useMutation({
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
				if (!res.ok)
					throw new Error(data.error || "Failed to create account.");
				// console.log(data);
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		onSuccess: () => {
			toast.success("Account created successfully.");
			sendToken(signUpData.email);
		},
	});

	const { mutate: resetPass, isPending: isReseting } = useMutation({
           mutationFn: async (changePassData)  => {
            try {
                const res = await fetch("/api/auth/resetPassword", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(changePassData),
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to reset password.");
                console.log(data);
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            toast.success("Password reset successfully.");
            setChangePass(false);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(signUpData);
	};

	const toggleForm = (form: string) => {
		if (form === "signUp") {
			setShowSignUpForm(true);
			setShowSignInForm(false);
			setForgotForm(false);
			setChangePass(false);
			setNumberForm(false);
			setActiveForm("signUp");
		} else if (form === "signIn") {
			setShowSignInForm(true);
			setShowSignUpForm(false);
			setChangePass(false);
			setForgotForm(false);
			setNumberForm(false);
			setActiveForm("signIn");
		} else if (form === "forgot") {
			setShowSignInForm(false);
			setShowSignUpForm(false);
			setForgotForm(true);
			setNumberForm(false);
			setChangePass(false);
			setActiveForm("forgot");
		} else if (form === "number") {
			setShowSignInForm(false);
			setShowSignUpForm(false);
			setForgotForm(false);
			setNumberForm(true);
			setChangePass(false);
			setActiveForm("number");
		} else if (form === "changepass") {
			setChangePass(true);
			setShowSignUpForm(false);
			setShowSignInForm(false);
			setForgotForm(false);
			setNumberForm(false);
			setActiveForm("changepass");
		} else {
			setShowSignUpForm(false);
			setShowSignInForm(false);
			setForgotForm(false);
			setNumberForm(false);
			setChangePass(false);
			setActiveForm("");
		}
		resetFormInputs();
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		form: string
	) => {
		const { name, value } = event.target;
		if (form === "signUp") {
			setSignUpData({ ...signUpData, [name]: value });
		} else if (form === "signIn") {
			setSignInData({ ...signInData, [name]: value });
		}
	};
	const handleSignInSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		setIsPending(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signInData),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Failed to login.");
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
			resetFormInputs();
		} catch (error) {
			toast.error(error.message);
		} finally {
			setIsPending(false);
		}
	};
	const resetFormInputs = () => {
		setSignUpData({
			email: "",
			username: "",
			fullName: "",
			password: "",
		});
		setSignInData({
			username: "",
			password: "",
		});
		setEmaildata({
			email: "",
		});
		// setChangePassData({
		// 	newPass: "",
		// 	rePass: ""
		// });
	};
	const handleForgotSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(emaildata.email)) {
            toggleForm("number");
            setChangePassData({...changePassData, gmail: emaildata.email});
            sendForgotpassword(emaildata.email);
        }
        else {
            toast.error("Invalid email address");
    }};

	const handleNumberSubmit = (e) => {
		e.preventDefault();
		if(number === otpCode.otp){
            toggleForm("changepass");
		}
	};
	const handleChangePassSubmit = (e) => {
		e.preventDefault();
		// console.log(changePassData, userEmail);
        resetPass(changePassData);
        toggleForm("signIn");
	};

	const handleInputChangePass = (e) => {
		const { name, value } = e.target;
		setChangePassData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	return (
		<div className="w-full bg-primary">
			<Toaster position="top-center" reverseOrder={false} />
			<video
				autoPlay
				muted
				loop
				playsInline
				className="fixed inset-0 w-full h-full object-cover z-0"
			>
				<source src={ngoisao} type="video/mp4" />
			</video>
			<div className="hidden xl:block ">
				<div className="w-full h-auto bg-center bg-cover duration-500">
					<div className="flex items-center min-h-screen col-span-1  md:col-span-2 gap-[200px] pt-12">
						<div
							data-aos="fade-right"
							className="pl-2 md:pl-[1px] text-center absolute top-12 w-[1200px] font-bold"
						>
							<div
								data-aos="fade-right"
								className="justify-center flex pt-5 "
							>
								<Link to="/">
									<img
										src={logo}
										alt="logo"
										className="md:w-[400px] w-[55px] md:h-full h-[55px] bottom-2 flex relative"
									/>
								</Link>
							</div>
							<h1 className="text-sm md:text-8xl text-center font-syncopate text-gray-300 animate-pulse duration-500 transition-all ease-in-out">
								Welcome <br /> to AAP
							</h1>
						</div>

						<div className="pl-[250px] top-48 pt-16 relative w-[900px] h-[300px] rounded-[20px]"></div>

						<div
							data-aos="fade-right"
							className="relative flex pr-[200px]"
						>
							{showSignUpForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] pt-20 px-20 pb-5 bg-primary bg-opacity-50 shadow-md shadow-white rounded-tr-[200px] rounded-xl mr-10 backdrop-blur-md`}
								>
									<div className="absolute w-[400px] h-[70px] -top-[160px] z-40 -left-[170px] transform scale-x-[-1]">
										<img src={gif} />
									</div>
									<h2 className="text-center pb-12 text-5xl font-poppins text-white mb-6">
										Sign Up
									</h2>
									<form
										className="space-y-6"
										onSubmit={handleSubmit}
										noValidate
									>
										{[
											"email",
											"username",
											"fullName",
											"password",
										].map((placeholder, index) => (
											<div
												key={index}
												className="relative pl-12"
											>
												<input
													type={
														placeholder ===
														"password"
															? "password"
															: placeholder ===
															  "email"
															? "email"
															: "text"
													}
													name={placeholder}
													value={
														signUpData[
															placeholder as keyof typeof signUpData
														]
													}
													onChange={(e) =>
														handleInputChange(
															e,
															"signUp"
														)
													}
													className="w-full p-2 text-white bg-transparent border-b-2 border-white focus:outline-none peer"
													required
												/>
												<label
													className={`absolute -left-12 top-6 text-gray-400 text-base peer-focus:-top-3
													peer-focus:left-12 peer-focus:text-sm transition-all duration-300 ${
														signUpData[
															placeholder as keyof typeof signUpData
														]
															? "-top-3 text-sm"
															: ""
													}`}
												>
													{placeholder
														.charAt(0)
														.toUpperCase() +
														placeholder.slice(1)}
												</label>
											</div>
										))}

										<div className="pt-10 relative flex justify-center">
											<Button
												type="submit"
												className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-72 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-xl
              										before:ease relative h-12 w-40 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-80
              										"
                                                >
												{isSigningup ? (
													<LoadingSpinner />
												) : (
													<div className="text-xl ">
														C
														<span className="lowercase text-center text-xl">
															reate Account
														</span>
													</div>
												)}
											</Button>
										</div>
										<div className="w-full justify-center flex">
											{isError && (
												<p className="text-red-500">
													{error.message}
												</p>
											)}
										</div>
										<div className="flex pt-12 justify-center items-center text-center">
											<p>You have an account ?</p>
											<div className="w-[70px]">
												<a
													onClick={() =>
														toggleForm("signIn")
													}
													className={`cursor-pointer text-blue-300 transition-all ease-in-out duration-700 text-sm font-poppins relative hover:underline`}
												>
													Sign In
												</a>
											</div>
										</div>
									</form>
								</div>
							)}

							{showSignInForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] pt-20 px-20 pb-5 bg-primary shadow-md shadow-white bg-opacity-50 rounded-xl rounded-tr-[200px] mr-10 backdrop-blur-md`}
								>
									<div className="absolute w-[400px] h-[70px] -top-[160px] z-40 -left-[170px] transform scale-x-[-1]">
										<img src={gif} />
									</div>
									<h2 className="text-center pb-12 text-5xl font-poppins text-white mb-6">
										Sign In
									</h2>
									<form
										className="space-y-6"
										onSubmit={handleSignInSubmit}
										noValidate
									>
										{["username", "password"].map(
											(placeholder, index) => (
												<div
													key={index}
													className="relative pl-12"
												>
													<input
														type={
															placeholder ===
															"password"
																? "password"
																: "text"
														}
														name={placeholder}
														value={
															signInData[
																placeholder as keyof typeof signInData
															]
														}
														onChange={(e) =>
															handleInputChange(
																e,
																"signIn"
															)
														}
														className="w-full p-2 text-white bg-transparent border-b-2 border-white focus:outline-none peer"
														required
													/>
													<label
														className={`absolute -left-24 top-6 text-gray-400 text-base peer-focus:-top-3
													peer-focus:left-0 peer-focus:text-sm transition-all duration-300 ml-12 ${
														signUpData[
															placeholder as keyof typeof signUpData
														]
															? "-top-3 text-sm"
															: ""
													}`}
													>
														{placeholder
															.charAt(0)
															.toUpperCase() +
															placeholder.slice(
																1
															)}
													</label>
												</div>
											)
										)}
										<div
											data-aos="fade-left"
											onClick={() => toggleForm("forgot")}
											className="pt-0 pb-1 w-full justify-center z-10 items-center flex gap-5"
										>
											<a className="w-full h-5 cursor-pointer flex justify-end  text-blue-300 transition-all ease-in-out duration-700 text-sm font-poppins z-50 relative hover:underline ">
												Recovery Password
											</a>
										</div>
										<div className="pt-2 relative flex justify-center">
											<Button
												type="submit"
												className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-[300px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-xl
										before:ease relative h-12 w-40 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-80"
											>
												{isPending ? (
													<LoadingSpinner />
												) : (
													<div>
														S
														<span className="lowercase">
															ign In
														</span>
													</div>
												)}
											</Button>
										</div>

										<div className="flex pt-12 justify-center items-center text-center">
											<p>Don't have an account yet?</p>
											<div className="w-[70px]">
												<a
													onClick={() =>
														toggleForm("signUp")
													}
													className={`cursor-pointer text-blue-300 transition-all ease-in-out duration-700 text-sm font-poppins relative hover:underline`}
												>
													Sign Up
												</a>
											</div>
										</div>
									</form>
								</div>
							)}

							{forgotForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] pt-20 px-20 pb-5 bg-primary shadow-md shadow-white bg-opacity-50 rounded-xl rounded-tr-[200px] mr-10 backdrop-blur-md`}
								>
									<div className="absolute w-[400px] h-[70px] -top-[160px] z-40 -left-[170px] transform scale-x-[-1]">
										<img src={gif} />
									</div>
									<h2 className="text-center pb-12 text-4xl font-poppins text-white mb-6">
										Forgot password
									</h2>
									<form
										onSubmit={handleForgotSubmit}
										className="space-y-6"
										noValidate
									>
										{["Gmail"].map((placeholder, index) => (
											<div
												key={index}
												className="relative pl-12 px-8"
											>
												<input
                                                    value={emaildata.email}
                                                    onChange={(e) =>
                                                        setEmaildata({
                                                            email: e.target.value,
                                                        })
                                                    }
													className="w-full p-2 text-white bg-transparent border-b-2 border-white focus:outline-none peer"
													required
												/>
												<label
													className={`absolute -left-16 top-6 text-gray-400 text-base peer-focus:-top-3
													peer-focus:left-0 peer-focus:text-sm transition-all duration-300 ml-12 ${
														signUpData[
															placeholder as keyof typeof signUpData
														]
															? "-top-3 text-sm"
															: ""
													}`}
												>
													{placeholder
														.charAt(0)
														.toUpperCase() +
														placeholder.slice(1)}
												</label>
											</div>
										))}
										<div className="pt-12 relative flex justify-center">
											<Button
												type="submit"
												className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-[300px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-xl
												before:ease relative h-12 w-40 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-80"
												// onClick={() =>
												// 	toggleForm("number")
												// }
											>
												<div>
													S
													<span className="lowercase">
														end code to Gmail
													</span>
												</div>
											</Button>
										</div>

										<div className="flex pt-12 justify-center items-center text-center">
											<p>Remembered the password ?</p>
											<div className="w-[70px]">
												<a
													onClick={() =>
														toggleForm("signIn")
													}
													className={`cursor-pointer text-blue-300 transition-all ease-in-out duration-700 text-sm font-poppins relative hover:underline`}
												>
													Sign In
												</a>
											</div>
										</div>
									</form>
								</div>
							)}

							{numberForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] pt-20 px-20 pb-5 bg-primary shadow-md shadow-white bg-opacity-50 rounded-xl rounded-tr-[200px] mr-10 backdrop-blur-md`}
								>
									<div className="absolute w-[400px] h-[70px] -top-[160px] z-40 -left-[170px] transform scale-x-[-1]">
										<img src={gif} />
									</div>
									<h2 className="text-center pb-12 text-4xl font-poppins text-white mb-6">
										Forgot password
									</h2>
									<form onSubmit={handleNumberSubmit} className="space-y-6">
										<div className="mb-5">
											<h1 className="text-xl font-bold text-center">
												Please enter the 6-digit code
												sent to your email
											</h1>
										</div>
										<div className="justify-center flex">
											<InputOTP
												maxLength={6}
												value={number}
												onChange={(number) =>
													setNumber(number)
												}
											>
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
												</InputOTPGroup>
												<InputOTPSeparator />
												<InputOTPGroup>
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</div>
										<div className="pt-12 relative flex justify-center">
											<Button
												type="submit"
												className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-[300px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-xl
												before:ease relative h-12 w-40 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-80"
											>
												<div>
													C
													<span className="lowercase">
														onfirm
													</span>
												</div>
											</Button>
										</div>

										<div className="flex pt-12 justify-center items-center text-center">
											<p> You want to re-enter gmail ? </p>
											<div className="w-[70px]">
												<a
													onClick={() =>
														toggleForm("forgot")
													}
													className={`cursor-pointer text-blue-300 transition-all ease-in-out duration-700 text-sm font-poppins relative hover:underline`}
												>
													Back
												</a>
											</div>
										</div>
									</form>
								</div>
							)}
							{changePass && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] pt-20 px-20 pb-12 bg-primary shadow-md shadow-white bg-opacity-50 rounded-xl rounded-tr-[200px] mr-10 backdrop-blur-md`}
								>
									<div className="absolute w-[400px] h-[70px] -top-[160px] z-40 -left-[170px] transform scale-x-[-1]">
										<img src={gif} />
									</div>
									<h2 className="text-center pb-12 text-3xl font-poppins text-white mb-6">
									Reset password
									</h2>
									<form
										className="space-y-6"
										onSubmit={handleChangePassSubmit}
										noValidate
									>
										{["New password", "Re-enter password"].map(
											(placeholder, index) => (
												<div
													key={index}
													className="relative pl-24"
												>
													<input
														type="password"
														name={
															placeholder ===
															"New password"
																? "newPass"
																: "rePass"
														} // Chỉnh sửa name để khớp với changePassData
														value={
															changePassData[
																placeholder ===
																"New password"
																	? "newPass"
																	: "rePass"
															]
														}
														onChange={
															handleInputChangePass
														}
														className="w-full p-2 text-white bg-transparent border-b-2 border-white focus:outline-none peer"
														required
													/>
													<label
														className={`absolute -left-24 top-6 text-gray-400 text-base peer-focus:-top-3
														peer-focus:left-0 peer-focus:text-sm transition-all duration-300 ml-12 ${
														signUpData[
															placeholder as keyof typeof signUpData
														]
															? "-top-3 text-sm"
															: ""
													}`}
													>
														{placeholder
															.charAt(0)
															.toUpperCase() +
															placeholder.slice(
																1
															)}
													</label>
												</div>
											)
										)}

										<div className="pt-2 relative flex justify-center">
											<Button
												type="submit"
												className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-[300px] lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-xl
												before:ease relative h-12 w-40 overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-80"
											>
												{isPending ? (
													<LoadingSpinner />
												) : (
													<div>
														C
														<span className="lowercase">
															onfirm
														</span>
													</div>
												)}
											</Button>
										</div>
										<div className="flex pt-12 justify-center items-center text-center">
											<p>Don't have an account yet?</p>
											<div className="w-[70px]">
												<a
													onClick={() =>
														toggleForm("signIn")
													}
													className={`cursor-pointer text-blue-300 transition-all ease-in-out duration-700 text-sm font-poppins relative hover:underline`}
												>
													Sign In
												</a>
											</div>
										</div>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="xl:hidden">
				<LoginRepon />
			</div>
		</div>
	);
};

export default LoginPage;
