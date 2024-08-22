import Navbar from './common/Navbar'
import Sidebar from './products/Sidebar'
import LinkHeader from './common/LinkHeader';
import Products from './products/Products';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Footer from '@/components/common/Footer';
const AllProductViewLayout = () => {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
		};
	}, []);
    return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				<div className="items-start justify-center">
					<div className="w-full bg-primary pt-28">
						<LinkHeader isViewProduct={false} isCart={false} />
					</div>
				</div>
				<div className='flex px-12 ss:px-0 md:px-[120px] bg-primary'>
					<div className="w-full justify-center">
						<Products />
					</div>
				</div>
				<div className='flex pt-20 bg-primary'>
					<div className="w-full justify-center">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
}

export default AllProductViewLayout
