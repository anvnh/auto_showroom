import {Navbar, Hero, Product, Product2 ,Banner, Footer, CarBrand} from './_homepage'
import AOS from "aos";
import "aos/dist/aos.css";
import {
    backgroundcar2
} from "../assets";
import React, { useEffect, useRef, useState} from "react";
import Lenis from "@studio-freight/lenis"

const RootLayout = () => {

    useEffect(() => {
		AOS.init({
			duration: 800,

			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});

	}, []);

    return (
        <section className="w-full bg-gray-900">
            <div className="w-full overflow-hidden bg-primary">
                    <div className="flex items-start justify-center ">
                        <div className="w-full">
                            <Navbar/>
                        </div>
                    </div>
                <div className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Hero/>
                    </div>
                </div>
                <div className="flex items-start justify-center  bg-primary ">
                    <div className="w-full">
                        <Product />
                    </div>
                </div>
                <div className="bg-primary flex items-start pt-24 pb-28" >
                     <div className="w-full">
                        <Product2 />
                    </div>
                </div>   
                <div className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Banner />
                    </div>
                </div>   
                <div className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <CarBrand />
                    </div>
                </div>
                <div data-aos="fade" className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default RootLayout
