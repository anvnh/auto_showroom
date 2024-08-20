import useDeleteUserProfile from "@/hooks/useDeleteUserProfile";
import useUpdateUserProfile from "@/hooks/useUpdateUserProfile";
import { useEffect, useState } from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const EditProfileModal = ({ authUser }) => {
	const [formData, setFormData] = useState({
		fullName: "",
		username: "",
		email: "",
		bio: "",
		link: "",
		newPassword: "",
		currentPassword: "",
	});

	const { updateProfile, isUpdatingProfile } = useUpdateUserProfile();
	const { deleteProfile, isDeletingProfile } = useDeleteUserProfile({
		userId: authUser._id,
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (authUser) {
			setFormData({
				fullName: authUser.fullName,
				username: authUser.username,
				email: authUser.email,
				bio: authUser.bio,
				link: authUser.link,
				newPassword: "",
				currentPassword: "",
			});
		}
	}, [authUser]);

	return (
		<section className="justify-center items-center flex space-x-3 md:pt-0 pt-10">
			<Button
                className="w-[130px] rounded-full h-[35px] mt-4 font-bold hover:bg-white hover:bg-opacity-40
                hover:shadow-lg	btn bg-white text-black hover:opacity-90 btn-sm btn-primary px-4
                before:ease relative overflow-hidden border-gray-900 border shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-5 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-900 hover:before:-translate-x-32 "
				onClick={() => {
					document.getElementById("edit_profile_modal").showModal();
				}}
				variant="secondary"
			>
				Edit Profile
			</Button>
			<div>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button
							variant="secondary"
                            className="w-[130px] rounded-full h-[35px] mt-4 font-bold hover:bg-red-500 hover:shadow-lg
                            btn bg-white text-black hover:opacity-90 btn-sm btn-primary px-4 before:ease relative overflow-hidden border-gray-900 border shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-5 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-900 hover:before:-translate-x-32 "
						>
							Delete account
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent className="z-50">
						<AlertDialogHeader>
							<AlertDialogTitle>
								Are you absolutely sure?
							</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will
								permanently delete your account and remove your
								data from our servers.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<Link to="/social/account/confirmation">
								<AlertDialogAction className="bg-white text-black hover:bg-red-500">
									Continue
								</AlertDialogAction>
							</Link>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
			<dialog id="edit_profile_modal" className="modal">
				<div className="modal-box border rounded-md border-gray-700 shadow-md">
					<h3 className="font-bold text-lg my-3">Update Profile</h3>
					<form
						className="flex flex-col gap-4 z-20"
						onSubmit={(e) => {
							e.preventDefault();
							updateProfile(formData);
						}}
					>
						<div className="flex flex-wrap gap-2">
							<input
								type="text"
								placeholder="Full Name"
								className="flex-1 input border border-gray-700 rounded p-2 input-md"
								value={formData.fullName}
								name="fullName"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								placeholder="Username"
								className="flex-1 input border border-gray-700 rounded p-2 input-md"
								value={formData.username}
								name="username"
								onChange={handleInputChange}
								disabled
							/>
						</div>
						<div className="flex flex-wrap gap-2">
							<input
								type="email"
								placeholder="Email"
								className="flex-1 input border border-gray-700 rounded p-2 input-md"
								value={formData.email}
								name="email"
								onChange={handleInputChange}
							/>
							<textarea
								placeholder="Bio"
								className="flex-1 input border border-gray-700 rounded p-2 input-md"
								value={formData.bio}
								name="bio"
								onChange={handleInputChange}
							/>
						</div>
						<div className="flex flex-wrap gap-2">
							<input
								type="password"
								placeholder="Current Password"
								className="flex-1 input border border-gray-700 rounded p-2 input-md"
								value={formData.currentPassword}
								name="currentPassword"
								onChange={handleInputChange}
							/>
							<input
								type="password"
								placeholder="New Password"
								className="flex-1 input border border-gray-700 rounded p-2 input-md"
								value={formData.newPassword}
								name="newPassword"
								onChange={handleInputChange}
							/>
						</div>
						<input
							type="text"
							placeholder="Link"
							className="flex-1 input border border-gray-700 rounded p-2 input-md"
							value={formData.link}
							name="link"
							onChange={handleInputChange}
						/>

						<button className="btn btn-primary rounded-full btn-sm text-white">
							{isUpdatingProfile ? "Updating..." : "Update"}
						</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button className="outline-none">Close</button>
				</form>
			</dialog>
		</section>
	);
};
export default EditProfileModal;
