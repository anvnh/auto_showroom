import { Navbar } from "@/_root/_homepage";
import { mer, toyota, bmw, audi, audisport, lexus, lambo, hyundai, acura, ferari, } from "@/assets/hplat_asset/img/car_logo";
import {
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
} from "@/assets/hplat_asset/car/audiS6";
import { bg_1 } from "@/assets/hplat_asset/img/background";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Slider from "react-infinite-logo-slider";
const Audi_A5_Sportback = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={0.2}>
          <img className="h-[600vh] w-screen" src={bg_1} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5}  speed={1.5}>
          <img className="h-[600vh] w-screen" src={bg_1}/>
          </ParallaxLayer> 
        <ParallaxLayer offset={0} speed={1}>
          <div className="w-screen bg-primary">
            <Navbar />
          </div>
          <div className="relative">
            <motion.img
              className="w-screen h-screen object-cover"
              src={s1}
              initial={{
                opacity: 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              whileInView={{
                opacity: 1,
              }}
            />

            <div className="absolute top-[50px] md:top-[70px] lg:top-[50px] ml-[20px] sm:ml-[30px] md:ml-[40px] text-[27px] sm:text-[35px] md:text-[40px] lg:text-[44px] font-bold text-white  ">
              Audi S6 Limousine
            </div>
          </div>

          <div className="w-screen h-screen flex justify-center ">
            <div className="   flex flex-col sm:flex-row items-center justify-center text-center rounded-[40px] my-[250px]  backdrop-blur-md  w-[1000px]  gap-y-[20px]  text-white border">
              <motion.div
                className=" w-[300px] pb-[20px]  border-b sm:border-b-0 border-slate-600 sm:border-r"
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: "0.2",
                }}
              >
                <div className="lg:text-[18px]">EPA-estimated fuel economy</div>
                <div className="text-[30px] lg:text-[35px]">35 MPG</div>
                <div className="lg:text-[18px]">View key MPG info</div>
              </motion.div>
              <motion.div
                className=" w-[300px] pb-[20px] border-b sm:border-b-0 border-slate-600 sm:border-r"
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: "0.2",
                }}
              >
                <div className="lg:text-[18px]">Transmission</div>
                <div className="text-[30px] lg:text-[35px] ">7-speed</div>
                <div className="lg:text-[18px]">S tronic</div>
              </motion.div>
              <motion.div
                className=" w-[300px]   "
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: "0.2",
                }}
              >
                <div className="lg:text-[18px]">Matrix-design</div>
                <div className="text-[30px] lg:text-[35px]">LED headlights</div>
                <div className="lg:text-[18px]">Full LED</div>
              </motion.div>
            </div>
          </div>
          <div className="relative">
            <div className=" absolute text-[25px] sm:text-[30px] md:text-[35px] font-bold text-white mt-[80px] ml-[50px]  ">
              Luxury and Elegent
            </div>
            <img className="w-screen h-screen object-cover" src={s3} />
          </div>
          <div className="text-center "></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <div className="w-screen h-screen ">
            <p className=" w-screen font-bold text-[25px] sm:text-[30] md:text-[35px]  text-white mb-[20px] pl-[20px]">Best Car to Race</p>
          <img className="w-screen h-[600px] object-cover" src={s5}/>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
         <div className="w-screen h-screen">
          <p className="w-screen  font-bold text-[25px] sm:text-[30] md:text-[35px] text-white text-end pr-[20px] mb-[20px]">
              Scorpion Eyes
            </p>
            <img className="w-screen h-[600px]   object-cover"  src={s4}/>
          </div> 
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.3}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-[35px] md:gap-x-[50px] px-[50px] md:px-[100px]">
            <img className=" w-[800px] md:w-[680px] lg:w-[800px] mlg:w-[900px] xl:w-[1000px] object-cover rounded-[40px]" src={s9}/>
            <div>
                <p className=" text-center md:text-start w-[800px] md:w-[250px] lg:w-[300px] mlg:w-[400px] xl:w-[500px] ss:text-red-500 sm:text-purple-500 md:text-yellow-500 lg:text-blue-500 xl:text-red-500 font-bold text-[30px]  md:text-[25px] lg:text-[30px] text-white">F1 racing car interior</p>
                <p className="font-semibold hidden md:block md:text-[18px] lg:text-[20px] text-white">The interior is made from high-quality materials, bringing luxury to the driver. With coherent control clusters that make car owners excited</p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.3}>
          <div className="flex flex-col md:flex-row justify-center items-center px-[50px]   md:gap-x-[50px] lg:gap-x-[20px]">
            <div>
                <p className="  w-[600px] text-center md:text-start md:w-[350px] lg:w-[400px] xl:w-[500px] font-bold text-[25px] mlg:text-[30px] xl:text-[33px] mb-[20px] text-white ss:text-red-500 sm:text-green-500 md:text-yellow-500 mlg:text-red-500 xl:text-blue-800">High performance chair set</p>
                <p className=" hidden md:block font-semibold md:text-[18px] mlg:text-[20px] text-white">Brings an exciting experience to the driver, continuing on difficult roads and overcoming storms
</p>
            </div>
            <img className="w-[1000px] md:w-[630px] lg:w-[700px] mlg:w-[900px] xl:w-[1100px] object-cover rounded-[40px]" src={s8}/>
            
          </div>
        </ParallaxLayer>
          

      
      </Parallax>
    </div>
  );
};

export default Audi_A5_Sportback;
