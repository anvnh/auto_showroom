import Navbar from './components/Navbar'
import Product from './ProductShop/Product';
import OverView from './ProductShop/OverView';
const ProductViewLayout = () => {
    return (
		<section className="w-full bg-primary">
			<div className="w-full ">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				<div className="items-start justify-center">
					<div className="w-full bg-gray-400">
						<Product />
					</div>
				</div>
				<div className="items-start justify-center">
					<div className="w-full bg-gray-400">
						<OverView />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductViewLayout
