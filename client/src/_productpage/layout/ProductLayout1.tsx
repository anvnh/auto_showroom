import Navbar from "../../_root/_homepage/Navbar";
import Footer from "@/components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarSmall from "../navbarsmall/NavbarSmall";
import Car1popular from "../productHomePage/car1popular";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
const ProductLayout = () => {
	const [selectedSection, setSelectedSection] = useState("");
	const handleNavClick = (section) => {
		setSelectedSection((prevSection) =>
			prevSection === section ? "" : section
		);
	};
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
		<section className="w-full">
			<div className="w-full overflow-hidden bg-primary">
				<div className="flex items-start justify-center ">
					<div  data-aos-duration="200" className="w-full z-10">
						<Navbar onNavClick={handleNavClick} />
					</div>
				</div>

				<div className="flex items-start justify-center ">
					<div className="w-full">
						<NavbarSmall />
					</div>
				</div>
				<div
					data-aos="zoom-out"
					className="flex items-start justify-center "
				>
					<div className="w-full">
						<Car1popular />
					</div>
				</div>
				<div
					
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

export default ProductLayout;
