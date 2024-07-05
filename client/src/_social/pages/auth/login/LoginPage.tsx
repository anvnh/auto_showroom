import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { logo, bgSocial, gifSocial } from "@/assets";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
	const [showSignUpForm, setShowSignUpForm] = useState(false);
	const [showSignInForm, setShowSignInForm] = useState(false);
	const [activeForm, setActiveForm] = useState<string>("");

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

	const toggleForm = (form: string) => {
		if (form === "signUp") {
			setShowSignUpForm(true);
			setShowSignInForm(false);
			setActiveForm("signUp");
		} else if (form === "signIn") {
			setShowSignInForm(true);
			setShowSignUpForm(false);
			setActiveForm("signIn");
		} else {
			setShowSignUpForm(false);
			setShowSignInForm(false);
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

	const handleSignUpSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signUpData),
			});

			const data = await res.json();
			if (!res.ok)
				throw new Error(data.error || "Failed to create account.");
			console.log(data);
			toast.success("Account created successfully");
			resetFormInputs();
		} catch (error) {
			toast.error(error.message);
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
	};

	return (
		<div className="w-full">
			<div className="hidden xl:block">
				<div
					style={{ backgroundImage: `url(${bgSocial})` }}
					className="w-full h-[923px] bg-center bg-cover duration-500 "
				>
					<div className="flex items-center min-h-screen col-span-1  md:col-span-2 gap-[200px]">
						<div className="absolute top-0 left-0 w-full h-[670px] md:h-[923px] bg-gradient-to-r from-gray-800 to-transparent"></div>
						<div
							data-aos="fade-right"
							className="pl-2 md:pl-[10px] text-center absolute top-24 w-[1200px] h-[300px] rounded-[20px] font-bold"
						>
							<div
								data-aos="fade-right"
								className="justify-center flex"
							>
							
								<Link to="http://localhost:3000/">
								<img
									src={logo}
									alt="logo"
									className="md:w-[300px] w-[55px] md:h-[250px] h-[55px] bottom-12 flex relative"
								/>
								</Link>
							</div>
							<h1 className="text-sm md:text-7xl  text-center font-syncopate text-gray-300">
								Welcome <br /> to Social AAP
							</h1>
						</div>

						<div className="pl-[250px] top-48 pt-16 relative w-[900px] h-[300px] rounded-[20px]">
							<div className="absolute">
								{showSignUpForm && (
									<div
										data-aos="fade-right"
										className="text-center relative pl-[150px] text-2xl font-syncopate"
									>
										<p>You have an account ?</p>
									</div>
								)}

								{showSignInForm && (
									<div
										data-aos="fade-right"
										className="text-center relative pl-[50px] text-2xl font-syncopate"
									>
										<p>You don't have an account ?</p>
									</div>
								)}
							</div>

							<div
								data-aos="fade-left"
								className="pt-0 justify-center items-center flex"
							>
								<button
									type="button"
									onClick={() => toggleForm("signUp")}
									className={`font-semibold w-[160px] h-[50px] text-white hover:bg-gray-600  transition-all ease-in-out duration-700 text-xl hover:rounded-3xl border-[1px] font-syncopate top-16 relative ${
										activeForm === "signUp"
											? "bg-gray-900 text-black rounded-3xl border-[1px]"
											: ""
									}`}
								>
									Sign Up
								</button>
								<button
									type="button"
									onClick={() => toggleForm("signIn")}
									className={`font-semibold w-[160px] h-[50px] text-white hover:bg-gray-600 transition-all ease-in-out duration-700 text-xl hover:rounded-3xl border-[1px] font-syncopate top-16 ml-4 relative ${
										activeForm === "signIn"
											? "bg-gray-900 text-black rounded-3xl border-[1px]"
											: ""
									}`}
								>
									Sign In
								</button>
							</div>
						</div>

						<div
							data-aos="fade-right"
							className="relative flex pr-[200px]"
						>
							{showSignUpForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] p-20 bg-black bg-opacity-50 shadow-xl rounded-lg rounded-tr-[200px] rounded-bl-[200px] mr-10 `}
								>
									<div className="absolute w-[400px] h-[70px] -top-[220px] z-40 -left-[170px] transform scale-x-[-1]">
									<img src={gifSocial}  />
									</div>
									<h2 className="text-center pb-12 text-4xl font-syncopate text-white mb-6">
										Sign Up
									</h2>
									<form
										className="space-y-6"
										onSubmit={handleSignUpSubmit}
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
													peer-focus:left-12	peer-focus:text-sm transition-all duration-300 ${
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
										<div className="pt-12 relative">
											<button
												type="submit"
												className="w-full h-[50px] p-2 text-white bg-gray-500 hover:bg-gray-700 transition-all ease-in-out rounded-md font-syncopate duration-500"
											>
												Create Account
											</button>
										</div>
									</form>
								</div>
							)}

							{showSignInForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] p-20 bg-black bg-opacity-50 shadow-xl rounded-lg rounded-tr-[200px] rounded-bl-[200px] mr-10 `}
								>
										<div className="absolute w-[400px] h-[70px] -top-[220px] z-40 -left-[170px] transform scale-x-[-1]">
										<img src={gifSocial}  />
									</div>
									<h2 className="text-center pb-12 text-4xl font-syncopate text-white mb-6">
										Sign In
									</h2>
									<form
										className="space-y-6 pl-12"
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
													peer-focus:left-0	peer-focus:text-sm transition-all duration-300 ${
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
										<div className="pt-12 relative">
											<button
												type="submit"
												className="w-full h-[50px] p-2 text-white bg-gray-500 hover:bg-gray-700 transition-all ease-in-out rounded-md font-syncopate duration-500"
											>
												Sign In
											</button>
										</div>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="xl:hidden">
				<div
					style={{ backgroundImage: `url(${bgSocial})` }}
					className="w-full h-auto relative bg-cover bg-center"
				>
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800 to-transparent"></div>

					<div className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-4">
						<div className="flex flex-col items-center">
							
							<Link to="http://localhost:3000/">
							<img
								src={logo}
								alt="logo"
								className="md:w-[300px] w-[80px] md:h-[200px] h-[70px]"
							/>
								</Link>
							<h1 className="text-xl md:text-8xl text-center font-syncopate text-gray-300 shadow-2xl mt-1">
								Welcome to Social AAP
							</h1>
						</div>

						{/* Button Section */}
						<div className="w-full max-w-md">
							<div className="flex flex-col items-center space-y-4">
								{showSignUpForm && (
									<div className="text-center font-syncopate">
										<p>You have an account?</p>
									</div>
								)}
								{showSignInForm && (
									<div className="text-center font-syncopate">
										<p>You don't have an account?</p>
									</div>
								)}

								<div className="flex justify-center space-x-4">
									<button
										type="button"
										onClick={() => toggleForm("signUp")}
										className={`font-semibold w-[160px] h-[50px] text-white hover:bg-gray-600 transition-all ease-in-out duration-700 text-xl rounded-3xl border-[1px] font-syncopate ${
											activeForm === "signUp"
												? "bg-gray-900 text-black border-[1px]"
												: ""
										}`}
									>
										Sign Up
									</button>
									<button
										type="button"
										onClick={() => toggleForm("signIn")}
										className={`font-semibold w-[160px] h-[50px] text-white hover:bg-gray-600 transition-all ease-in-out duration-700 text-xl rounded-3xl border-[1px] font-syncopate ${
											activeForm === "signIn"
												? "bg-gray-900 text-black border-[1px]"
												: ""
										}`}
									>
										Sign In
									</button>
								</div>
							</div>
						</div>
						{/* 
                            ----------------- */}
						<div className="flex justify-center sm:px-12 w-full">
							{showSignUpForm && (
								<div className="w-full p-8 bg-black bg-opacity-50 shadow-xl rounded-lg">
									<form
										className="space-y-6"
										onSubmit={handleSignUpSubmit}
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
										<div className="pt-6 ">
											<button
												type="submit"
												className="w-full h-[50px] p-2 text-white bg-gray-500 hover:bg-gray-700 transition-all ease-in-out rounded-md font-syncopate duration-500"
											>
												Create Account
											</button>
										</div>
									</form>
								</div>
							)}
							{showSignInForm && (
								<div className="w-full max-w-md p-8 bg-black bg-opacity-50 shadow-xl rounded-lg">
									<form
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
										<div className="pt-6">
											<button
												type="submit"
												className="w-full h-[50px] p-2 text-white bg-gray-500 hover:bg-gray-700 transition-all ease-in-out rounded-md font-syncopate duration-500"
											>
												Log in
											</button>
										</div>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
