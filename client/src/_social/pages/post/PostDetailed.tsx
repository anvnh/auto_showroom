import { useState, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom"
import placeholder_img from "@/assets/social/placeholder/placeholder.png";
import { formatPostDate } from "@/utils/date";
import { BiRepost } from "react-icons/bi";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { FaRegHeart } from "react-icons/fa";

const PostDetailed = () => {

	const {id} = useParams();
    const {username} = useParams();
	const queryClient = useQueryClient();
	const {data:authUser} = useQuery({queryKey: ["authUser"]});

    const { data: postDetailed, isLoading, refetch, isRefetching, } = useQuery({
        queryKey: ["postDetailed"],
        queryFn: async () => {
            try {
                const response = await fetch(`/api/posts/${username}/${id}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong!");
                }
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    });
    const { mutate: likePost, isPending: isLiking} = useMutation({
        mutationFn: async () => {
            try{
                const res = await fetch(`/api/posts/like/${postDetailed._id}`, {
                    method: "POST",
                });
                const data = await res.json();

            if(!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                return data;
            } catch(error) {
                throw new Error(error.message);
            }
        },
        onSuccess : (updatedLikes) => {
			// toast.success("Post liked successfully");
			//invalidate the query to refetch the data
			// This is not the best way to do it, but it works. Bc it will refetch all posts
			// queryClient.invalidateQueries({queryKey: ["posts"]});
			// instead, we can update the post object in the cache
			queryClient.setQueryData(["postDetailed"], (oldData) => {
                return {
                    ...oldData,
                    likes: updatedLikes,
                };
			});
        },        
        onError: (error) => {
            toast.error(error.message);
        }
	})


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!postDetailed) {
        return <div>No post data available</div>;
    }

    const formattedDate = formatPostDate(postDetailed.createdAt || new Date());

	
    const handleLikePost = () => {
		if(isLiking) return;
		likePost();
	};

	const isLiked = postDetailed.likes.includes(authUser._id);

    return (
        <>
            <div className='flex-[4_4_0] md:mx-7 mx-0 min-h-screen bg-black border-gray-800 font-poppins'>
                <div className="mt-10 border border-red-500 rounded-2xl">
                    <div className="flex">
                        <div className='avatar'>
                            <Link to={`/social/profile/${postDetailed?.user?.username}`} 
                                className='w-12 h-12 rounded-full overflow-hidden'>
                                <img src={postDetailed?.user?.profileImg || placeholder_img} />
                            </Link>
                        </div>
                        <div className="ml-5">
                            <div className="font-bold text-xl">
                                {postDetailed?.user?.username}
                            </div>
                            <div className="font-normal">
                                {formattedDate}
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <img src={postDetailed?.img} alt="post" />
                    </div>

                    <div className="flex mt-4 space-x-6">
                        <div className='flex gap-1 items-center group cursor-pointer onClick={}'>
                            <BiRepost className='w-9 h-9  text-slate-500 group-hover:text-green-500' />
                            <span className='text-sm text-slate-500 group-hover:text-green-500'>0</span>
                        </div>
                        <div className='flex items-center group cursor-pointer' onClick={handleLikePost}>
                            {isLiking && <LoadingSpinner size='sm' />}
                            {!isLiked && !isLiking && (
                                <FaRegHeart 
                                    className='w-6 h-6 cursor-pointer text-slate-500 group-hover:text-pink-500' 
                                />
                            )}
                            {isLiked && !isLiking && <FaRegHeart className='w-6 h-6 cursor-pointer text-pink-500 ' />}

                            <span
                                className={`text-sm group-hover:text-pink-500 ${
                                isLiked ? "text-pink-500" : "text-slate-500"
                                }`}
                            >
                                &nbsp; {postDetailed.likes.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetailed
