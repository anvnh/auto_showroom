import { Navbar } from "@/_root/_homepage";
import { mer, toyota, bmw, audi, audisport, lexus, lambo, hyundai, acura, ferari, } from "@/assets/hplat_asset/img/car_logo";

import {
  sport1,
  sport2,
  sport3,
  sport4,
  audiA5,
} from "@/assets/audiA5/sportback";
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
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={0.2}>
          <img className="h-[500vh] w-screen" src={bg_1} />
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

            <div className="absolute top-[100px] text-[50px] font-bold text-white ml-[100px]">
              Audi S6 Limousine
            </div>
          </div>

          <div className="w-screen h-[700px] flex justify-center ">
            <div className="   flex flex-col sm:flex-row items-center justify-center text-center rounded-[40px] my-[150px]  backdrop-blur-md  w-[1000px] gap-y-[20px]  text-white border">
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
            <div className=" absolute text-[50px] font-bold text-white mt-[80px] ml-[50px] ">
              Luxury and Elegent
            </div>
            <img className="w-screen h-screen object-cover" src={s3} />
          </div>
          <div className="text-center "></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1}>
          <div className="w-screen h-screen flex justify-center relative ">
            <motion.img
              className="w-[500px] h-[500px]   object-cover"
              src={s4}
              initial={{
                display: "absolute",
                left: "-500px",
              }}
              animate={{
                display: "block",
                left: "0px",
              }}
            ></motion.img>
            <img className="w-[500px] h-[500px] object-cover" src={s5} />
          </div>
            <div>
            <Slider

              width="250px"
              duration={10}
              pauseOnHover={false}
              blurBorders={false}
              blurBoderColor={"#fff"}
            >
              <Slider.Slide>
                <img src={toyota} className="w-[150px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={bmw}  className="w-[100px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={audi}  className="w-[100px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={acura}  className="w-[150px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={lambo}  className="w-[100px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={ferari} className="w-[60px]  object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={hyundai}  className="w-[150px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={audisport} className="w-[200px] object-cover" />
              </Slider.Slide>
              <Slider.Slide>
                <img src={lexus}  className="w-[150px] object-cover" />
              </Slider.Slide>
            </Slider>
          </div>
        </ParallaxLayer>
          

      
      </Parallax>
    </div>
  );
};

export default Audi_A5_Sportback;
