import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/social/ui/common/LoadingSpinner";

import { IoSettingsOutline } from "react-icons/io5";
import { FaUser, FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


import placeholder_img from "../../assets/social/placeholder/placeholder.png";


const NotificationPage = () => {

	const queryClient = useQueryClient();
	
	const { data: notifications, isLoading } = useQuery({
		queryKey: ["notifications"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/notifications");
				const data = await res.json();
				if(!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const { mutate: deleteNotifications } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch("/api/notifications", {
					method: "DELETE",
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
			queryClient.invalidateQueries("notifications");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return (
		<>
			<div className='flex-[4_4_0] mx-7 border-gray-700 min-h-screen bg-black'>
				<div className='flex justify-between items-center p-4 border-b border-gray-700'>
					<p className='font-bold'>Notifications</p>
					<div className='dropdown '>
						<div tabIndex={0} role='button' className='m-1'>
							<IoSettingsOutline className='w-4' />
						</div>
						<ul
							tabIndex={0}
							className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a onClick={deleteNotifications}>Delete all notifications</a>
							</li>
						</ul>
					</div>
				</div>
				{isLoading && (
					<div className='flex justify-center h-full items-center'>
						<LoadingSpinner size='lg' />
					</div>
				)}
				{notifications?.length === 0 && <div className='text-center p-4 font-bold'>No notifications 🤔</div>}
				{notifications?.map((notification) => (
					<Link to="">
						<div className='bg-black bg-opacity-55 my-2 border border-gray-800 rounded-3xl' key={notification._id}>
							<div className='flex gap-2 p-4'>
								<Link to="/social/notifications">
									{notification.type === "follow" && <FaUser className='w-7 h-7 text-primary' />}
									{notification.type === "like" && <FaHeart className='w-7 h-7 text-red-500' />}
									{notification.type === "comment" && <FaComment className='w-7 h-7 text-blue-500' />}
								</Link>
								<Link to={`/social/profile/${notification.from.username}`}>
									<div className='avatar'>
										<div className='w-8 rounded-full'>
											<img src={notification.from.profileImg || placeholder_img} />
										</div>
									</div>
									<div className='flex gap-1'>
										<span className='font-bold'>@{notification.from.username}</span>{" "}
										{notification.type === "follow" ? "followed you" : (notification.type === "like" ? "liked your post" : "commented on your post")}
									</div>
								</Link>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};
export default NotificationPage;
