import { useEffect, useState } from "react";

import Posts from "@/components/social/ui/common/Posts";
import CreatePost from "./CreatePost";
import Lenis from "@studio-freight/lenis";

const HomePage = () => {
	const [feedType, setFeedType] = useState("forYou");
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
		};
	}, []);
	return (
		<>
			<div className="flex-[4_4_0] md:mx-7 mx-0 min-h-screen bg-black border-gray-800">
				{/* Header */}
				<div className="flex w-full border-b border-gray-800 sticky top-0 z-10 bg-black bg-opacity-50 backdrop-blur-md">
					<div
						className={
							"border-  flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
						}
						onClick={() => setFeedType("forYou")}
					>
						For you
						{feedType === "forYou" && (
							<div className="absolute bottom-0 w-10  h-1 rounded-full bg-[#2191d8]"></div>
						)}
					</div>
					<div
						className="border- rounded flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
						onClick={() => setFeedType("following")}
					>
						Following
						{feedType === "following" && (
							<div className="absolute bottom-0 w-10  h-1 rounded-full bg-[#2191d8]
							"></div>
						)}
					</div>
				</div>
				{/*  CREATE POST INPUT */}
				<div className="mt-4">
					<CreatePost />
				</div>
				{/* POSTS */}
				<div className="mb-10">
					<Posts feedType={feedType} />
				</div>
			</div>
		</>
	);
};
export default HomePage;
