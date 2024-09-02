import Navbar from './common/Navbar'
import Products from './components/MostSearchedCars';
import Hero from './components/Hero';
import Footer from '@/components/common/Footer'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Cars from './components/Cars';
import Blogs from './components/Blogs';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import NavbarSmallShop from "./NavbarSmallShop"
const ShopLayout = () => {
	// useEffect(() => {
	// 	const lenis = new Lenis();
	// 	function raf(time) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}
	// 	requestAnimationFrame(raf);
	// 	return () => {
	// 		lenis.destroy();
	// 	};
	// }, []);
	return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				<div className="items-start justify-center">
					<div className="w-full bg-primary z-50">
						<NavbarSmallShop />
					</div>
				</div>
				<div className="items-start justify-center bg-primary">
					<div id="Home" className="w-full bg-primary">
						<Hero />
					</div>
				</div>
				<div className="py-20 bg-white">
					<div id="Shop" className="w-full bg-white">
						<Products />
					</div>
				</div>
				<div className="items-start justify-center py-16 bg-primary">
					<div id="Most_Rated_Cars" className="w-full">
						<Cars />
					</div>
				</div>
				<div id="Blogs" className="items-start justify-center py-16 bg-[#F9FBFC]">
					<div className="w-full bg-[#F9FBFC]">
						<Blogs />
					</div>
				</div>
				<div className="items-start justify-center bg-white">
					<div className="w-full">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShopLayout
