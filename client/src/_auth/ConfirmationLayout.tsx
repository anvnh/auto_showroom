import { Button } from "@/components/ui/button";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import useDeleteUserProfile from "@/hooks/useDeleteUserProfile";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ConfirmationLayout = () => {
	const [value, setValue] = useState("");

	const queryClient = useQueryClient();

	const { data: authUser, isLoading } = useQuery({
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if (data.error) return null;
				if (!res.ok) {
					throw new Error(data.message || "Something went wrong");
				}
				// console.log("authUser is here: ", data);
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		retry: false,
	});

	const { mutate: deleteAccount, isPending: isDeleting } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch(
					`/api/user/delete/confirm/${authUser._id}`,
					{
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Account deleted successfully");
			queryClient.invalidateQueries({ queryKey: ["authUser"] }),
				queryClient.invalidateQueries({ queryKey: ["userProfile"] });
		},
	});

	const {
		mutate: sendVerificationMail,
		isPending: isSendingMail,
		data: otpCode,
	} = useMutation({
		mutationFn: async (email) => {
			try {
				const res = await fetch(`/api/auth/confirmationEmail`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(email),
				});

				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Sending email successfully");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const handleDeleteAccount = () => {
		deleteAccount();
	};

	return (
		<section className="w-full flex ">
			<div className="w-full flex flex-col justify-center items-center">
				<div className="bg-gray-900 backdrop-blur-xl bg-opacity-80 shadow-md shadow-white flex flex-col justify-center items-center p-12 rounded-xl">
					<div className="mb-5">
						<h1 className="text-xl font-bold text-center">
							Please enter the 6-digit code sent to your email
						</h1>
					</div>
					<div className="justify-start">
						<InputOTP
							maxLength={6}
							value={value}
							onChange={(value) => setValue(value)}
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
					<div className="flex pt-12 gap-5">
						<Button
							variant="secondary"
							onClick={() =>
								sendVerificationMail({ email: authUser.email })
							}
							className="items-start flex w-[130px] bg-white text-black hover:bg-gray-600 rounded-3xl font-bold
                              justify-centertransition-all ease-in-out text-md font-poppins duration-500 md:text-base text-center text-xl
							  before:ease relative overflow-hidden border-gray-700 border shadow-2xl hover:text-white before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-gray-500 before:opacity-70 before:duration-700 hover:shadow-white  hover:before:-translate-x-80"
						>
							{isSendingMail
								? "Sending email..."
								: "Send email"}
						</Button>
						<Button
							variant="secondary"
							className="w-[130px] rounded-3xl font-bold bg-white text-black hover:bg-green-300
                            flex items-center justify-centertransition-all ease-in-out text-md font-poppins duration-500 md:text-base text-center text-xl
						    before:ease relative overflow-hidden border-gray-700 border shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-12 before:bg-gray-500 before:opacity-100 before:duration-700 hover:shadow-white  hover:before:-translate-x-40
                    "
							onClick={() => {
								if (value === otpCode.otp) {
									toast.success(
										"Your account will be deleted in a few seconds"
									);
									handleDeleteAccount();
								} else {
									toast.error(
										"Invalid code. Please try again"
									);
								}
							}}
						>
							Confirm
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ConfirmationLayout;
