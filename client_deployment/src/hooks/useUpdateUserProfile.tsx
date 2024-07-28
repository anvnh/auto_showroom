import { QueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUpdateUserProfile = () => {
    const queryClient = new QueryClient();
    const { mutateAsync: updateProfile, isPending: isUpdatingProfile } = useMutation({
		mutationFn: async (formData) => {
			try {
				const res = await fetch(`https://auto-showroom-backend.onrender.com/api/user/update`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				})

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
			toast.success("Profile updated successfully");
			Promise.all([
				queryClient.invalidateQueries(["authUser"]),
				queryClient.invalidateQueries(["userProfile"]),
			]);
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
    return {updateProfile, isUpdatingProfile}
}

export default useUpdateUserProfile;
