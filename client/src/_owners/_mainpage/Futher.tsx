import {about_1, futher_2} from '@/assets/user_about'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import { useEffect } from 'react';
const Futher = () => {

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
        <section className="py-16">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center"> 
                <div
                data-aos="fade-right"
                className="md:pb-20 pb-15">
                    <h1 className="text-4xl font-bold mb-4">
                        AAP - More Than Just Cars, It's a Connected Experience.
                    </h1>
                    <p className="text-xl leading-relaxed mb-6">
                        Seamlessly connect your personal device with your Kia for a better driving and ownership experience. Peace of mind, where available.
                    </p>
                    <Link to="">
                        <Button 
                            variant="outline" 
                            className="text-[22px] border border-black md:mt-10 mt-3 md:w-[350px] w-[300px] h-[45px] text-black hover:bg-black hover:text-white font-bold"
                        > 
                            Learn More 
                        </Button>
                    </Link>
                </div>
                <div
                data-aos="fade-left"
                > 
                    <img src={about_1} alt="Car showcase" className="w-full rounded-lg shadow-md" />
                </div>
            </div>

            <div className="container mx-auto hidden md:grid grid-cols-2 gap-8 items-center pt-10"> 
                <div
                data-aos="fade-right"
                > 
                    <img src={futher_2} alt="Car showcase" className="w-full rounded-lg shadow-md" />
                </div>
                <div
                data-aos="fade-left"
                className="pb-20 pl-20">
                    <h1 className="text-4xl font-bold mb-4"> AAP Maintenance Plan™ </h1>
                    <p className="text-xl leading-relaxed mb-6">
                        Keeping your car running smoothly should be convenient, efficient, and easy. Now you can manage your maintenance costs with the prepaid AAP Maintenance Plan (AMP). This plan gives you access to our extensive network of AAP-trained technicians who use Genuine car parts. No longer will you need to worry about increasing labor and parts costs to maintain your vehicle.                    
                    </p>
                    <Link to="">
                        <Button 
                            variant="outline" 
                            className="text-[22px] border border-black mt-10 w-[350px] h-[45px] text-black hover:bg-black hover:text-white font-bold"
                        > 
                            Learn More 
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="container mx-auto grid-cols-2 md:hidden gap-8 items-center pt-10"> 
                <div className="pb-10">
                    <h1 className="text-4xl font-bold mb-4"> AAP Maintenance Plan™ </h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Keeping your car running smoothly should be convenient, efficient, and easy. Now you can manage your maintenance costs with the prepaid AAP Maintenance Plan (AMP). This plan gives you access to our extensive network of AAP-trained technicians who use Genuine car parts. No longer will you need to worry about increasing labor and parts costs to maintain your vehicle.
                    </p>
                </div>
                <div> 
                    <img src={futher_2} alt="Car showcase" className="w-full rounded-lg shadow-md" />
                </div>
                <div>
                    <Link to="">
                        <Button 
                            variant="outline" 
                            className="text-[22px] border border-black mt-10 w-[300px] h-[45px] text-black hover:bg-black hover:text-white font-bold"
                        > 
                            Learn More 
                        </Button>
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Futher
