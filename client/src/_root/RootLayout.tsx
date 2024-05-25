import {Navbar, Hero, Product, Product2 ,Banner, Footer, CarBrand} from './_homepage'
import AOS from "aos";
import "aos/dist/aos.css";

import {
    backgroundcar2
} from "../assets";
import React, { useEffect, useRef, useState} from "react"; // Import both useEffect and useRef

const RootLayout = () => {
    useEffect(() => {
		AOS.init({
			duration: 900,

			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

    /**code navbar event */        
    const [selectedSection, setSelectedSection] = useState('');
    const handleNavClick = (section) => {
        setSelectedSection(prevSection => prevSection === section ? '' : section);
    };

    return (
        <section className="w-full">
            <div className="w-full overflow-hidden bg-primary">
                    <div data-aos="zoom-out" className="flex items-start justify-center ">
                        <div className="w-full">
                            <Navbar onNavClick={handleNavClick}  />
                        </div>
                    </div>
                <div data-aos="zoom-out" className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Hero selectedSection={selectedSection} />
                    </div>
                </div>
                <div data-aos="zoom-out" className="flex items-start justify-center  bg-primary ">
                    <div className="w-full">
                        <Product />
                    </div>
                </div>
                <div
                 style={{ backgroundImage: `url(${backgroundcar2})` }}
                 data-aos="zoom-out" className="bg-primary flex items-start pt-24 pb-28"
                 
                >
                     <div className="w-full">
                        <Product2 />
                    </div>
                </div>   
                <div data-aos="zoom-out" className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Banner />
                    </div>
                </div>   
                <div data-aos="zoom-out" className="flex items-start justify-center bg-gray-950 bg-opacity-50">
                    <div className="w-full">
                        <CarBrand />
                    </div>
                </div>
                <div data-aos="zoom-out" className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default RootLayout
