import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Posts from "@/components/social/ui/common/Posts";
import ProfileHeaderSkeleton from "@/components/social/ui/skeletons/ProfileHeaderSkeleton";
import EditProfileModal from "./EditProfileModal";

import placeholder_img from "@/assets/social/placeholder/placeholder.png";
import placeholder_cover from "@/assets/social/placeholder/cover_placeholder.jpeg";

import { FaArrowLeft } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { formatMemberSinceDate } from "@/utils/date";
import useFollow from "@/hooks/useFollow";
import useUpdateUserProfile from "@/hooks/useUpdateUserProfile";
import logoMain from '@/assets/logo/logoMain.png'

const ProfilePage = () => {
	const [coverImg, setCoverImg] = useState(null);
	const [profileImg, setProfileImg] = useState(null);
	const [feedType, setFeedType] = useState("posts");

	const coverImgRef = useRef(null);
	const profileImgRef = useRef(null);

	const {username} = useParams();

	const{follow, isPending} = useFollow();

	const { data: authUser } = useQuery({ queryKey: ["authUser"] });

	const {data: user, isLoading, refetch, isRefetching} = useQuery({
		queryKey: ["userProfile"],
		queryFn: async () => {
			try {
				const res = await fetch(`/api/user/profile/${username}`);
				const data = await res.json();
				if(!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			}
			catch (error) {
				throw new Error(error);
			}
		},
	});

	const{data: posts } = useQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			try {
				const response = await fetch("/api/posts/all");
				const data = await response.json();

				if(!response.ok){
					throw new Error(data.message || 'Something went wrong!');
				}

				console.log(data);

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const {updateProfile, isUpdatingProfile} = useUpdateUserProfile();

	const isMyProfile = authUser._id === user?._id;
	const memberSinceDate = formatMemberSinceDate(user?.createdAt);

	const amIFollowing = authUser?.following.includes(user?._id);

	useEffect(() => {
		refetch();
	}, [username, refetch]);

	const handleImgChange = (e, state) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				state === "coverImg" && setCoverImg(reader.result);
				state === "profileImg" && setProfileImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<div className='flex-[4_4_0] min-h-screen md:mx-7 bg-black'>
				{/* HEADER */}
				{isLoading || isRefetching && <ProfileHeaderSkeleton />}
				{!isLoading && !isRefetching && !user && <p className='text-center text-lg mt-4'>User not found</p>}
				<div className='flex flex-col'>
					{!isLoading && !isRefetching && user && posts && (
						<>
                            {/* HEADER */}
							<div className='flex gap-10 px-4 py-2 items-center sticky top-0 z-10 backdrop-blur-md border-gray-800'>
								<Link to='/social'>
									<FaArrowLeft className='w-4 h-4' />
								</Link>
								<div className='flex flex-col'>
									<p className='font-bold text-lg'>{user?.fullName}</p>
									<span>{posts.filter(post => post.user._id === user._id).length} posts</span>
								</div>
							</div>

							{/* COVER IMG */}
							<div className='relative group/cover'>
								<img
									src={coverImg || user?.coverImg || placeholder_cover}
									className='h-52 w-full object-cover'
									alt='cover image'
								/>
								{isMyProfile && (
									<div
										className='absolute top-2 right-2 rounded-full p-2 bg-gray-800 bg-opacity-75 cursor-pointer opacity-0 group-hover/cover:opacity-100 transition duration-200'
										onClick={() => coverImgRef.current.click()}
									>
										<MdEdit className='w-5 h-5 text-white' />
									</div>
								)}

								<input
									type='file'
									hidden
									ref={coverImgRef}
									onChange={(e) => handleImgChange(e, "coverImg")}
								/>
								<input
									type='file'
									hidden
									ref={profileImgRef}
									onChange={(e) => handleImgChange(e, "profileImg")}
								/>
								{/* USER AVATAR */}
								<div className='avatar absolute -bottom-16 left-4'>
									<div className='w-32 rounded-full relative group/avatar'>
										<img src={profileImg || user?.profileImg || placeholder_img} />
										<div className='absolute top-5 right-3 p-1 bg-primary rounded-full group-hover/avatar:opacity-100 opacity-0 cursor-pointer'>
											{isMyProfile && (
												<MdEdit
													className='w-4 h-4 text-white'
													onClick={() => profileImgRef.current.click()}
												/>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className='flex justify-end px-4 mt-5'>
								{isMyProfile && <EditProfileModal authUser={authUser}/>}
								{!isMyProfile && (
									<button
										className='btn btn-outline rounded-full btn-sm'
										onClick={() => follow(user?._id)}
									>
										{isPending && "Loading..."}
										{!isPending && amIFollowing && "Unfollow"}
										{!isPending && !amIFollowing && "Follow"}
									</button>
								)}
								{(coverImg || profileImg) && (
									<button
										className='btn btn-primary rounded-full btn-sm text-white px-4 ml-2'
										onClick={async () => {
											await updateProfile({coverImg, profileImg})
											setProfileImg(null);
											setCoverImg(null);
										}}
									>
										{isUpdatingProfile ? "Updating..." : "Update"}
									</button>
								)}
							</div>

							<div className='flex flex-col gap-4 mt-14 px-4'>
								<div className='flex flex-col'>
									<span className='font-bold text-lg flex'>
										{user.fullName} &nbsp; {user.isAdmin ? <img src={logoMain} className="flex h-[30px] w-[30px] justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" title='Admin' /> : ""}
									</span>

									<span className='text-sm text-slate-500'>@{user?.username}</span>
									<span className='text-sm my-1'>{user?.bio}</span>
								</div>

								<div className='flex gap-2 flex-wrap'>
									{user?.link && (
										<div className='flex gap-1 items-center '>
											<>
												<FaLink className='w-3 h-3 text-slate-500' />
												<a href={"https://" + user?.link}>{user?.link}</a>
											</>
										</div>
									)}
									<div className='flex gap-2 items-center'>
										<IoCalendarOutline className='w-4 h-4 text-slate-500' />
										<span className='text-sm text-slate-500'>
											{memberSinceDate}
										</span>
									</div>
								</div>
								<div className='flex gap-2'>
									<div className='flex gap-1 items-center'>
                                        <Link to={`/social/profile/following/${user?._id}`}>
                                            <span className='font-bold text-xs'>{user?.following.length}&nbsp;</span>
                                            <span className='text-slate-500 text-xs'>Following</span>
                                        </Link>
									</div>
									<div className='flex gap-1 items-center'>
                                        <Link to={`/social/profile/followers/${user?._id}`}>
                                            <span className='font-bold text-xs'>{user?.followers.length}&nbsp;</span>
                                            <span className='text-slate-500 text-xs'>Followers</span>
                                        </Link>
									</div>
								</div>
							</div>
							<div className='flex w-full border-b border-gray-700 mt-4'>
								<div
									className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 relative cursor-pointer'
									onClick={() => setFeedType("posts")}
								>
									Posts
									{feedType === "posts" && (
										<div className='absolute bottom-0 w-10 h-1 rounded-full bg-[#2191d8]' />
									)}
								</div>
								<div
									className='flex justify-center flex-1 p-3 text-slate-500 hover:bg-secondary transition duration-300 relative cursor-pointer'
									onClick={() => setFeedType("likes")}
								>
									Likes
									{feedType === "likes" && (
										<div className='absolute bottom-0 w-10  h-1 rounded-full bg-[#2191d8]' />
									)}
								</div>
							</div>
						</>
					)}
					<div className="mb-5">
						<Posts feedType={feedType} username={username} userId={user?._id} />
					</div>
				</div>
			</div>
		</>
	);
};
export default ProfilePage;
