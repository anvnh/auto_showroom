import Navbar from './common/Navbar'
import Sidebar from './products/Sidebar'
import LinkHeader from './common/LinkHeader';
import Products from './products/Products';

const AllProductViewLayout = () => {
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
				<div className='flex px-32 bg-primary'>
					<div className="w-full items-start justify-center px-10">
						<Products />
					</div>
				</div>
			</div>
		</section>
	);
}

export default AllProductViewLayout