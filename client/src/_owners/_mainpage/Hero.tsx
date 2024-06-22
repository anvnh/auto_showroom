import { user_hero_1 } from "@/assets";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 900,

			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);

	return (
		<div className="w-full">
			<div className="relative flex h-[650] overflow-hidden">
				<div
					style={{ backgroundImage: `url(${user_hero_1})` }}
					className="w-full h-[840px] bg-center bg-cover duration-500 "
				></div>
				<div className="absolute left-0 top-100 h-[840px] w-[65%] bg-gradient-to-r from-gray-950"></div>
				<div className="md:flex hidden">
					<div className="absolute inset-0 flex flex-col justify-start items-start text-white ml-28 mt-36">
						<h1
							data-aos="zoom-out"
							className="text-5xl font-poppins font-bold mb-6"
						>
							{" "}
							Everything Your Car <br /> Needs, All in One Place{" "}
						</h1>
						<p
							data-aos="zoom-out"
							className="text-3xl font-poppins"
						>
							{" "}
							Your personal portal to a world <br /> of car
							ownership resources.{" "}
						</p>
						<div className="flex mt-16 font-bold borer-2px text-3xl">
							If you interested in our community,&nbsp;
                            
						</div>
                        <Link to="/social" className="pt-10">
                            <button className="relative flex h-[50px] w-56 items-center rounded-3xl justify-center overflow-hidden bg-gray-600 text-xl font-poppins  text-white shadow-2xl transition-all ease-in-out duration-700 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-gray-950 hover:shadow-gray-800 hover:before:border-[25px]">
                                <span className="relative z-10">
                                    Give it a try
                                </span>
                            </button>
                        </Link>
					</div>
				</div>
				<div className="md:hidden flex">
					<div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white ml-11 mb-24">
						<h1 className="text-[30px] font-poppins font-bold mb-1 bg-slate-900 bg-opacity-45 rounded-3xl w-full">
							{" "}
							Everything Your Car <br /> Needs, All in One Place{" "}
						</h1>
						<p className="text-[21px] font-poppins mb-7 bg-slate-900 bg-opacity-45 rounded-xl w-full">
							{" "}
							Your personal portal to a world <br /> of car
							ownership resources.{" "}
						</p>
						<Button className="h-[45px] bg-white text-black font-poppins text-[23px] w-[320px] mb-3">
							Sign in
						</Button>
						<Button className="h-[45px] bg-transparent border-solid border-2 border-white font-poppins text-[23px] w-[320px]">
							Create an account
						</Button>
                        <Link to="/social" className="pt-10 text-bold text-xl">
                            Give our community a try
                        </Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
