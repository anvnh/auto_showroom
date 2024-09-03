import Navbar from "../../_root/_homepage/Navbar";
import Footer from "@/components/common/Footer";
import NavbarSmall6 from "../navbarsmall/NavbarSmall6";
import Car6popular from "../productHomePage/Car6popular";
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
					<div className="flex items-start justify-center z-50">
					<div  data-aos-duration="100" className="w-full">
						<Navbar onNavClick={handleNavClick} />
					</div>
				</div>

					<div className="flex items-start justify-center ">
					<div className="w-full z-50">
						<NavbarSmall6 />
					</div>
				</div>
					<div className="z-10"
					>
						<div  className="w-full">
							<Car6popular />
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
