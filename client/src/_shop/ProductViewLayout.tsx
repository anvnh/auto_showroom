import Navbar from './common/Navbar'
import LinkHeader from './common/LinkHeader'

const ProductViewLayout = () => {
    return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				<div className="items-start justify-center pt-28">
					<div className="w-full bg-primary">
						<LinkHeader />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductViewLayout
