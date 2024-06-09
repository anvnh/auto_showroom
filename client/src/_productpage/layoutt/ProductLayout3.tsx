
import Navbar from "../../_root/_homepage/Navbar";
import React, { useEffect, useRef, useState} from "react"; 
import Car3popular from "../productHomePage/car3popular";



const ProductLayout3 = () => {
	const [selectedSection, setSelectedSection] = useState('');
    const handleNavClick = (section) => {
        setSelectedSection(prevSection => prevSection === section ? '' : section);
    };
  return (
		<section className="w-full">
			<div className="w-full overflow-hidden bg-primary">
				<div className="flex items-start justify-center ">
					<div className="w-full">
						<Navbar onNavClick={handleNavClick} />
					</div>
				</div>
			</div>
			<div className="w-full overflow-hidden bg-primary">
				<div className="flex items-start justify-center ">
					<div className="w-full">
						<Car3popular/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductLayout3;
