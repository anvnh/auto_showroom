import Navbar from "./common/Navbar";
import Product from "./ProductShop/Product";
import OverView from "./ProductShop/OverView";
import SomeProduct from "./ProductShop/SomeProduct";
import Footer from "@/components/common/Footer";
import LinkHeader from "./common/LinkHeader";


const ProductViewLayout = () => {
	return (
		<section className="w-full bg-primary">
			<div className="w-full ">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>

				<div className="items-start justify-center pt-28">
					<div className="w-full bg-primary">
						<LinkHeader isViewProduct={true} />
					</div>
				</div>

				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Product />
					</div>
				</div>

				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<OverView />
					</div>
				</div>

				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<SomeProduct />
					</div>
				</div>
        
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductViewLayout;
