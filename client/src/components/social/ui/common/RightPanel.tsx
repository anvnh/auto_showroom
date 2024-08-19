import { Link } from "react-router-dom";
import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import { useQuery } from "@tanstack/react-query";
import placeholder_img from "../../../../assets/social/placeholder/placeholder.png";
import useFollow from "@/hooks/useFollow";
import LoadingSpinner from "./LoadingSpinner";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const RightPanel = () => {


    const {data: suggestedUsers, isLoading} = useQuery({
        queryKey: ['suggestedUsers'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/user/suggested');
                const data = await res.json();

                if(!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }

                return data;

            } catch(error) {
                throw new Error(error.message);
            }
        },
    });

    const {follow, isPending} = useFollow();

    if(suggestedUsers?.length === 0) {
        return <div className="md:w-64 w-0"></div>
    }

	return (
        <>
            <div className='hidden lg:block mb-4 mx-3'>
                <div className='hover:bg-gray-600 hover:bg-opacity-15 bg-black border backdrop-blur-md border-gray-600 bg-opacity-55 p-4 sticky top-2 rounded-3xl'>
                    <p className='font-bold mb-4'>
                        You may know
                    </p>
                    <div className='flex flex-col gap-4'>
                        {/* item */}
                        {isLoading && (
                            <>
                                <RightPanelSkeleton />
                                <RightPanelSkeleton />
                                <RightPanelSkeleton />
                                <RightPanelSkeleton />
                            </>
                        )}
                        {!isLoading &&
                            suggestedUsers?.map((user) => (
                                <Link
                                    to={`/social/profile/${user.username}`}
                                    className='flex items-center justify-between gap-4'
                                    key={user._id}
                                >
                                    <div className='flex gap-2 items-center'>
                                        <div className='avatar'>
                                            <div className='w-8 rounded-full'>
                                                <img src={user.profileImg || placeholder_img} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-semibold tracking-tight truncate w-28'>
                                                {user.fullName}
                                            </span>
                                            <span className='text-sm text-slate-600'>@{user.username}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className='btn bg-white text-black hover:bg-gray-500 hover:opacity-90 rounded-full btn-sm
                                            btn-primary  px-4
                    before:ease relative overflow-hidden border-gray-900 border shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-3 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-50 before:duration-700 hover:shadow-white hover:before:-translate-x-20
                                            '
                                            onClick={(e) => {
                                                e.preventDefault(); 
                                                follow(user._id);
                                            }}
                                        >
                                            {isPending ? <LoadingSpinner size="sm"/> : "Follow"}
                                        </button>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </>
	);
};
export default RightPanel;
