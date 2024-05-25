import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { 
    hero_1, hero_2, hero_3, hero_4, hero_5, hero_6,
} from '../../assets';
import {kia,audi, bmwMoono, honda_black, hyundai, lambo} from "@/assets/hplat_asset/img/car_logo"
import { kiaSoul, kiaSeltos, kiaSorento, kiaSportage } from '@/assets/hplat_asset/img/dropdownNavBarImage/vehicle/kia';
import { audiA5, audiA8, audiEtron, audiQ5, audiQ8Etron } from '@/assets/hplat_asset/img/dropdownNavBarImage/vehicle/audi';
import {car, note, calculation,money,
	easyBuy, trade, localPrice, testDrive,
 } from "@/assets/hplat_asset/img/dropdownNavBarImage/shopping"



const Hero = ({selectedSection}) => {
	const slides = [
		{ url: hero_1, },
		{ url: hero_2, },
		{ url: hero_3, },
		{ url: hero_4, },
		{ url: hero_5, },
		{ url: hero_6, },
	];
	const [currentIndex, setCurrentIndex] = useState(0);

		const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
		setCurrentIndex((prev) => (prev + 1) % slides.length);
		}, 12000); // Change slide every 12 seconds

		return () => clearInterval(interval);
	}, [slides.length]);
	
	/*navbar event */
	const section = selectedSection
	console.log(section)

	return (
		<div className={` w-full pb-10  relative group`}>
			
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-[800px] bg-center bg-cover duration-500 z-0'
			></div>
			{/* Left Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-150'>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-150'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2 z-0 relative'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'
					>
						<RxDotFilled />
					</div>
				))}
			</div>	
			{section === "vehiclesBar" ? <div className={`absolute top-0 w-screen h-[800px]  px-[50px] pt-[20px] backdrop-blur-xl bg-white`}>
				<div className='rounded-[40px] border-t-[2px] border-slate-400 px-[10px] pt-[10px]'>
					<img className="w-[100px]" src={kia}/>
				</div>
				<div className='flex justify-evenly w-screen h-[210px]'>
					<div>
						<div>
							<img className='w-[250px]' src={kiaSoul} />
						</div>
						<p className='font-bold text-[28px]'>Soul</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={kiaSeltos} />
						</div>
						<p className='font-bold text-[28px]'>Seltos</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={kiaSportage}/>
						</div>
						<p className='font-bold text-[28px]'>Soul</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={kiaSorento}/>
						</div>
						<p className='font-bold text-[28px]'>Soul</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
				</div>
				<div  className='rounded-[40px] border-t-[2px] border-slate-400 px-[10px] pt-[10px]'>
					<img className="w-[100px]" src={audi}/>
				</div>
				<div className='flex justify-evenly w-screen h-[210px]'>
					<div>
						<div>
							<img className='w-[250px]' src={audiA5} />
						</div>
						<p className='font-bold text-[28px]'>A5</p>
						<p className='font-semibold text-[18px]'>$22,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={audiA8} />
						</div>
						<p className='font-bold text-[28px]'>A8</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={audiEtron}/>
						</div>
						<p className='font-bold text-[28px]'>Etron</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={audiQ5}/>
						</div>
						<p className='font-bold text-[28px]'>Q5</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
				</div>
				<div  className='rounded-[40px] border-t-[2px] border-slate-400 px-[10px] pt-[10px]'>
					<img className="w-[60px] h-[50px] object-cover" src={bmwMoono}/>
				</div>
				<div className='flex justify-evenly w-screen h-[210px]'>
					<div>
						<div>
							<img className='w-[250px]' src={audiA5} />
						</div>
						<p className='font-bold text-[28px]'>A5</p>
						<p className='font-semibold text-[18px]'>$22,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={audiA8} />
						</div>
						<p className='font-bold text-[28px]'>A8</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={audiEtron}/>
						</div>
						<p className='font-bold text-[28px]'>Etron</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='w-[250px]' src={audiQ5}/>
						</div>
						<p className='font-bold text-[28px]'>Q5</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
				</div>
			</div>
				: null}
			{section === "shoppingBar" ? <div className="absolute top-0 w-screen h-[400px] px-[100px] bg-white  pt-[40px]   ">
				<div className='h-[200px]   flex justify-evenly  '>
					<div className='w-[400px]  flex-row items-center justify-center text-center'>
						<div className='w-[400px] flex justify-center '><img className='w-[50px] ' src={money} /></div>
						<p className='font-bold text-[20px]'>Offer and Incentives</p>
					</div>
					<div className='w-[400px]  text-center '>
						<div className='w-[400px] flex justify-center'><img className='block w-[50px]' src={car} /></div>
						<p className='font-bold text-[20px]'>Build Your Car</p>
					</div>
					<div className='w-[400px] text-center '>
						<div className='w-[400px] flex justify-center'><img className='block w-[50px]' src={calculation} /></div>
						<p className='font-bold text-[20px]'>Payment Calculator</p>
					</div>
					<div className='w-[400px] text-center '>
						<div className='w-[400px] flex justify-center'><img className='block w-[50px]' src={note} /></div>
						<p className='font-bold text-[20px]'>Offer and Incentives</p>
					</div>
				</div>
				<div className='h-[250px]   flex justify-evenly  '>
					<div className='w-[400px]  flex-row items-center justify-center text-center'>
						<div className='w-[400px] flex justify-center '><img className='w-[50px] ' src={trade} /></div>
						<p className='font-bold text-[20px]'>Trade In</p>
					</div>
					<div className='w-[400px]  text-center '>
						<div className='w-[400px] flex justify-center'><img className='block w-[50px]' src={localPrice} /></div>
						<p className='font-bold text-[20px]'>Get a Local Price</p>
					</div>
					<div className='w-[400px] text-center '>
						<div className='w-[400px] flex justify-center'><img className='block w-[50px]' src={easyBuy} /></div>
						<p className='font-bold text-[20px]'>AAP EasyBuy</p>
					</div>
					<div className='w-[400px] text-center '>
						<div className='w-[400px] flex justify-center'><img className='block w-[50px]' src={testDrive} /></div>
						<p className='font-bold text-[20px]'>Test Drive</p>
					</div>
				</div>
				
			</div> : null}
			{section === "inventoryBar" ? <div className="absolute top-0 w-screen h-[250px]  bg-white py-[20px]  "> 
				<div className=''>
					<div className='w-screen font-bold text-[30px] text-center mb-[35px] border-b-[3px]'>Choose Your Brand</div>
					<div className='w-screen h-[100px] flex items-center justify-evenly'>
						<div>
							<img className='w-[100px] hover:scale-150 transition ' src={audi}/>
						</div>
						<div>
							<img className='w-[100px] hover:scale-150 transition' src={bmwMoono}/>
						</div>
						<div>
							<img className='w-[100px]  hover:scale-150 transition' src={kia}/>
						</div>
						<div>
							<img className='w-[100px]  hover:scale-150 transition' src={hyundai}/>
						</div>
						<div>
							<img className='w-[100px] hover:scale-150 transition' src={honda_black}/>		
						</div>		
						<div>
							<img className='w-[100px] hover:scale-150 transition' src={lambo} />
						</div>
					</div>		
				</div>	
			</div> : null}
		</div>
	)
};


export default Hero

