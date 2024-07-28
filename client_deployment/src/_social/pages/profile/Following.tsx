import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import placeholder_img from "@/assets/social/placeholder/placeholder.png";
import placeholder_cover from "@/assets/social/placeholder/cover_placeholder.jpeg";

import { FaArrowLeft } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";

const Following = () => {
	const {id} = useParams();
    const {data: user, isLoading, refetch, isRefetching} = useQuery({
		queryKey: ["followingUsers"],
		queryFn: async () => {
			try {
				const res = await fetch(`https://auto-showroom-backend.onrender.com/api/user/following/${id}`);
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

    const handleGoBack = () => {
        window.history.back();
    };

	useEffect(() => {
		refetch();
	}, [refetch]);

	return (
		<>
			<div className='flex-[4_4_0] min-h-screen md:mx-7 bg-black'>
				{/* HEADER */}
				{isLoading || isRefetching && <LoadingSpinner />}
				{!isLoading && !isRefetching && !user && <p className='text-center text-lg mt-4'>User not found</p>}
				<div className='flex flex-col'>
					{!isLoading && !isRefetching && user && (
						<>
                            {/* HEADER */}
							<div className='flex gap-10 px-4 py-2 items-center sticky top-0 z-10 backdrop-blur-md border-gray-800'>
								<Link to={`/social/../`}>
									<FaArrowLeft className='w-4 h-4' onClick={handleGoBack}/>
								</Link>
							</div>
							<div className='flex w-full border-b border-gray-700 mt-0'>
								<Link to={`/social/profile/following/${id}`}
                                    className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 relative cursor-pointer' 
                                >
                                    Following
                                    <div className='absolute bottom-0 w-10 h-1 rounded-full bg-[#2191d8]' />
								</Link>
								<Link to={`/social/profile/followers/${id}`}
									className='flex justify-center flex-1 p-3 text-slate-500 hover:bg-secondary transition duration-300 relative cursor-pointer'
								>
                                    Followers
								</Link>
							</div>
						</>
					)}
				</div>
                {user?.map((following) => (
                    <div className='bg-black bg-opacity-55 my-2 border border-gray-800 rounded-3xl' key={following._id}>
                        <Link to={`/social/profile/${following.username}`}>
                            <div className='gap-2 p-4'>
                                <div className='avatar'>
                                    <div className='w-8 rounded-full'>
                                        <img src={following.profileImg || placeholder_img} />
                                    </div>
                                </div>
                                <div className="font-bold"> 
                                    {following.fullName}
                                </div>
                                <div className='flex gap-1'>
                                    <span className='font-bold'>@{following.username}</span>{" "}
                                </div>
                            </div>
                        </Link>
                    </div>
				))}
			</div>
		</>
	);
};
export default Following;
