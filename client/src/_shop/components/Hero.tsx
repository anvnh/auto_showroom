import background from '@/assets/shop/background.jpg';

const Hero = () => {
    return (
		<section>
			<div className="bg-primary relative">
				<img src={`${background}`} alt="" />
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-left justify-center text-white p-4 pl-52 font-poppins">
					<h1 className="text-5xl font-bold mb-4">
						Fast, Simple and Reliable
					</h1>
					<p className="text-lg mb-8">
						Your one-stop shop for all auto parts and accessories.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Hero
