import Navbar from './components/Navbar'
import Products from './components/Products';
import Hero from './components/Hero';
import Footer from '@/components/common/Footer'
import Features from './components/Features';

const ShopLayout = () => {
    return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				<div className="items-start justify-center pt-3 bg-primary">
					<div className="w-full bg-primary">
						<Hero />
					</div>
				</div>
				<div className="pt-12 bg-primary">
					<div className="w-full bg-primary">
						<Products />
					</div>
				</div>
				<div className="items-start justify-center pt-12 bg-primary">
					<div className="w-full bg-primary">
						<Features />
					</div>
				</div>
				<div className="items-start justify-center bg-primary pt-12">
					<div className="w-full">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShopLayout