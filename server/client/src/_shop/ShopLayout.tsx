import Navbar from './common/Navbar'
import Products from './components/MostSearchedCars';
import Hero from './components/Hero';
import Footer from '@/components/common/Footer'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Cars from './components/Cars';
import Blogs from './components/Blogs';

const ShopLayout = () => {
    return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				{/* <div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div> */}
				<div className="items-start justify-center bg-primary">
					<div className="w-full bg-primary">
						<Hero />
					</div>
				</div>
				<div className="py-20 bg-white">
					<div className="w-full bg-white">
						<Products />
					</div>
				</div>
				{/* <div className="items-start justify-center pb-16 bg-white">
					<div className="w-full bg-white">
						<Features />
					</div>
				</div>
				<div className="items-start justify-center py-16 bg-primary">
					<div className="w-full">
						<Cars />
					</div>
				</div>
				<div className="items-start justify-center pb-16 bg-white">
					<div className="w-full bg-white">
						<Testimonials />
					</div>
				</div>
				<div className="items-start justify-center py-16 bg-[#F9FBFC]">
					<div className="w-full bg-[#F9FBFC]">
                        <Blogs />
					</div>
				</div>
				<div className="items-start justify-center bg-white">
					<div className="w-full">
						<Footer />
					</div>
				</div> */}
			</div>
		</section>
	);
}

export default ShopLayout
