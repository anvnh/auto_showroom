import XSvg from "../../../svgs/X";
import logo from "../../../../assets/logo.png";

import { MdHomeFilled } from "react-icons/md";
import { IoChatboxEllipsesSharp, IoNotifications } from "react-icons/io5";
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import placeholder_img from "../../../../assets/social/placeholder/placeholder.png";
import { useState } from "react";
import { log } from "console";

import { useNavigate } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";

const Sidebar = () => {
    const navigate = useNavigate();

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const queryClient = useQueryClient();

    const{ mutate: logout ,isError, error }= useMutation({
        mutationFn: async () => {
            try {
                const res = await fetch('/api/auth/logout', {
                    method: 'POST',
                });

                const data = await res.json();

                if(!res.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['authUser']});
        },
        onError: () => {
            toast.error("Logout failed");
        }
    })

    const handleChatClick = () => {
        navigate('/chat');
    }

    const { data: authUser } = useQuery<{ username?: string; profileImg?: string; fullName?: string }>({queryKey: ['authUser']});

    return (
        <>
            <div className="md:flex hidden mr-5 w-18 max-w-56">
                <div className="sticky top-0 left-0 h-screen flex flex-col w-20 md:w-full">
                    <Link
                        to="/owners"
                        className="flex justify-center md:justify-start"
                        >
                        <img
                            src={logo}
                            alt="logo"
                            className="w-10 h-10 md:w-16 md:h-16 mt-4 mr-2"
                        />
                    </Link>
                    <ul className="flex flex-col gap-3 mt-4">
                        <li className="flex justify-center md:justify-start">
                            <Link
                                to="/social"
                                className="flex gap-3 items-center hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                                >
                                <GoHomeFill className="w-8 h-8" />
                                <span className="text-lg hidden md:block">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="flex justify-center md:justify-start">
                            <Link
                                to="/social/notifications"
                                className="flex gap-3 items-center hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                                >
                                <IoNotifications className="w-8 h-8" />
                                <span className="text-lg hidden md:block">
                                    Notifications
                                </span>
                            </Link>
                        </li>

                        <li className="flex justify-center md:justify-start">
                            <Link
                                to={`/social/profile/${authUser?.username || ""}`}
                                className="flex gap-3 items-center hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                                >
                                <FaUser className="w-8 h-8" />
                                <span className="text-lg hidden md:block">
                                    Profile
                                </span>
                            </Link>
                        </li>

                        <li className="flex justify-center md:justify-start">
                            <Link
                                to="/chat"
                                className="flex gap-3 items-center hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                                >
                                <IoChatboxEllipsesSharp className="w-8 h-8" />
                                <span className="text-lg hidden md:block">
                                    Message
                                </span>
                            </Link>
                        </li>
                    </ul>
                    {authUser && (
                        <div
                            // to={`/social/profile/${authUser.username}`}
                            className={`mt-auto mb-10 flex gap-2 items-start transition-all duration-300 ${!isMenuVisible ? ("hover:bg-gray-600 hover:bg-opacity-15") : ("")} py-2 px-4 rounded-full`}
                            >
                            <div
                                className={`avatar`}
                                onClick={() => setIsMenuVisible(!isMenuVisible)}
                                >
                                <div className="w-8 rounded-full">
                                    <img
                                        src={
                                            authUser?.profileImg || placeholder_img
                                        }
                                        alt="Profile Image"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between flex-1">
                                <div className="hidden md:block">
                                    <p className="text-white font-bold text-sm w-20 truncate">
                                        {authUser?.fullName || ""}
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        @{authUser?.username || ""}
                                    </p>
                                </div>

                                {isMenuVisible && (
                                    <>
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" onClick={() => setIsMenuVisible(false)}></div>
                                        <div className="border border-gray-600 pl-3 pt-3 pb-3 rounded-3xl absolute bottom-28 right-0 md:left-0 w-[220px] bg-black bg-opacity-55 backdrop-blur-md z-50">
                                            <div className="flex flex-col gap-2 text-base font-bold">
                                                {/* <div onClick={() => {
                                                {
                                                    setIsMenuVisible(false);
                                                    setTimeout(() => {}, 300);
                                                }
                                            }} className="center hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 w-[165px] cursor-pointer">
                                                <Link to={`/social/profile/${authUser.username}`}>
                                                    Profile
                                                </Link>
                                            </div> */}
                                                {/* <li className="hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer">
                                                <Link to="/social/settings">
                                                    Settings
                                                </Link>
                                            </li> */}
                                                <div 
                                                    className="hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        //TODO: Add an existing account
                                                        logout();
                                                    }}
                                                >
                                                    Add an existing account
                                                </div>
                                                <div className="hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer" onClick={(e) => {
                                                    e.preventDefault();
                                                    // TODO
                                                    logout();
                                                }}>
                                                    Logout @{authUser.username}
                                                </div>
                                                <div className="hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                                                    onClick={() => navigate('/')}
                                                >
                                                    Back to homepage 
                                                </div>
                                                <div className="hover:bg-gray-600 hover:bg-opacity-25 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                                                    onClick={() => navigate('/shop')}
                                                >
                                                    Back to shop
                                                </div>
                                            </div>
                                        </div>  
                                    </>
                                )}

                                <BiLogOut
                                    className="md:flex hidden w-5 h-5 cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logout();
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="md:hidden fixed bottom-0 left-0 right-0 h-[50px] bg-black bg-opacity-40 backdrop-blur-md z-50">
                <ul className="flex justify-around space-x-4 mt-3">
                    <li>
                        <Link to="/social">
                            <GoHomeFill className="w-6 h-6"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/social/notifications">
                            <IoNotifications className="w-6 h-6"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/social/profile/${authUser?.username}`}>
                            <FaUser className="w-6 h-6" />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Sidebar;
