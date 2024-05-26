import { Footer } from "@/_root/_homepage";
import Navbar from "../_root/_homepage/Navbar";
import Car1popular from "./productHomePage/car1popular";
import React, { useEffect, useRef, useState} from "react"; // Import both useEffect and useRef
const ProductLayout = () => {
	const [selectedSection, setSelectedSection] = useState('');
    const handleNavClick = (section) => {
        setSelectedSection(prevSection => prevSection === section ? '' : section);
    };
	return (
		<section className="w-full">
			<div className="w-full overflow-hidden bg-primary">
				<div
					className="flex items-start justify-center "
				>
					<div className="w-full">
						<Navbar onNavClick={handleNavClick}  />
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

export default ProductLayout;
