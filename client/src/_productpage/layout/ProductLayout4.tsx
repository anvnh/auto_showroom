import Navbar from "../../_root/_homepage/Navbar";
import Footer from "@/components/common/Footer";
import NavbarSmall4 from "../navbarsmall/NavbarSmall4";
import Car4popular from "../productHomePage/Car4popular";
import React, { useEffect, useRef, useState } from "react";

const ProductLayout4 = () => {
	const [selectedSection, setSelectedSection] = useState("");
	const handleNavClick = (section) => {
		setSelectedSection((prevSection) =>
			prevSection === section ? "" : section
		);
	};
	return (
		<div>
            
			<section className="w-full">
				<div className="w-full overflow-hidden bg-primary">
					<div className="flex items-start justify-center ">
					<div  data-aos-duration="100" className="w-full z-50">
						<Navbar onNavClick={handleNavClick} />
					</div>
				</div>

					{/* <div className="flex items-start justify-center ">
					<div className="w-full">
						<NavbarSmall />
					</div>
				</div> */}
					<div
					>
						<div  className="w-full">
							<Car4popular />
						</div>
					</div>
					{/* <div
					data-aos="fade"
					className="flex items-start justify-center "
				>
					<div className="w-full">
						<Footer />
					</div>
				</div> */}
				</div>
			</section>
		</div>
	);
};

export default ProductLayout4;
