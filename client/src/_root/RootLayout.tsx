import { Navbar, Hero, Product, Product2, Banner, CarBrand } from "./_homepage";
import Footer from "@/components/common/Footer";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import "aos/dist/aos.css";
import { backgroundcar2 } from "../assets";
import React, { useEffect, useRef, useState } from "react";
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
		<section className="w-full bg-black">
			<div className="w-full overflow-hidden bg-black">
				<div className="flex items-start justify-center ">
					<div className="w-full">
						<Navbar />
					</div>
				</div>
				<div className="flex items-start z-50 justify-center ">
					<div className="w-full">
						<Hero />
					</div>
				</div>
				<div className="flex items-start justify-center ">
					<div className="w-full">
						<Product />
					</div>
				</div>
				<div className="bg-primary pt-24 pb-28 justify-center items-center flex" >
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
					data-aos="fade"
					className="flex items-start justify-center "
				>
					<div className="w-full">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
};

export default RootLayout;