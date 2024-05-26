import { useEffect } from 'react';
import AOS from "aos";
import { Navbar, Hero, About, Benefit, Futher, Footer } from './_mainpage'

const OwnerLayout = () => {

    useEffect(() => {
		AOS.init({
			duration: 900,

			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

    return (
        <section className="w-full">
            <div className="bg-primary w-full overflow-hidden">
                <div className="flex justify-center items-start">
                    <div className="w-full">
                        <Navbar />
                    </div>
                </div>
                <div className="bg-primary flex justify-center items-start">
                    <div className="w-full">
                        <Hero />
                    </div>
                </div>
                <div className="bg-white sm:px-16 px-6 flex justify-center items-start">
                    <div className="w-full">
                        <About />
                    </div>
                </div>
                <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
                    <div className="w-full">
                        <Benefit />
                    </div>
                </div>
                <div className="bg-white sm:px-16 px-6 flex justify-center items-start">
                    <div className="w-full">
                        <Futher />
                    </div>
                </div>
                <div className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OwnerLayout
