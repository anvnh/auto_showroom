import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { logo, bgLG } from "../assets";
const LoginForm: React.FC = () => {
	const [showSignUpForm, setShowSignUpForm] = useState(false);
	const [showSignInForm, setShowSignInForm] = useState(false);
	const [activeForm, setActiveForm] = useState<string>("");

	// State for Sign Up form inputs
	const [signUpData, setSignUpData] = useState({
		username: "",
		fullName: "",
		email: "",
		password: "",
	});

	// State for Sign In form inputs
	const [signInData, setSignInData] = useState({
		username: "",
		password: "",
	});

	// Initialize AOS on component mount
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

	const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Validation and submission logic for Sign Up
		console.log("Sign Up form submitted with data:", signUpData);
		// Reset form fields after submission
		resetFormInputs();
	};

	const handleSignInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Validation and submission logic for Sign In
		console.log("Sign In form submitted with data:", signInData);
		// Reset form fields after submission
		resetFormInputs();
	};

	const resetFormInputs = () => {
		setSignUpData({
			username: "",
			fullName: "",
			email: "",
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
					style={{ backgroundImage: `url(${bgLG})` }}
					className="w-full h-[923px] bg-center bg-cover duration-500 "
				>
					<div className="flex items-center min-h-screen col-span-1  md:col-span-2 gap-[200px]">
						{/* Left Section */}
						<div className="absolute top-0 left-0 w-full h-[670px] md:h-[923px] bg-gradient-to-r from-gray-800 to-transparent"></div>
						<div
							data-aos="fade-right"
							className="pl-2 md:pl-[200px] text-center absolute top-24 w-[1000px] h-[300px] rounded-[20px] font-bold"
						>
							<div
								data-aos="fade-right"
								className="justify-center flex"
							>
								<img
									src={logo}
									alt="logo"
									className="md:w-[300px] w-[55px] md:h-[250px] h-[55px] bottom-12 flex relative"
								/>
							</div>
							<h1 className="text-sm md:text-8xl  text-center font-syncopate text-gray-300">
								Wellcome to AAP
							</h1>
						</div>

						{/* Middle Section */}
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

						{/* Right Section */}
						<div
							data-aos="fade-right"
							className="relative flex pr-[200px]"
						>
							{/* Sign Up Form */}
							{showSignUpForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] p-20 bg-black bg-opacity-50 shadow-xl rounded-lg rounded-tr-[200px] rounded-bl-[200px] mr-10 `}
								>
									

									<h2 className="text-center pb-12 text-4xl font-syncopate text-white mb-6">
										Sign Up
									</h2>
									<form
										className="space-y-6"
										onSubmit={handleSignUpSubmit}
										noValidate
									>
										{[
											"username",
											"fullName",
											"email",
											"password",
										].map((placeholder, index) => (
											<div
												key={index}
												className="relative"
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
													className={`absolute left-0 top-2 text-gray-400 text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-200 ${
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

							{/* Sign In Form */}
							{showSignInForm && (
								<div
									data-aos="fade-left"
									className={`relative z-10 w-[500px] p-20 bg-black bg-opacity-50 shadow-xl rounded-lg rounded-tr-[200px] rounded-bl-[200px] mr-10 `}
								>
									
									<h2 className="text-center pb-12 text-4xl font-syncopate text-white mb-6">
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
														className={`absolute left-0 top-2 text-gray-400 text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-200 ${
															signInData[
																placeholder as keyof typeof signInData
															]
																? "-top-3 text-sm text-blue-500"
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



			<div className="block xl:hidden w-full">
				<div className="w-full">
					<div
						style={{ backgroundImage: `url(${bgLG})` }}
						className="w-full h-auto relative bg-cover bg-center"
					>
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800 to-transparent"></div>

						<div className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-4">
							{/* Logo and Welcome Text */}
							<div
								
								className="flex flex-col items-center"
							>
								<img
									src={logo}
									alt="logo"
									className="md:w-[300px] w-[80px] md:h-[200px] h-[70px]"
								/>
								<h1 className="text-xl md:text-8xl text-center font-syncopate text-gray-300 shadow-2xl mt-1">
									Welcome to AAP
								</h1>
							</div>

							{/* Button Section */}
							<div className="w-full max-w-md">
								<div className="flex flex-col items-center space-y-4">
									{showSignUpForm && (
										<div
											
											className="text-center font-syncopate"
										>
											<p>You have an account?</p>
										</div>
									)}
									{showSignInForm && (
										<div
									
											className="text-center font-syncopate"
										>
											<p>You don't have an account?</p>
										</div>
									)}

									<div
										
										className="flex justify-center space-x-4"
									>
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

							{/* Form Section */}
							<div
							
								className="flex justify-center sm:px-12 w-full"
							>
								{/* Sign Up Form */}
								{showSignUpForm && (
									<div
									
										className="w-full p-8 bg-black bg-opacity-50 shadow-xl rounded-lg"
									>
										<form
											className="space-y-6"
											onSubmit={handleSignUpSubmit}
											noValidate
										>
											{[
												"username",
												"fullName",
												"email",
												"password",
											].map((placeholder, index) => (
												<div
													key={index}
													className="relative"
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
														className={`absolute left-0 top-2 text-gray-400 text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-200 ${
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
											))}
											<div className="pt-6">
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

								{/* Sign In Form */}
								{showSignInForm && (
									<div
									
										className="w-full max-w-md p-8 bg-black bg-opacity-50 shadow-xl rounded-lg"
									>
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
															className={`absolute left-0 top-2 text-gray-400 text-base peer-focus:-top-3 peer-focus:text-sm transition-all duration-200 ${
																signInData[
																	placeholder as keyof typeof signInData
																]
																	? "-top-3 text-sm text-blue-500"
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
											<div className="pt-6">
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
			</div>
		</div>
	);
};

export default LoginForm;
