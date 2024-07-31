import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeleteUserProfile = ({userId}) => {
    const queryClient = useQueryClient();
    const { mutateAsync: deleteProfile, isPending: isDeletingProfile } = useMutation({
		mutationFn: async (formData) => {
			try {
				const res = await fetch(`/api/user/delete/confirm/${userId}`, {
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
			toast.success("Profile deleted successfully");
			Promise.all([
				queryClient.invalidateQueries({queryKey: ["authUser"]}),
				queryClient.invalidateQueries({queryKey: ["userProfile"]}),
			]);
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
    return {deleteProfile, isDeletingProfile}
}

export default useDeleteUserProfile;