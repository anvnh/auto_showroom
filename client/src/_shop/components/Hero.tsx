import background from '@/assets/shop/background.jpg';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";
const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 900,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-center",
		});
	}, []);
    return (
		<section>
			<div className="bg-primary relative pt-12">
				<img src={`${background}`} alt="" className='w-full xl:h-auto h-screen object-cover bg-center'/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-left justify-center text-white px-5 ss:px-12 md:p-4 md:pl-40 font-poppins">
                    <h1 data-aos="fade-right" className="sm:text-5xl ss:text-5xl text-4xl font-bold mb-4 md:pt-32 pt-0">
                        Fast, Simple and Reliable
					</h1>
					<p data-aos="fade-left" className="sm:text-3xl mb-64 ss:text-3xl">
						Your one-stop shop for all auto parts and accessories.
					</p>
                    <div className='flex py-3 justify-start items-center'>
                        <Link to="/shop/product" className="font-bold py-2 pr-1 rounded-full">
                            Go to our shop
                        </Link>
                        <FaArrowRightToBracket className="text-white text-2xl ml-2"/>
                    </div>
				</div>
			</div>
		</section>
	);
}

export default Hero
