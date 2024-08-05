import Navbar from "./common/Navbar";
import Product from "./detailed_product/Product";
import OverView from "./detailed_product/OverView";
import SomeProduct from "./detailed_product/SomeProduct";
import Footer from "@/components/common/Footer";
import LinkHeader from "./common/LinkHeader";
import Reviews from "./detailed_product/Reviews";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const ProductViewLayout = () => {

	return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>

				<div className="items-start justify-center pt-28 ">
					<div className="w-full bg-primary">
						<LinkHeader isViewProduct={true} isCart={false}/>
					</div>
				</div>

				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Product />
					</div>
				</div>

				<div className="items-start  justify-center">
					<div className="w-full bg-primary">
						<OverView />
					</div>
				</div>

				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Reviews />
					</div>
				</div>

				<div className="items-start justify-center ">
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
