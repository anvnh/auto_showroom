import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { logo, bgSocial, gif, ngoisao } from "@/assets";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";

const LoginRepon = () => {
	const [showSignUpForm, setShowSignUpForm] = useState(false);
	const [showSignInForm, setShowSignInForm] = useState(true);
	const [activeForm, setActiveForm] = useState<string>("");
	const [forgotForm, setForgotForm] = useState(false);
	const [numberForm, setNumberForm] = useState(false);
	const [number, setNumber] = useState("");
	const [changePass, setChangePass] = useState(false);

	const [changePassData, setChangePassData] = useState({
		newPass: "",
		rePass: "",
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
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	const {
		mutate: signup,
		isError,
		error,
	} = useMutation({
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
				console.log(data);
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		onSuccess: () => {
			console.log("ok");
			toast.success("Account created successfully");
		},
	});

	const {
		mutate: sendForgotpassword,
		isPending: isSending,
		data: otpCode,
	} = useMutation({
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

	const handleSubmit = (e) => {
		e.preventDefault(); // page won't reload
		// console.log(signUpData);
		// signup(formData);
		// send verification email
		signup(signUpData);
	};

	const toggleForm = (form: string) => {
		if (form === "signUp") {
			setShowSignUpForm(true);
			setShowSignInForm(false);
			setForgotForm(false);
			setNumberForm(false);
			setChangePass(false);
			setActiveForm("signUp");
		} else if (form === "signIn") {
			setShowSignInForm(true);
			setShowSignUpForm(false);
			setForgotForm(false);
			setNumberForm(false);
			setChangePass(false);
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
			setChangePass(false);
			// console.log(emaildata);
			setNumberForm(true);
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
			console.log(data);
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
			resetFormInputs();
		} catch (error) {
			toast.error(error.message);
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
		setChangePassData({
			newPass: "",
			rePass: "",
		});
	};
	const handleForgotSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (emailPattern.test(emaildata.email)) {
			toggleForm("number");
			sendForgotpassword(emaildata.email);
		} else {
			toast.error("Invalid email address");
		}
	};
	const handleNumberSubmit = (e) => {
		e.preventDefault();
		if (number === otpCode.otp) {
			console.log("OK");
			toggleForm("changepass");
		}
	};
	const handleChangePassSubmit = (e) => {
		e.preventDefault();
		console.log(changePassData); // In ra dữ liệu đã nhập

		// khi đổi mật khẩu thành công thì,
		// toggleForm("signIn");
	};

	// Hàm cập nhật state khi người dùng nhập dữ liệu
	const handleInputChangePass = (e) => {
		const { name, value } = e.target;
		setChangePassData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	return (
		<div>
			<div className="w-full h-auto relative bg-cover bg-center pt-12 pb-12">
				<div className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-4">
					<div className="flex flex-col items-center pb-6">
						<Link to="http://localhost:3000/">
							<img
								data-aos="fade-down"
								src={logo}
								alt="logo"
								className="md:w-[300px] sm:w-[200px] w-[100px] h-auto"
							/>
						</Link>
						<h1
							data-aos="fade-down"
							className="text-3xl md:text-8xl text-center font-poppins sm:text-5xl font-bold text-gray-300 animate-pulse duration-500 transition-all ease-in-out shadow-2xl mt-1"
						>
							Welcome to Social AAP
						</h1>
					</div>
					{/*
                            ----------------- */}
					<div className="flex justify-center sm:px-12 w-full">
						{showSignUpForm && (
							<div className="w-full max-w-xl p-8 bg-primary backdrop-blur-md bg-opacity-50 shadow-xl rounded-lg">
								<h2 className="text-center pb-12 text-2xl sm:text-3xl font-poppins text-white mb-6 lg:text-5xl">
									Sign Up
								</h2>
								<form
									data-aos="fade-up"
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
										<div key={index} className="relative">
											<input
												placeholder={
													placeholder
														.charAt(0)
														.toUpperCase() +
													placeholder.slice(1)
												}
												type={
													placeholder === "password"
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
										</div>
									))}

									<div className="pt-10 relative flex justify-center">
										<Button
											type="submit"
											className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-72 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-md
										before:ease relative h-12 w-full overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-44
										"
										>
											C
											<span className="lowercase">
												reate Account
											</span>
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
										<p>You have an account</p>
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
							<div className="w-full max-w-xl p-8 bg-primary backdrop-blur-md bg-opacity-50 shadow-xl rounded-lg">
								<h2 className="text-center pb-12 text-2xl sm:text-3xl font-poppins text-white mb-6 lg:text-5xl">
									Sign In
								</h2>
								<form
									data-aos="fade-up"
									className="space-y-6"
									onSubmit={handleSignInSubmit}
									noValidate
								>
									{["username", "password"].map(
										(placeholder, index) => (
											<div
												key={index}
												className="relative"
											>
												<input
													placeholder={
														placeholder
															.charAt(0)
															.toUpperCase() +
														placeholder.slice(1)
													}
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
											</div>
										)
									)}
									<div className="pt-0 pb-1 w-full justify-center z-10 items-center flex gap-5">
										<a
											className="w-full h-5 cursor-pointer flex justify-end  text-blue-300 transition-all ease-in-out duration-700 text-sm font-poppins z-50 relative hover:underline "
											onClick={() => toggleForm("forgot")}
										>
											Recovery Password
										</a>
									</div>
									<div className="pt-2 relative flex justify-center">
										<Button
											type="submit"
											className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-72 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-md
												before:ease relative h-12 w-full overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-44
												"
										>
											S
											<span className="lowercase">
												ign In
											</span>
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
							<div className="w-full max-w-xl p-8 bg-primary backdrop-blur-md bg-opacity-50 shadow-xl rounded-lg">
								<h2 className="text-center pb-12 text-2xl sm:text-3xl font-poppins text-white mb-6 lg:text-5xl">
									Forgot password
								</h2>
								<form
									data-aos="fade-up"
									className="space-y-6"
									noValidate
									onSubmit={handleForgotSubmit}
								>
									<div className="relative px-6">
										<input
											placeholder="Input your Gmail"
											type="email"
											name="email"
											value={emaildata.email}
											onChange={(e) =>
												setEmaildata({
													email: e.target.value,
												})
											}
											className="w-full p-2 text-white bg-transparent border-b-2 border-white focus:outline-none peer"
											required
										/>
									</div>

									<div className="pt-12 relative flex justify-center">
										<Button
											type="submit"
											className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-72 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-md
											before:ease relative h-12 w-full overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-96
											"
											// onClick={() => toggleForm("number")}
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
										<p>You remembered the password</p>
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
							<div className="w-full max-w-xl p-8 bg-primary backdrop-blur-md bg-opacity-50 shadow-xl rounded-lg">
								<h2 className="text-center pb-12 text-2xl sm:text-3xl font-poppins text-white mb-6 lg:text-5xl">
									Forgot password
								</h2>
								<form
									onSubmit={handleNumberSubmit}
									className="space-y-6"
								>
									<div data-aos="fade-up" className="mb-5">
										<h1 className="text-xl font-bold text-center">
											Please enter the 6-digit code sent
											to your email
										</h1>
									</div>
									<div
										data-aos="fade-up"
										className="justify-center flex"
									>
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
									<div
										data-aos="fade-up"
										className="pt-12 relative flex justify-center"
									>
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

									<div
										data-aos="fade-up"
										className="flex pt-12 justify-center items-center text-center"
									>
										<p>You want to re-enter gmail ? </p>
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
							<div className="w-full max-w-xl p-8 bg-primary backdrop-blur-md bg-opacity-50 shadow-xl rounded-lg pb-12">
								<h2 className="text-center pb-12 text-2xl sm:text-3xl font-poppins text-white mb-6 lg:text-5xl">
									Reset password
								</h2>
								<form
									data-aos="fade-up"
									className="space-y-6"
									onSubmit={handleChangePassSubmit}
									noValidate
								>
									{["New password", "Re-enter password"].map(
										(placeholder, index) => (
											<div
												key={index}
												className="relative"
											>
												<input
													placeholder={placeholder}
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
											</div>
										)
									)}

									<div className="pt-2 relative flex justify-center">
										<Button
											type="submit"
											className="detail-button bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:w-72 lg:h-[50px] justify-center flex hover:bg-black transition-all duration-300 ease-in-out hover:text-white  font-bold font-poppins md:text-base rounded-xl text-center text-md
											before:ease relative h-12 w-full overflow-hidden border-gray-600 border shadow-2xl  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500  hover:before:-translate-x-44
												"
										>
											C
											<span className="lowercase">
												onfirm
											</span>
										</Button>
									</div>
									<div className="flex pt-12 justify-center items-center text-center">
										<p>You remember the old password</p>
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
	);
};

export default LoginRepon;
