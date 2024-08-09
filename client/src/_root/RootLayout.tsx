import { Navbar, Hero, Product, Product2, Banner, CarBrand, TopBrand, Story, Story2, GallaryAlbum, AboutUs, MarqueText,} from "./_homepage";
import Footer from "@/components/common/Footer";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import "aos/dist/aos.css";
import  { useEffect, useRef, useState } from "react";
import ChatAI from "@/api_Chat/ChatAI";
import NavbarSmallHomePage from "./elementNavbar/NavbarSmallHomePage"
const RootLayout = () => {
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
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden bg-black">
				<div className="flex items-start justify-center ">
					<div  className="w-full">
						<Navbar />
					</div>
				</div>
				<div className="flex items-start justify-center ">
					<div className="w-full z-50">
						<NavbarSmallHomePage />
					</div>
				</div>
				<div className="flex items-start justify-center">
					<div className="w-full z-50">
						<ChatAI />
					</div>
				</div>
				<div id="Home" className="flex items-start z-50 justify-center ">
					<div className="w-full">
						<Hero />
					</div>
				</div>
				<div id="Introduce" className="w-full">
					<AboutUs/>
				</div>
				<div className="w-full">
					<MarqueText/>
				</div>
				<div className="w-full">
					<GallaryAlbum/>
				</div>	
				<div className="w-full">
					<TopBrand/>
				</div>
				<div className="w-full">
					<Story2/>
				</div>
				<div className="w-full">
					<Story/>
				</div>
				<div  id="Popular_Cars" className="bg-primary flex items-start justify-center ">
					<div className="w-full">
						<Product />
					</div>
				</div>
				<div  id="Upcoming_Cars" className="bg-primary pt-24 pb-28 justify-center items-center flex" >
					<div className="w-full">
						<Product2 />
					</div>
				</div>
				<div className="flex items-start justify-center">
					<div className="w-full">
						<Banner />
					</div>
				</div>
				<div className="flex items-start justify-center ">
					<div className="w-full">
						<CarBrand />
					</div>
				</div>
				<div 
					className="flex items-start justify-center "
				>
					<div id="Footer" className="w-full">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
};

export default RootLayout;