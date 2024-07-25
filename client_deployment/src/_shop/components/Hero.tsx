import background from '@/assets/shop/background.jpg';

const Hero = () => {
    return (
		<section>
			<div className="bg-primary relative pt-12">
				<img src={`${background}`} alt="" className='w-full xl:h-auto h-screen object-cover bg-center'/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-left justify-center text-white px-5 ss:px-12 md:p-4 md:pl-40 font-poppins">
					<h1 className="sm:text-5xl ss:text-5xl text-4xl font-bold mb-4 md:pt-32 pt-0">
						Fast, Simple and Reliable
					</h1>
					<p className="sm:text-3xl mb-64 ss:text-3xl">
						Your one-stop shop for all auto parts and accessories.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Hero
