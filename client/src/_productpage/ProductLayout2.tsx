import { Footer } from "@/_root/_homepage";
import Navbar from "./productHomePage/Navbar";
import Car2popular from "./productHomePage/car2popular";
const ProductLayout = () => {
	return (
		<section className="w-full">
			<div className="w-full overflow-hidden bg-primary">
				<div
					data-aos="zoom-out"
					className="flex items-start justify-center "
				>
					<div className="w-full">
						<Navbar />
					</div>
				</div>
                <div
					data-aos="zoom-out"
					className="flex items-start justify-center "
				>
					<div className="w-full">
						<Car2popular />
					</div>
				</div>
				<div
					data-aos="fade"
					className="flex items-start justify-center "
				>
					<div className="w-full">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductLayout;
