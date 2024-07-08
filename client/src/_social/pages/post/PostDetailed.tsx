import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import placeholder_img from "@/assets/social/placeholder/placeholder.png";
import { formatPostDate } from "@/utils/date";
import { BiRepost } from "react-icons/bi";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegBookmark, FaRegHeart, FaTrash } from "react-icons/fa";

const PostDetailed = () => {

	const [comment, setComment] = useState("");

    const navigate = useNavigate();

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

    const { mutate: deletePost, isPending: isDeleting} = useMutation({
        mutationFn: async () => {
            try {
                const res = await fetch(`/api/posts/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await res.json();

                if(!res.ok){
                    throw new Error(data.error || "Something went wrong");
                }

                return data;
            }
            catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Post deleted successfully");
            handleDeleteInDetailed();
            // invalidate the query to refetch the data
            queryClient.invalidateQueries({queryKey: ["postDetailed"]});
        }
    });

    const { mutate: commentPost, isPending: isCommenting} = useMutation({
        mutationFn: async () => {
            try {
                const res = await fetch(`/api/posts/comment/${postDetailed._id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({text: comment}),
                });

                const data = await res.json();

            if(!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }

                return data;

            } catch {
                throw new Error(error);
            }
        },
        onSuccess: (updatedComments) => {
            toast.success("Comment posted successfully");
            setComment("");

            //invalidate the query to refetch the data
            // This is not the best way to do it, but it works. Bc it will refetch all posts
            // do it for me
            queryClient.invalidateQueries({queryKey: ["postDetailed"]});

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
	const isMyPost = authUser._id === postDetailed.user._id;

	
    const handleLikePost = () => {
		if(isLiking) return;
		likePost();
	};

    const handleDeletePost = () => {
        deletePost();
    };

	const handlePostComment = (e) => {
		e.preventDefault();
		if(isCommenting) return;
		commentPost();
	};

    const handleIconClick = () => {
        navigate('/social');
    };
    const handleDeleteInDetailed = () => {
        navigate('/social');
    }

	const isLiked = postDetailed.likes.includes(authUser._id);

    return (
        <>
            <div className='flex-[4_4_0] md:mx-7 mx-0 min-h-screen bg-black border-gray-800 font-poppins'>
                <div className="mt-10 border border-gray-900 bg-gray-600 bg-opacity-15 rounded-2xl p-3">
                    <IoMdArrowRoundBack
                        className='w-6 h-6 cursor-pointer text-slate-500 hover:text-white mt-2 mb-4'
                        onClick={handleIconClick}
                    />
                    <div className="flex">
                        <div className='avatar'>
                            <Link to={`/social/profile/${postDetailed?.user?.username}`} 
                                className='w-12 h-12 rounded-full overflow-hidden'>
                                <img src={postDetailed?.user?.profileImg || placeholder_img} />
                            </Link>
                        </div>
                        <div className="ml-5">
                            <div className="font-bold text-[17px]">
                                {postDetailed?.user?.username}
                            </div>
                            <div className="font-normal text-[14px] text-slate-500">
                                {formattedDate}
                            </div>
                        </div>
                        {isMyPost && (
                            <span className='flex justify-end flex-1 mr-3 mt-2'>
                                {!isDeleting && (
                                    <FaTrash 
                                        className='cursor-pointer hover:text-red-500 w-4 h-4' 
                                        onClick={handleDeletePost} 
                                    />
                                )}
                                {isDeleting && (
                                    <LoadingSpinner size="sm"/>
                                )}
                            </span>
                        )}

                    </div>
                    <div className='flex flex-col gap-3 overflow-hidden mt-5'>
                        <span>{postDetailed.text}</span>
                        {postDetailed.img && (
                            <img
                                src={postDetailed.img}
                                className='h-80 object-contain rounded-lg border border-gray-700'
                                alt=''
                            />
                        )}
                    </div>

                    <div className="flex mt-4 space-x-16 w-full justify-evenly">
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
                        <div className='flex justify-end gap-2 items-center relative group'>
                            <FaRegBookmark className='w-6 h-6 text-slate-500 cursor-pointer group-hover:text-yellow-300' />
                        </div>
                    </div>
                    <form
                        className='gap-2 items-center mt-4 border-t border-gray-600 pt-2 space-y-5'
                        onSubmit={handlePostComment}
                    >
                        <textarea
                            className='mt-4 bg-gray-600 bg-opacity-15 textarea w-full p-2 rounded-2xl text-md resize-none border focus:outline-none border-gray-800'
                            placeholder='Add a comment...'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button className='btn btn-primary rounded-full btn-sm text-white px-4'>
                            {isCommenting ? (
                                <LoadingSpinner size='sm' />
                            ) : (
                                    "Post"
                                )}
                        </button>
                    </form>
                    <hr className="border-t border-slate-500 my-6 border-opacity-25" />
                    {/* Comments */}
                    {<div className={`flex flex-col gap-3 max-h-[800px] overflow-auto mt-2 rounded-2xl p-3`}>
                        {postDetailed.comments.length === 0 && (
                            <p className='text-sm text-slate-500'>
                                No comments yet 🤔 Be the first one 😉
                            </p>
                        )}
                        {postDetailed.comments.map((comment) => (
                            <div key={comment._id} className='flex gap-2 items-start bg-gray-600 bg-opacity-15 rounded-2xl p-3'>
                                <div className='avatar'>
                                    <div className='w-10 mt-2 rounded-full'>
                                        <img
                                            src={comment.user.profileImg || placeholder_img}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center gap-1'>
                                        <span className='font-bold'>{comment.user.fullName}</span>
                                        <span className='text-gray-700 text-sm'>
                                            @{comment.user.username}
                                        </span>
                                    </div>
                                    <div className='text-[18px]'>{comment.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </>
    )
}

export default PostDetailed
