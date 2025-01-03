import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import placeholder_img from "../../../../assets/social/placeholder/placeholder.png";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import { formatPostDate } from "@/utils/date";
import logoMain from '@/assets/logo/logoMain.png'

const Post = ({ post }) => {
	const [comment, setComment] = useState("");
	const {data:authUser} = useQuery({queryKey: ["authUser"]});

	const queryClient = useQueryClient();

	const postOwner = post.user;

    const postId = post._id;

	const isLiked = post.likes.includes(authUser._id);

	const isMyPost = authUser._id === post.user._id;

	const formattedDate = formatPostDate(post.createdAt);

    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    
    const [loadingRepostId, setLoadingRepostId] = useState(null);

    const {mutate: repostPost, isPending: isReposting} = useMutation({
        mutationFn: async () => {
            try {
                const res = await fetch(`/api/posts/repost/${postId}`, {
                    method: "POST",
                });
                const data = await res.json();

                if(!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Repost successfully");
            // invalidate the query to refetch the data
            queryClient.invalidateQueries({queryKey: ["posts"]});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

	const { mutate: deletePost, isPending: isDeleting} = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch(`/api/posts/${post._id}`, {
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
			// invalidate the query to refetch the data
			queryClient.invalidateQueries({queryKey: ["posts"]});
		}
	});


	const { mutate: likePost, isPending: isLiking} = useMutation({
		mutationFn: async () => {
			try{
				const res = await fetch(`/api/posts/like/${post._id}`, {
					method: "POST",
				});
				const data = await res.json();

				if(!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch(error) {
				throw new Error(error);
			}
		},
		onSuccess : (updatedLikes) => {
			// toast.success("Post liked successfully");
			//invalidate the query to refetch the data
			// This is not the best way to do it, but it works. Bc it will refetch all posts
			// queryClient.invalidateQueries({queryKey: ["posts"]});
			// instead, we can update the post object in the cache
			queryClient.setQueryData(["posts"], (oldData) => {
				return oldData.map(p => {
					if(p._id === post._id) {
						return {...p, likes: updatedLikes};
					}
					return p;
				});
			});
		},
		onError: (error) => {
			toast.error(error.message);
		}
	})

	const { mutate: commentPost, isPending: isCommenting} = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch(`/api/posts/comment/${post._id}`, {
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
			queryClient.invalidateQueries({queryKey: ["posts"]});

		},
		onError: (error) => {
			toast.error(error.message);
		}
	})

    const {mutate: deleteRepost, isPending: isDeletingRepost} = useMutation({
        mutationFn: async (tweetId) => {
            try {
                const res = await fetch(`/api/posts/repost/delete/${postId}/${tweetId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await res.json();

                if(!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Repost deleted successfully");
            // invalidate the query to refetch the data
            queryClient.invalidateQueries({queryKey: ["posts"]});
        }
    });

	const handleDeletePost = () => {
		deletePost();
	};

	const handlePostComment = (e) => {
		e.preventDefault();
		if(isCommenting) return;
		commentPost();
	};

	const handleLikePost = () => {
		if(isLiking) return;
		likePost();
	};

    const handleRepostPosts = () => {
        if(isReposting) return;
        repostPost();
    }

    const handleDeleteRepost = (repostId) => {
        if(isDeletingRepost) return;
        setLoadingRepostId(repostId);
        deleteRepost(repostId);
    }

    const toggleImageEnlarge = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };

	return (
		<>
			<div className="hover:bg-gray-600 hover:bg-opacity-15 flex gap-2 items-start p-4 border border-gray-700 my-3 rounded-3xl bg-black bg-opacity-55">
				<div className="avatar">
					<Link
						to={`/social/profile/${postOwner.username}`}
						className="w-8 h-8 rounded-full overflow-hidden"
					>
						<img src={postOwner.profileImg || placeholder_img} />
					</Link>
				</div>
				<div className="flex flex-col flex-1">
					<div className="flex gap-2 items-center">
						<Link
							to={`/social/profile/${postOwner.username}`}
							className="font-bold flex"
						>
							{postOwner.fullName} &nbsp;{" "}
							{postOwner.isAdmin ? (
								<img
									src={logoMain}
									className="flex h-[25px] w-[25px] justify-center items-center duration-300 hover:scale-110 hover:shadow-lg"
									title="Admin"
								/>
							) : (
								""
							)}
						</Link>
						<span className="text-gray-700 flex gap-1 text-sm">
							<Link to={`/social/profile/${postOwner.username}`}>
								@{postOwner.username}
							</Link>
							<span>·</span>
							<Link
								to={`/social/posts/${postOwner.username}/${postId}`}
							>
								<span className="hover:text-sky-400">
									{formattedDate}
								</span>{" "}
								{/* This is the date of the post */}
							</Link>
						</span>
						{isMyPost && (
							<span className="flex justify-end flex-1">
								{!isDeleting && (
									<FaTrash
										className="cursor-pointer hover:text-red-500"
										onClick={handleDeletePost}
									/>
								)}
								{isDeleting && <LoadingSpinner size="sm" />}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-3 overflow-hidden">
						<span>{post.text}</span>
						{post.img && (
							<img
								src={post.img}
								className="h-80 object-contain rounded-lg border border-gray-700"
								alt=""
								onClick={toggleImageEnlarge}
							/>
						)}
						{isImageEnlarged && (
							<div
								className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
								onClick={toggleImageEnlarge}
							>
								<img
									src={post.img}
									className="max-h-[90vh] max-w-[90vw] object-contain"
									alt=""
								/>
							</div>
						)}
						{post.reposts && (
							<div className="flex gap-2 items-center text-sm text-gray-700">
								<BiRepost className="w-4 h-4" />
								<span>{post.reposts.length} reposts</span>
							</div>
						)}
						{post.reposts && post.reposts.length > 0 && (
							<div className="">
								{post.reposts.map((repost, index) => (
									<div
										key={index}
										className="border-t border-gray-300 pt-2 mt-2"
									>
										<span className="text-gray-500 text-sm">
											<div className="flex items-center hover:text-green-200 cursor-pointer">
												<div className="flex w-full justify-start space-x-1">
													<div>
														Reposted by{" "}
													</div>
													<Link to={`/social/profile/${repost.user.username}`}> 
														@{repost.user.username} 
													</Link>
												</div>
												{repost.user._id === authUser._id && (
                                                    <>
                                                        {isDeletingRepost ? (
                                                            <div>
                                                                {loadingRepostId === repost._id ? <LoadingSpinner /> : <FaTrash />} 
                                                            </div>
                                                        ) : (
                                                            <div className="flex w-full justify-end">
                                                                <FaTrash 
                                                                    onClick={() => handleDeleteRepost(repost._id)}
                                                                />
                                                            </div>
                                                        )}
                                                    </>
                                                )}
											</div>
										</span>
									</div>
								))}
							</div>
						)}
					</div>
					<div className="flex justify-between mt-3">
						<div className="flex gap-4 items-center w-2/3 justify-between">
							<div
								className="flex gap-1 items-center cursor-pointer group"
								onClick={() =>
									document
										.getElementById(
											"comments_modal" + post._id
										)
										.showModal()
								}
							>
								<FaRegComment className="w-4 h-4  text-slate-500 group-hover:text-sky-400" />
								<span className="text-sm text-slate-500 group-hover:text-sky-400">
									{post.comments.length}
								</span>
							</div>
							{/* We're using Modal Component from DaisyUI */}
							<dialog
								id={`comments_modal${post._id}`}
								className="modal border-none outline-none"
							>
								<div className="modal-box rounded-3xl border border-gray-700 bg-opacity-80 backdrop-blur-md">
									<h3 className="font-bold text-lg mb-4">
										COMMENTS
									</h3>
									<div className="flex flex-col gap-3 max-h-60 overflow-auto">
										{post.comments.length === 0 && (
											<p className="text-sm text-slate-500">
												No comments yet 🤔 Be the first
												one 😉
											</p>
										)}
										{post.comments.map((comment) => (
											<div
												key={comment._id}
												className="flex gap-2 items-start"
											>
												<div className="avatar">
													<div className="w-8 mt-2 rounded-full">
														<img
															src={
																comment.user
																	.profileImg ||
																placeholder_img
															}
														/>
													</div>
												</div>
												<div className="flex flex-col">
													<div className="flex items-center gap-1">
														<span className="font-bold">
															{
																comment.user
																	.fullName
															}
														</span>
														<span className="text-gray-700 text-sm">
															&nbsp; @
															{
																comment.user
																	.username
															}
														</span>
													</div>
													<div className="text-sm">
														{comment.text}
													</div>
												</div>
											</div>
										))}
									</div>
									<form
										className="flex gap-2 items-center mt-4 border-t border-gray-600 pt-2"
										onSubmit={handlePostComment}
									>
										<textarea
											className="textarea w-full p-2 rounded-2xl text-md resize-none border focus:outline-none border-gray-800"
											placeholder="Add a comment..."
											value={comment}
											onChange={(e) =>
												setComment(e.target.value)
											}
										/>
										<button className="btn btn-primary rounded-full btn-sm text-white px-4">
											{isCommenting ? (
												<LoadingSpinner size="sm" />
											) : (
												"Post"
											)}
										</button>
									</form>
								</div>
								<form
									method="dialog"
									className="modal-backdrop"
								>
									<button className="outline-none">
										close
									</button>
								</form>
							</dialog>
							<div className="flex gap-1 items-center group cursor-pointer">
								{post.reposts && (
									<div className="flex">
										{isReposting ? (
											<LoadingSpinner size="sm" />
										) : (
											<BiRepost
												className={`w-6 h-6 ${
													post.reposts.some(
														(repost) =>
															repost.user._id ===
															authUser._id
													)
														? "text-green-500"
														: "text-slate-500"
												} group-hover:text-green-500`}
												onClick={() =>
													handleRepostPosts()
												}
											/>
										)}
										<span className="text-sm text-slate-500 group-hover:text-green-500">
											{post.reposts.length}
										</span>
									</div>
								)}
							</div>
							<div
								className="flex gap-1 items-center group cursor-pointer"
								onClick={handleLikePost}
							>
								{isLiking && <LoadingSpinner size="sm" />}
								{!isLiked && !isLiking && (
									<FaRegHeart className="w-4 h-4 cursor-pointer text-slate-500 group-hover:text-pink-500" />
								)}
								{isLiked && !isLiking && (
									<FaRegHeart className="w-4 h-4 cursor-pointer text-pink-500 " />
								)}

								<span
									className={`text-sm group-hover:text-pink-500 ${
										isLiked
											? "text-pink-500"
											: "text-slate-500"
									}`}
								>
									{post.likes.length}
								</span>
							</div>
						</div>
						<div className="flex justify-end gap-2 items-center relative group">
							<FaRegBookmark className="w-4 h-4 text-slate-500 cursor-pointer group-hover:text-yellow-300" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Post;
