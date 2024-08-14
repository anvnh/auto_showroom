import Navbar from "./common/Navbar";
import Product from "./detailed_product/Product";
import OverView from "./detailed_product/OverView";
import SomeProduct from "./detailed_product/SomeProduct";
import Footer from "@/components/common/Footer";
import LinkHeader from "./common/LinkHeader";
import Reviews from "./detailed_product/Reviews";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import NavbarSmall from "./common/NavbarSmall";

const ProductViewLayout = () => {

	return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<NavbarSmall />
					</div>
				</div>
				<div className="items-start justify-center pt-28 ">
					<div className="w-full bg-primary">
						<LinkHeader isViewProduct={true} isCart={false}/>
					</div>
				</div>

				<div id="Home" className="items-start justify-center">
					<div className="w-full bg-primary">
						<Product />
					</div>
				</div>

				<div id="Overview" className="items-start  justify-center">
					<div className="w-full bg-primary">
						<OverView />
					</div>
				</div>

				<div  id="Reviews" className="items-start justify-center">
					<div className="w-full bg-primary">
						<Reviews />
					</div>
				</div>

				<div id="Others_Product" className="items-start justify-center ">
					<div className="w-full bg-primary">
						<SomeProduct />
					</div>
				</div>

				<div id="Footer" className="items-start justify-center">
					<div className="w-full bg-primary">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductViewLayout;
