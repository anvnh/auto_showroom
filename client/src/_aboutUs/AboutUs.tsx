import { Canvas } from "@react-three/fiber";
import { MarqueText } from "@/_root/_homepage";
import {
  aap_jepg,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  an,
  anh,
  phat,
} from "@/assets/aboutUs";
import Navbar from "@/_shop/common/Navbar";
import Footer from "@/components/common/Footer";
const AboutUs = () => {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <div className="   w-screen h-screen flex flex-col justify-center items-center  select-none">
        <section className="  mt-[10%]   sm:mt-[8%] md:mt-[12%] mlg:mt-[8%] h-[20%] md:h-[15%]   w-[80%] xs:w-[90%]  md:w-[95%] lg:w-[80%]">
          <h2 className="text-[23px] xs:text-[27px] ss:text-[30px] sm:text-[35px] font-kanit font-bold w-full text-center text-stone-700">
            WE ARE FOUNDER FROM VKU, WHO HAVE A PASSION FOR CARS AND BUSINESS,
            CAR ARE OUR LIFE.
          </h2>
        </section>
        <section className=" mb-[3%] h-[60%] w-full flex justify-center items-center ">
          <img
            src={aap_jepg}
            className="w-[95%] h-full object-cover rounded-[20px]"
          />
        </section>
      </div>

      <div className="hidden lg:flex overflow-hidden w-screen h-[60%] bg-neutral-800   gap-x-[2%] justify-center items-center">
        <section className=" ml-[2%] h-1/2  w-[30%]">
          <p className="text-[30px] text-neutral-200 font-bold">
            Studio based in the city of free and creative people - Ngu Hanh Son,
            Da Nang
          </p>
        </section>
        <section className="h-1/2 w-[30%]">
          <p className="text-[17px] text-neutral-200 font-semibold">
            Our projects are grounded on the combination of creative view and
            commercial value, where: - It’s critical for us not only to create
            beautiful images but also to offer customer-oriented and
            high-quality service. We create influential and eye-catching visuals
            that capture people’s attention to your brand. You can see the
            symbiosis of the artistic vision and commercial implementation in
            our case studies.
          </p>
        </section>
        <section className="h-1/2 w-[30%]">
          <p className="text-[17px] text-neutral-200 font-semibold">
            Our inspired and enthusiastic team of 3D specialists can bring your
            ideas into volumetric reality. Scroll below to see each team player.
            Utopia 513 studio develops progressive directions, such as AR/VR/XR,
            and brings the 3D environment to the foreground. For example, the
            MARTHA project shows how we tell stories through details.
          </p>
        </section>
      </div>
      <div className="pl-[8%] ss:pr-[8%] flex flex-col justify-start  lg:hidden w-screen h-screen">
        <div className="pt-[10%] mb-[10%] w-full ">
          <p className="text-[25px] ss:text-[30px] sm:text-[35px] text-neutral-200 font-bold">
            Studio based in the city of free and creative people - Ngu Hanh Son,
            Da Nang
          </p>
        </div>
        <div className=" pb-[10%]">
          <p className="mb-[8%] text-[17px] ss:text-[20px] sm:text-[22px] text-neutral-200 font-semibold">
            Our projects are grounded on the combination of creative view and
            commercial value, where: - It’s critical for us not only to create
            beautiful images but also to offer customer-oriented and
            high-quality service. We create influential and eye-catching visuals
            that capture people’s attention to your brand.
          </p>
          <p className="text-[17px] ss:text-[20px] sm:text-[22px] text-neutral-200 font-semibold">
            Our inspired and enthusiastic team of 3D specialists can bring your
            ideas into volumetric reality. Scroll below to see each team player.
            Utopia 513 studio develops progressive directions, such as AR/VR/XR,
            and brings the 3D environment to the foreground.
          </p>
        </div>
      </div>

      <div className="w-screen h-[70%] flex flex-col bg-neutral-100 text-neutral-700">
        <section className="w-screen h-1/2  flex justify-evenly">
          <div className="w-[45%] sm:w-[40%] h-[90%]  flex flex-col justify-center items-center">
            <h3 className="text-[70px] xs:text-[80px] lg:text-[100px]">35</h3>
            <p className="text-[18px] sm:text-[20px] xsm:text-[22px]">
              Projects in 2023
            </p>
          </div>
          <div className="w-[45%] sm:w-[40%] h-[90%] flex flex-col justify-center items-center">
            <h3 className="text-[70px] xs:text-[80px] lg:text-[100px]">15+</h3>
            <p className="text-[18px] sm:text-[20px] xsm:text-[22px]">
              Talents on board
            </p>
          </div>
        </section>
        <section className="w-screen h-1/2  flex  justify-evenly">
          <div className="w-[45%] sm:w-[40%] h-[90%] flex flex-col justify-center items-center">
            <h3 className="text-[70px] xs:text-[80px] lg:text-[100px]">50+</h3>
            <p className="text-[18px] sm:text-[20px] xsm:text-[22px]">
              Clients worldwide
            </p>
          </div>
          <div className="w-[45%] sm:w-[40%] h-[90%] flex flex-col justify-center items-center">
            <h3 className="text-[70px] xs:text-[80px] lg:text-[100px]">2</h3>
            <p className="text-[18px] sm:text-[20px] xsm:text-[22px]">
              Years experience
            </p>
          </div>
        </section>
      </div>

      <div className="hidden sm:flex flex-col w-screen h-1/2  bg-neutral-800">
        <section className="w-full h-1/2 flex justify-evenly ">
          <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon1}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
            />
            <p className="text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              HIGH-QUALITY RENDERS: STUNNING VISUALS TO BRING YOUR IDEAS TO LIFE
            </p>
          </div>
          <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon2}
              className="  w-[40px] h-[40px] md:w-[50px] md:h-[50px] "
            />
            <p className="text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              DIVERSE EXPERTISE: SKILLED TEAM WITH VARIOUS INDUSTRIES & STYLES
              EXPERTISE
            </p>
          </div>
          <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon3}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]  "
            />
            <p className="text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              COLLABORATIVE APPROACH: WORK CLOSELY WITH CLIENTS TO MEET THEIR
              EXPECTATIONS
            </p>
          </div>
        </section>
        <section className="w-full h-1/2 flex justify-evenly ">
          <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon4}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] "
            />
            <p className="text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              FAST TURNAROUND: EFFICENT DELIVERY AND NON-COMPROMISING QUALITY
            </p>
          </div>
          <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon5}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] "
            />
            <p className="text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              CUSTOMIZABLE SOLUTIONS: TAILORED 3D SOLUTIONS FOR YOUR UNIQUE
              REQUIREMENTS
            </p>
          </div>
          <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon6}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
            />
            <p className="text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              CUTTING-EDGE TECHNOLOGY: LATEST SOFTWARE & HARDWARE FOR TOP-NOTCH
              RESULTS
            </p>
          </div>
        </section>
      </div>

      <div className="w-screen h-[500px] flex flex-col justify-center items-center gap-y-[5%] md:hidden">
        <section className="w-full  flex justify-evenly items-center  ">
          <div className="w-[45%]  flex justify-center  items-center gap-x-[2%]">
            <img
              src={icon1}
              className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] md:w-[50px] md:h-[50px]"
            />
            <p className="text-[13px] xs:text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              HIGH-QUALITY RENDERS: STUNNING VISUALS TO BRING YOUR IDEAS TO LIFE
            </p>
          </div>
          <div className="w-[45%]  flex justify-center items-center gap-x-[2%]">
            <img
              src={icon2}
              className="w-[30px] h-[30px]  xs:w-[40px] xs:h-[40px] md:w-[50px] md:h-[50px] "
            />
            <p className="text-[13px] xs:text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              DIVERSE EXPERTISE: SKILLED TEAM WITH VARIOUS INDUSTRIES & STYLES
              EXPERTISE
            </p>
          </div>
        </section>
        <section className="w-full flex justify-evenly items-center">
          <div className="w-[45%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon3}
              className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] md:w-[50px] md:h-[50px]  "
            />
            <p className="text-[13px] xs:text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              COLLABORATIVE APPROACH: WORK CLOSELY WITH CLIENTS TO MEET THEIR
              EXPECTATIONS
            </p>
          </div>
          <div className="w-[45%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon4}
              className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] md:w-[50px] md:h-[50px] "
            />
            <p className="text-[13px] xs:text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              FAST TURNAROUND: EFFICENT DELIVERY AND NON-COMPROMISING QUALITY
            </p>
          </div>
        </section>
        <section className="w-full flex justify-evenly items-center">
          <div className="w-[45%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon5}
              className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] md:w-[50px] md:h-[50px] "
            />
            <p className="text-[13px] xs:text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              CUSTOMIZABLE SOLUTIONS: TAILORED 3D SOLUTIONS FOR YOUR UNIQUE
              REQUIREMENTS
            </p>
          </div>
          <div className="w-[45%] h-full flex justify-center items-center gap-x-[2%]">
            <img
              src={icon6}
              className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] md:w-[50px] md:h-[50px]"
            />
            <p className="text-[13px] xs:text-[15px] xsm:text-[16px] lg:text-[20px] font-kanit font-semibold">
              CUTTING-EDGE TECHNOLOGY: LATEST SOFTWARE & HARDWARE FOR TOP-NOTCH
              RESULTS
            </p>
          </div>
        </section>
      </div>

      <MarqueText />
      <div className="w-screen h-screen flex justify-evenly items-center ">
        <section className="w-[28%] h-full">
          <img src={anh} className="w-full h-[80%] object-cover" />
          <div className="w-full h-[40%]">
            <h2 className="text-[30px] font-kanit font-semibold ">
              NGUYEN VAN TUAN ANH
            </h2>
            <p className="text-[17px] font-kanit font-semibold">FOUNDER</p>
          </div>
        </section>
        <section className="w-[28%] h-full ">
          <img src={an} className="w-full h-[80%] object-cover" />
          <div className="w-full h-[40%]">
            <h2 className="text-[30px] font-kanit font-semibold ">
              VO NGUYEN HOANG AN
            </h2>
            <p className="text-[17px] font-kanit font-semibold">FOUNDER</p>
          </div>
        </section>

        <section className="w-[28%] h-full">
          <img src={phat} className="w-full h-[80%] object-cover" />
          <div className="w-full h-[40%]">
            <h2 className="text-[30px] font-kanit font-semibold ">
              LA TRUONG HOANG PHAT
            </h2>
            <p className="text-[17px] font-kanit font-semibold">FOUNDER</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
