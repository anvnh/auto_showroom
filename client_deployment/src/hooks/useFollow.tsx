import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useFollow = () => {
    const queryClient = useQueryClient();

    const{mutate: follow, isPending } = useMutation({
        mutationFn: async (userId) => {
            try {
                const res = await fetch(`https://auto-showroom-backend.onrender.com/api/user/follow/${userId}`, {
                    method: 'POST',
                });

                const data = await res.json();
                if(!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                return data;
            }
            catch(error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            Promise.all([
                queryClient.invalidateQueries({queryKey: ['suggestedUsers']}),
                queryClient.invalidateQueries({queryKey: ['authUser']}),
            ])
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
    return {follow, isPending};
};

export default useFollow;