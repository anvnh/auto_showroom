import Navbar from './components/Navbar'
const ProductViewLayout = () => {
    return (
		<section className="w-full bg-primary">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductViewLayout
