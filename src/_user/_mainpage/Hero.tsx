import { user_hero_1 } from "@/assets"
import { Button } from '@/components/ui/button'

const Hero = () => {
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
                        <h1 className="text-5xl font-poppins font-bold mb-6"> Everything Your Car <br/> Needs, All in One Place </h1>
                        <p className="text-3xl font-poppins"> Your personal portal to a world <br/> of car ownership resources. </p>
                    </div>
                </div>
                <div className="md:hidden flex">
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white ml-11 mb-24">
                        <h1 className="text-[30px] font-poppins font-bold mb-1"> Everything Your Car <br/> Needs, All in One Place </h1>
                        <p className="text-[21px] font-poppins mb-7"> Your personal portal to a world <br/> of car ownership resources. </p>
                        <Button className="h-[45px] bg-white text-black font-poppins text-[23px] w-[320px] mb-3"> Sign in  </Button>
                        <Button className="h-[45px] bg-transparent border-solid border-2 border-white font-poppins text-[23px] w-[320px]"> Create an account </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
